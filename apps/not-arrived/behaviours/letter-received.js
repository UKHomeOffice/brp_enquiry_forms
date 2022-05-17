/* eslint-disable consistent-return */
'use strict';

const momentBusiness = require('moment-business');
const moment = require('moment');

function isWithin(value, days) {
  if (value) {
    const cutoff = momentBusiness.addWeekDays(moment(value), days);
    return moment(cutoff).isAfter(moment());
  }
}

function weekDayRange(value, days) {
  if (value) {
    const dateReceived = moment(value);
    const weekDaysSince = momentBusiness.weekDays(dateReceived, moment());
    return {
      weekDaysSince: weekDaysSince,
      weekDaysUntil: days - weekDaysSince
    };
  }
}

module.exports = superclass => class LetterRecieved extends superclass {
  saveValues(req, res, next) {
    const deliveryDate = req.form.values['delivery-date'];
    const isLetterLost = req.form.values['no-letter'];
    console.log(req.form);
    if (deliveryDate && isWithin(deliveryDate, 10)) {
      req.sessionModel.set('week-day-range', weekDayRange(deliveryDate, 10));
      req.form.options.next = '/on-the-way';
    } else if (isLetterLost) {
      req.form.options.next = '/letter-lost';
    } else {
      req.form.options.next = '/same-address';
    }
    super.saveValues(req, res, next);
  }
};
