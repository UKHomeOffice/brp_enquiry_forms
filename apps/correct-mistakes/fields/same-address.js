'use strict';

module.exports = {
  'same-address-radio': {
    mixin: 'radio-group',
    isPageHeading: true,
    validate: ['required'],
    className: ['govuk-radios', 'govuk-radios--inline'],
    options: [
      'yes',
      {
        value: 'no',
        toggle: 'same-address-fieldset',
        child: 'partials/same-address'
      }
    ]
  },
  'same-address-house-number': {
    validate: ['required'],
    label: 'fields.address-house-number.label',
    dependent: {
      value: 'no',
      field: 'same-address-radio'
    }
  },
  'same-address-street': {
    validate: ['required'],
    label: 'fields.address-street.label',
    dependent: {
      value: 'no',
      field: 'same-address-radio'
    }
  },
  'same-address-town': {
    validate: ['required'],
    label: 'fields.address-town.label',
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    dependent: {
      value: 'no',
      field: 'same-address-radio'
    }
  },
  'same-address-county': {
    label: 'fields.address-county.label',
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    dependent: {
      value: 'no',
      field: 'same-address-radio'
    }
  },
  'same-address-postcode': {
    validate: ['required'],
    label: 'fields.address-postcode.label',
    className: ['govuk-input', 'govuk-input--width-10'],
    dependent: {
      value: 'no',
      field: 'same-address-radio'
    }
  }
};
