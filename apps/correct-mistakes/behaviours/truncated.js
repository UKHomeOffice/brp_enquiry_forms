/* eslint-disable arrow-body-style, consistent-return */
'use strict';

function prettyName(value) {
  return value.replace(/-/g, ' ').replace('error', '');
}

function getTruncatedItems(req) {
  return req.sessionModel.get('truncated-items');
}

function truncatedItem(req) {
  const itemOne = getTruncatedItems(req).filter(item => {
    return item.value === undefined;
  })[0];

  if (itemOne) {
    return {
      id: itemOne.id,
      pretty: prettyName(itemOne.id),
      value: req.form.values[itemOne.id],
      length: req.form.values[itemOne.id].length,
      slice: req.form.values[itemOne.id].slice(0, 30)
    };
  }
}

function updateTruncatedItems(req) {
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
    updateTruncatedItems(req);

    if (identity(req, true, 'yes') === true) {
      req.form.options.next = '/exit-truncated';
    }

    if (identity(req, false, 'no') === true) {
      req.form.options.next = '/uk-address';
    }

    if (identity(req, false, undefined) === true) {
      req.form.options.next = '/truncated';
    }

    super.saveValues(req, res, next);
  }
};
