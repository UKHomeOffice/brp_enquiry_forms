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
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    validate: 'notUrl'
  },
  'brp-card': {
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    validate: [{type: 'regex', arguments: /(^[a-z][a-z](\d|X)\d{6}$)|(^$)/gi }],
    formatter: ['uppercase'],
    hint: 'fields.brp-card.hint'
  },
  'date-of-birth': date('date-of-birth', {
    validate: ['required', beforeTodayValidator],
    legend: 'fields.date-of-birth.legend',
    hint: 'fields.date-of-birth.hint'
  }),
  email: {
    validate: ['required', 'email'],
    type: 'email'
  },
  phone: {
    label: 'fields.phone.label'
  },
  'contact-address-county': {
    label: 'fields.address-county.label',
    dependent: {
      value: 'true',
      field: 'use-address'
    }
  }
};
