'use strict';

function prettyName(value) {
  return value.replace(/-/g, ' ').replace('error', '');
}

function getTruncatedItems(req) {
  return req.sessionModel.get('truncated-items');
}

function truncatedItem(req) {
  var itemOne = getTruncatedItems(req).filter(function filterUndefined(item) {
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
  var values = req.form.values;
  var items = getTruncatedItems(req);

  items = items.map(function mapPageMatch(item) {
    if (item.id === values['truncation-page']) {
      item.value = values.truncated;
    }
    return item;
  });

  req.sessionModel.set('truncated-items', items);
}

function identity(req, all, value) {
  var method = (Boolean(all) === true) ? [].every : [].some;
  return method.call(getTruncatedItems(req), function findIdentity(item) {
    return item.value === value;
  });
}


module.exports = superclass => class Truncated extends superclass {

  locals(req, res) {
    return Object.assign({}, super.locals(req, res), {
      baseUrl: req.baseUrl,
      nextPage: this.getNextStep(req, res),
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
