'use strict';

module.exports = {
  received: {
    options: [
      {
        value: 'fields.received.options.yes.value',
        label: 'fields.received.options.yes.label'
      },
      {
        value: 'fields.received.options.no.value',
        label: 'fields.received.options.no.label'
      }
    ],
    display: 'inline'
  },
  'continue': {
    value: 'Continue',
    label: 'Continue'
  },
  'dated-day': {
    label: 'fields.dated-day.label'
  },
  'dated-month': {
    label: 'fields.dated-month.label'
  },
  'dated-year': {
    label: 'fields.dated-year.label'
  },
  'letter-gone': {
    label: 'fields.letter-gone.label',
    className: 'form-checkbox'
  },
  'delivery-details': {
    legend: 'fields.delivery-details.legend',
    label: 'fields.delivery-details.label'
  },
  'address-street': {
    id: 'address-street',
    validate: ['required'],
    label: 'Your address'
  },
  'address-town': {
    validate: ['required'],
    label: 'Town/City'
  },
  'address-county': {
    validate: ['required'],
    label: 'County'
  },
  'address-postcode': {
    validate: ['required'],
    label: 'Postcode'
  }
};
