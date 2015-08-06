'use strict';

var util = require('util');
var Controller = require('../lib/base-wizard').Controller;
var DateController = require('../lib/date-controller');
var debug = require('debug')('controllers/letter-recieved');

var moment = require('moment');
var dateFormat = 'DD-MM-YYYY';

var LetterRecievedController = function LetterRecievedController() {
  this.dateKey = 'delivery-date';
  DateController.apply(this, arguments);
};

util.inherits(LetterRecievedController, DateController);

function getValue(req, key) {
  if (req.form && req.form.values) {
    return req.form.values[key];
  }
}

function checkReceived(form, value) {
  var received = getValue(form, 'received');
  if (received) {
    return received === value;
  }
}

function isWithin(value, days) {
  if (value) {
    return moment(value, dateFormat)
      .addWeekDays(days)
      .isAfter(moment()) === true;
  }
}

function hasDateKey(key) {
  return key.indexOf(this.dateKey) !== -1;
}

function weekDayRange(req) {
  var value = getValue(req, 'delivery-date');
  var weekDaysSince;
  var dateReceived;

  if (value) {
    dateReceived = moment(value, dateFormat);
    weekDaysSince = moment().weekDays(dateReceived);

    return {
      weekDaysSince: weekDaysSince,
      weekDaysUntil: 10 - weekDaysSince
    };
  }
}

LetterRecievedController.prototype.saveValues = function saveValues(req) {

  if (isWithin(getValue(req, 'delivery-date'), 10)) {
    this.options.next = '/on-the-way';
    req.sessionModel.set('week-day-range', weekDayRange(req, 10));
  } else if (checkReceived(req, 'no')) {
    this.options.next = '/letter-not-received';
  } else {
    this.options.next = '/same-address';
  }

  return Controller.prototype.saveValues.apply(this, arguments);
};

LetterRecievedController.prototype.validateField = function validateField(key, req) {
  debug('Validating field %s', key);

  if (req.form.values['no-letter'] === 'true') {
    return undefined;
  }
  if (checkReceived(req, 'no')) {
    return undefined;
  }
  if (checkReceived(req, '') && hasDateKey.call(this, key)) {
    return undefined;
  }

  return DateController.prototype.validateField.apply(this, arguments);
};

module.exports = LetterRecievedController;
