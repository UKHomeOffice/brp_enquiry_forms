'use strict';

var util = require('util');
var DateController = require('hof').controllers.date;
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

function isWithin(value, days) {
  if (value) {
    return moment(value, dateFormat)
      .addWeekDays(days)
      .isAfter(moment()) === true;
  }
}

function weekDayRange(value, days) {
  var weekDaysSince;
  var dateReceived;

  if (value) {
    dateReceived = moment(value, dateFormat);
    weekDaysSince = moment().weekDays(dateReceived);

    return {
      weekDaysSince: weekDaysSince,
      weekDaysUntil: days - weekDaysSince
    };
  }
}

LetterRecievedController.prototype.saveValues = function saveValues(req) {
  var deliveryDate = getValue(req, 'delivery-date');
  if (isWithin(deliveryDate, 10)) {
    req.sessionModel.set('week-day-range', weekDayRange(deliveryDate, 10));
    this.options.next = '/on-the-way';
  }
  return DateController.prototype.saveValues.apply(this, arguments);
};

LetterRecievedController.prototype.validateField = function validateField(key, req) {
  if (getValue(req, 'no-letter') === 'true') {
    return undefined;
  }
  if (getValue(req, 'received') === 'no') {
    return undefined;
  }
  if (key.indexOf(this.dateKey) !== -1 && getValue(req, 'received') === '') {
    return undefined;
  }
  return DateController.prototype.validateField.apply(this, arguments);
};

module.exports = LetterRecievedController;
