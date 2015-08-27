'use strict';

var util = require('util');
var DateController = require('../lib/date-controller');
var Controller = require('../lib/base-controller');
var ErrorClass = require('../lib/base-error');
var _ = require('underscore');

var AboutErrorController = function AboutErrorController() {
  this.dateKey = 'date-of-birth-error';
  DateController.apply(this, arguments);
};

util.inherits(AboutErrorController, DateController);

var truncateConfigs = [
  {
    id: 'first-name-error',
    max: 30
  },
  {
    id: 'last-name-error',
    max: 30
  },
  {
    id: 'birth-place-error',
    max: 16
  }
];

function isDatePart(key) {
  return key.indexOf('date') !== -1;
}

function isChecked(key, req) {
  if (isDatePart(key)) {
    key = this.dateKey;
  }
  if (req.form.values[key + '-checkbox']) {
    return req.form.values[key + '-checkbox'] === 'true';
  }
  return req.form.values[key] === 'true';
}

function isTooLong(key, max, req) {
  return isChecked.call(this, key, req) && req.form.values[key].length > max;
}

function getTruncatedItems(req) {
  var items;

  truncateConfigs.forEach(function eachConfig(config) {
    if (isTooLong.call(this, config.id, config.max, req)) {
      if (!items) {
        items = [];
      }
      items.unshift({id: config.id});
    }
  });
  return items;
}

function anyChecked(req) {
  return _.filter(_.keys(req.form.values), function filterChecked(valueKey) {
    return isChecked.call(this, valueKey, req);
  }.bind(this));
}

AboutErrorController.prototype.setNextPage = function setNextPage(req) {
  var truncatedItems = getTruncatedItems(req);

  if (isChecked.call(this, 'conditions-error-checkbox', req) && req.sessionModel.get('location-applied') === 'yes') {
    this.options.next = '/conditions-and-length';
  } else if (truncatedItems) {
    this.options.next = '/truncated';
    req.sessionModel.set('truncated-items', truncatedItems);
  } else if (this.referrer && this.referrer.indexOf('/check-details') !== -1) {
    this.options.next = '/check-details';
  }
};

AboutErrorController.prototype.saveValues = function saveValues(req, res, callback) {
  DateController.prototype.format.call(this, req);

  var formData = _.clone(req.form.values);
  var diff;

  req.form.values = _.pick(formData, function pickCheckedData(value, key) {
    return isChecked.call(this, key, req);
  }.bind(this));

  diff = _.filter(_.keys(formData), function filterDiff(key) {
    return !_.has(req.form.values, key);
  });

  req.sessionModel.unset(diff);

  Controller.prototype.saveValues.call(this, req, res, callback);
};

AboutErrorController.prototype.validateField = function validateField(key, req) {

  if (anyChecked.call(this, req).length === 0) {
    return new ErrorClass('error-selection', {
      key: 'error-selection',
      type: 'required',
      redirect: undefined
    });
  }

  if (isChecked.apply(this, arguments)) {
    if (isDatePart(key)) {
      return DateController.prototype.validateField.apply(this, arguments);
    }
    return Controller.prototype.validateField.apply(this, arguments);
  }
  return undefined;
};

module.exports = AboutErrorController;
