'use strict';

const date = require('hof').components.date;
const moment = require('moment');

const todaysDate = moment().format('YYYY[-]MM[-]DD');
const beforeTodayValidator = {
  type: 'before',
  arguments: [todaysDate]
};

module.exports = {
  'reference-number-radio': {
    validate: ['required'],
    className: ['form-group'],
    options: [
      {
        value: 'brp-card',
        toggle: 'brp-card-number',
        child: 'input-text'
      },
      {
        value: 'gwf',
        toggle: 'gwf-number',
        child: 'input-text'
      },
      {
        value: 'none',
        toggle: 'no-reference',
        child: 'input-text'
      }
    ]
  },
  'date-of-birth': date('date-of-birth', {
    mixin: 'input-date',
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
