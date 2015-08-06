'use strict';

var util = require('util');
var Controller = require('../lib/base-controller');

var TruncatedController = function TruncatedController() {
  Controller.apply(this, arguments);
};

util.inherits(TruncatedController, Controller);

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

TruncatedController.prototype.locals = function truncatedLocals(req, res) {
  return {
    baseUrl: req.baseUrl,
    nextPage: this.getNextStep(req, res),
    truncatedItem: truncatedItem(req)
  };
};

TruncatedController.prototype.saveValues = function saveValues(req) {

  updateTruncatedItems(req);

  if (identity(req, true, 'yes') === true) {
    this.options.next = '/exit-truncated';
  }

  if (identity(req, false, 'no') === true) {
    this.options.next = '/same-address';
  }

  if (identity(req, false, undefined) === true) {
    this.options.next = '/truncated';
  }

  Controller.prototype.saveValues.apply(this, arguments);
};

module.exports = TruncatedController;
