'use strict';

var util = require('util');
var DateController = require('hof').controllers.date;
var BaseController = require('hof').controllers.base;
var ErrorClass = require('hof').controllers.error;
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

AboutErrorController.prototype.getNextStep = function getNextStep(req) {
  var next = BaseController.prototype.getNextStep.apply(this, arguments);
  var truncatedItems = getTruncatedItems(req);
  req.sessionModel.unset('triage');

  if (isChecked.call(this, 'conditions-error-checkbox', req) && req.sessionModel.get('location-applied') === 'yes') {
    req.sessionModel.set('triage', true);
  } else if (isChecked.call(this, 'letter-error-checkbox', req) && req.sessionModel.get('location-applied') === 'yes') {
    next = req.baseUrl + '/enrolment-letter';
  } else if (truncatedItems) {
    next = req.baseUrl + '/truncated';
    req.sessionModel.set('truncated-items', truncatedItems);
  } else if (this.referrer && this.referrer.indexOf('/check-details') !== -1) {
    next = req.baseUrl + '/check-details';
  }
  return next;
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

  BaseController.prototype.saveValues.call(this, req, res, callback);
};

AboutErrorController.prototype.validateField = function validateField(key, req) {

  if (anyChecked.call(this, req).length === 0) {
    return new ErrorClass('error-selection', {
      key: 'error-selection',
      type: 'required',
      redirect: undefined
    });
  }

  if (isDatePart(key)) {
    // fields[key].dependent is not available for dates
    if (isChecked.apply(this, arguments)) {
      return DateController.prototype.validateField.apply(this, arguments);
    }
  } else {
    return BaseController.prototype.validateField.apply(this, arguments);
  }
};

module.exports = AboutErrorController;
