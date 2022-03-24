'use strict';

const date = require('hof').components.date;

module.exports = {
  'consignment-number-radio': {
    validate: ['required'],
    className: ['inline', 'form-group'],
    legend: {
      className: 'visuallyhidden',
      value: 'pages.consignment-number.header'
    },
    options: [
      {
        value: 'yes',
        toggle: 'consignment-number-fieldset'
      },
      'no'
    ]
  },
  'consignment-number': {
    validate: ['required'],
    label: 'fields.consignment-number.label',
    dependent: {
      value: 'yes',
      field: 'consignment-number-radio'
    }
  }
};
