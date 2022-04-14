/* eslint-disable consistent-return */
'use strict';

require('moment-business');
const moment = require('moment');

function isWithin(value, days) {
  if (value) {
    const cutoff = moment(value)
      .addWeekDays(days);
    return cutoff.isAfter(moment());
  }
}

function weekDayRange(value, days) {
  if (value) {
    const dateReceived = moment(value);
    const weekDaysSince = moment().weekDays(dateReceived);

    return {
      weekDaysSince: weekDaysSince,
      weekDaysUntil: days - weekDaysSince
    };
  }
}

module.exports = superclass => class LetterRecieved extends superclass {
  saveValues(req, res, next) {
    const deliveryDate = req.form.values['delivery-date'];
    if (deliveryDate && isWithin(deliveryDate, 10)) {
      req.sessionModel.set('week-day-range', weekDayRange(deliveryDate, 10));
      req.form.options.next = '/on-the-way';
    } else {
      req.form.options.next = '/same-address';
    }
    super.saveValues(req, res, next);
  }
};
