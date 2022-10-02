'use strict';

module.exports = {
  email: {
    validate: ['required', 'email'],
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    type: 'email',
    dependent: {
      value: '',
      field: 'use-address'
    }
  },
  phone: {
    className: ['govuk-input', 'govuk-!-width-two-thirds']
  },
  'use-address': {
    toggle: 'address-group'
  },
  'contact-address-house-number': {
    validate: ['required'],
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    label: 'fields.address-house-number.label',
    dependent: {
      value: 'true',
      field: 'use-address'
    }
  },
  'contact-address-street': {
    validate: ['required'],
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    label: 'fields.address-street.label',
    dependent: {
      value: 'true',
      field: 'use-address'
    }
  },
  'contact-address-town': {
    validate: ['required'],
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    label: 'fields.address-town.label',
    dependent: {
      value: 'true',
      field: 'use-address'
    }
  },
  'contact-address-county': {
    label: 'fields.address-county.label',
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
  },
  'contact-address-postcode': {
    validate: ['required'],
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    label: 'fields.address-postcode.label',
    dependent: {
      value: 'true',
      field: 'use-address'
    }
  }
};
