'use strict';

const date = require('hof').components.date;
const moment = require('moment');

const todaysDate = moment().format('YYYY[-]MM[-]DD');
const beforeTodayValidator = {
  type: 'before',
  arguments: [todaysDate]
};

module.exports = {
  'date-of-birth': date('date-of-birth', {
    validate: ['required', beforeTodayValidator],
    legend: 'fields.date-of-birth.legend',
    hint: 'fields.date-of-birth.hint'
  })
};
