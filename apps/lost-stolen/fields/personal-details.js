'use strict';

const date = require('hof').components.date;
const moment = require('moment');

const todaysDate = moment().format('YYYY[-]MM[-]DD');
const beforeTodayValidator = {
  type: 'before',
  arguments: [todaysDate]
};

module.exports = {
  fullname: {
    validate: ['required', 'notUrl']
  },
  'brp-card': {
    validate: [{type: 'regex', arguments: /(^[a-z][a-z](\d|X)\d{6}$)|(^$)/gi }],
    formatter: ['uppercase'],
    hint: 'fields.brp-card.hint'
  },
  'date-of-birth': date('date-of-birth', {
    validate: ['required', beforeTodayValidator],
    legend: 'fields.date-of-birth.legend',
    hint: 'fields.date-of-birth.hint'
  })
};
