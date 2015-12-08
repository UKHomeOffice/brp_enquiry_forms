'use strict';

module.exports = {
  received: {
    validate: ['required'],
    className: ['inline', 'form-group'],
    legend: {
      className: 'visuallyhidden',
      value: 'pages.letter-received.header'
    },
    options: [{
      value: 'yes',
      label: 'fields.received.options.yes.label',
      toggle: 'delivery-date-group'
    }, {
      value: 'no',
      label: 'fields.received.options.no.label'
    }]
  },
  'delivery-date': {
    legend: 'fields.delivery-date.legend',
    hint: 'fields.dalivery-date.hint'
  },
  'delivery-date-day': {
    validate: ['required', 'numeric'],
    label: 'fields.delivery-date-day.label'
  },
  'delivery-date-month': {
    validate: ['required', 'numeric'],
    label: 'fields.delivery-date-month.label'
  },
  'delivery-date-year': {
    validate: ['required', 'numeric'],
    label: 'fields.delivery-date-year.label'
  },
  'no-letter': {
    label: 'fields.no-letter.label',
    className: 'form-checkbox'
  },
};
