'use strict';

module.exports = {
  'uk-address-radio': {
    mixin: 'radio-group',
    isPageHeading: true,
    validate: ['required'],
    className: ['govuk-radios', 'govuk-radios--inline'],
    options: [
      {
        value: 'yes',
        toggle: 'uk-address-fieldset',
        child: 'partials/uk-address'
      },
      'no'
    ]
  },
  'uk-address-house-number': {
    validate: ['required'],
    label: 'fields.address-house-number.label',
    dependent: {
      value: 'yes',
      field: 'uk-address-radio'
    }
  },
  'uk-address-street': {
    validate: ['required'],
    label: 'fields.address-street.label',
    dependent: {
      value: 'yes',
      field: 'uk-address-radio'
    }
  },
  'uk-address-town': {
    validate: ['required'],
    label: 'fields.address-town.label',
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    dependent: {
      value: 'yes',
      field: 'uk-address-radio'
    }
  },
  'uk-address-county': {
    label: 'fields.address-county.label',
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    dependent: {
      value: 'yes',
      field: 'uk-address-radio'
    }
  },
  'uk-address-postcode': {
    validate: ['required'],
    label: 'fields.address-postcode.label',
    className: ['govuk-input', 'govuk-input--width-10'],
    dependent: {
      value: 'yes',
      field: 'uk-address-radio'
    }
  },
  email: {
    validate: ['required', 'email'],
    type: 'email'
  },
  phone: {
    label: 'fields.phone.label',
    className: ['govuk-input', 'govuk-input--width-20'],
    type: 'tel'
  },
  'contact-address-county': {
    label: 'fields.address-county.label',
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    dependent: {
      value: 'true',
      field: 'use-address'
    }
  }
};
