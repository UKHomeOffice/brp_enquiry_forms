'use strict';

var util = require('util');
var DateController = require('../lib/date-controller');
var Controller = require('../lib/base-wizard').Controller;
var ErrorClass = require('../lib/base-wizard').Error;
var moment = require('moment');
var _ = require('underscore');

var AboutErrorController = function AboutErrorController() {
  this.dateKey = 'date-of-birth-error';
  DateController.apply(this, arguments);
};

util.inherits(AboutErrorController, DateController);

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

function anyChecked(req) {
  return _.filter(_.keys(req.form.values), function filterChecked(valueKey) {
    return isChecked.call(this, valueKey, req);
  }.bind(this));
}

AboutErrorController.prototype.saveValues = function saveValues(req) {
  if (req.form.values['date-of-birth-error-day']) {
    var day = req.form.values['date-of-birth-error-day'];
    var month = req.form.values['date-of-birth-error-month'];
    var year = req.form.values['date-of-birth-error-year'];
    var formattedDate = moment([year, month, day]);

    req.form.values['date-of-birth-error-formatted'] = formattedDate.format('D MMMM YYYY');
  }

  if (isChecked.call(this, 'conditions-error-checkbox', req)) {
    this.options.next = '/conditions-and-length';
  } else {
    this.options.next = '/same-address';
  }

  Controller.prototype.saveValues.apply(this, arguments);
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
