'use strict';

var util = require('util');
var DateController = require('../lib/date-controller');
var Controller = require('hmpo-form-wizard').Controller;
var moment = require('moment');

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

  DateController.prototype.saveValues.apply(this, arguments);
};

AboutErrorController.prototype.validateField = function validateField(key) {
  if (isChecked.apply(this, arguments)) {
    if (isDatePart(key)) {
      return DateController.prototype.validateField.apply(this, arguments);
    }
    return Controller.prototype.validateField.apply(this, arguments);
  }
  return undefined;
};

module.exports = AboutErrorController;
