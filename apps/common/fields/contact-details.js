'use strict';

module.exports = {
  email: {
    validate: ['required', 'email'],
    type: 'email',
    dependent: {
      value: '',
      field: 'use-address'
    }
  },
  'use-address': {
    mixin: 'checkbox',
    toggle: 'address-group',
    child: 'partials/address-details'
  },
  'contact-address-house-number': {
    validate: ['required'],
    label: 'fields.address-house-number.label',
    dependent: {
      value: 'true',
      field: 'use-address'
    }
  },
  'contact-address-street': {
    validate: ['required'],
    label: 'fields.address-street.label',
    dependent: {
      value: 'true',
      field: 'use-address'
    }
  },
  'contact-address-town': {
    validate: ['required'],
    label: 'fields.address-town.label',
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    dependent: {
      value: 'true',
      field: 'use-address'
    }
  },
  'contact-address-county': {
    label: 'fields.address-county.label',
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'contact-address-postcode': {
    validate: ['required'],
    label: 'fields.address-postcode.label',
    className: ['govuk-input', 'govuk-input--width-10'],
    dependent: {
      value: 'true',
      field: 'use-address'
    }
  }
};
