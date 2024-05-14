'use strict';

const date = require('hof').components.date;

module.exports = {
  collection: {
    isPageHeading: true,
    mixin: 'radio-group',
    className: ['govuk-radios', 'govuk-radios--inline'],
    validate: ['required'],
    options: [
      {
        value: 'yes'
      },
      {
        value: 'no'
      }
    ]
  },
  received: {
    isPageHeading: true,
    mixin: 'radio-group',
    className: ['govuk-radios', 'govuk-radios--inline'],
    validate: ['required'],
    options: [
      {
        value: 'yes',
        toggle: 'letter-received-details-fieldset',
        child: 'partials/letter-received-details'
      },
      'no'
    ]
  },
  'delivery-date': date('delivery-date', {
    mixin: 'input-date',
    validate: ['before'],
    validationLink: {
      field: 'received',
      value: 'yes'
    }
  }),
  'no-letter': {
    mixin: 'checkbox',
    dependent: {
      field: 'received',
      value: 'yes'
    }
  },
  'case-id-number': {
    mixin: 'input-text',
    dependent: {
      field: 'received',
      value: 'yes'
    }
  }
};
