'use strict';

const date = require('hof').components.date;

module.exports = {
  received: {
    validate: ['required'],
    className: ['inline', 'form-group'],
    legend: {
      className: 'visuallyhidden'
    },
    options: [
      {
        value: 'yes',
        toggle: 'delivery-date-group'
      },
      'no'
    ]
  },
  'delivery-date': date('delivery-date', {
    validate: ['before']
  }),
  'no-letter': {
    className: 'form-checkbox',
    dependent: {
      value: 'yes',
      field: 'received'
    }
  }
};
