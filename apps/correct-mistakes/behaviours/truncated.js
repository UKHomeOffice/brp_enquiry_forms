/* eslint-disable consistent-return */
'use strict';

function prettyName(value) {
  return value.replace(/-/g, ' ').replace('error', '');
}

function getTruncatedItems(req) {
  return req.sessionModel.get('truncated-items');
}

function truncatedItem(req) {
  // Gets the first truncated item that has not yet been shown to the user
  // If the value is set, we have warned the user about the truncation
  const itemOne = getTruncatedItems(req).filter(item => {
    return item.value === undefined;
  })[0];

  if (itemOne) {
    return {
      id: itemOne.id,
      pretty: prettyName(itemOne.id),
      value: req.form.values[itemOne.id],
      length: req.form.values[itemOne.id].length,
      slice: req.form.values[itemOne.id].slice(0, itemOne.max),
      max: itemOne.max
    };
  }
}

function updateTruncatedItems(req) {
  // Called once the user confirms if their BRP shows the correctly truncated value
  // Will update our session to show that we have informed the user that it should be truncated
  // This is so we don't show this truncated item warning again
  const values = req.form.values;
  let items = getTruncatedItems(req);

  items = items.map(item => {
    if (item.id === values['truncation-page']) {
      item.value = values.truncated;
    }
    return item;
  });

  req.sessionModel.set('truncated-items', items);
}

function identity(req, all, value) {
  const method = (Boolean(all) === true) ? [].every : [].some;
  return method.call(getTruncatedItems(req), item => {
    return item.value === value;
  });
}


module.exports = superclass => class Truncated extends superclass {
  locals(req, res) {
    return Object.assign({}, super.locals(req, res), {
      truncatedItem: truncatedItem(req)
    });
  }

  saveValues(req, res, next) {
    // We've shown the user a truncated item warning and they've confirmed how it appears on their BRP
    updateTruncatedItems(req);

    // Have we warned the user about all truncated items?
    if (identity(req, true, 'yes') === true) {
      // Yes, show the exit-truncation page
      // Set our data for the template
      const truncatedDetail = getTruncatedItems(req).map(item => {
        return {
          id: item.id,
          prettyName: item.prettyName,
          max: item.max,
          translations: item.translations
        };
      });
      req.sessionModel.set('truncatedDetail', truncatedDetail);

      req.form.options.next = '/exit-truncated';
    } else {
      // We need to store the truncated value in session so we can display the truncated value on the confirmation page
      getTruncatedItems(req).forEach(item => {
        req.sessionModel.set(item.id + '-truncated', req.form.historicalValues[item.id].slice(0, item.max));
      });
    }

    // Have we got any truncated items at all?
    if (identity(req, false, 'no') === true) {
      // No we don't, so continue down the happy path
      req.form.options.next = '/uk-address';
    }

    // Do we still have truncated items that we need to warn the user about?
    if (identity(req, false, undefined) === true) {
      // Yes we do, loop back to the truncated page
      req.form.options.next = '/truncated';
    }

    super.saveValues(req, res, next);
  }
};
