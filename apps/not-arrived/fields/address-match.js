'use strict';

module.exports = {
  'address-match': {
    isPageHeading: true,
    mixin: 'radio-group',
    className: ['govuk-radios', 'govuk-radios--inline'],
    validate: ['required'],
    options: [{
      value: 'yes',
      toggle: 'delivery-details',
      child: 'textarea'
    }, {
      value: 'no',
      toggle: 'new-address-fieldset',
      child: 'partials/new-address'
    }]
  },
  'delivery-details': {
    mixin: 'textarea',
    dependent: {
      value: 'yes',
      field: 'address-match'
    }
  },
  'address-house-number': {
    validate: ['required'],
    label: 'fields.address-house-number.label',
    dependent: {
      value: 'no',
      field: 'address-match'
    }
  },
  'address-street': {
    validate: ['required'],
    label: 'fields.address-street.label',
    dependent: {
      value: 'no',
      field: 'address-match'
    }
  },
  'address-town': {
    validate: ['required'],
    label: 'fields.address-town.label',
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    dependent: {
      value: 'no',
      field: 'address-match'
    }
  },
  'address-county': {
    label: 'fields.address-county.label',
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    dependent: {
      value: 'no',
      field: 'address-match'
    }
  },
  'address-postcode': {
    validate: ['required'],
    label: 'fields.address-postcode.label',
    className: ['govuk-input', 'govuk-input--width-10'],
    dependent: {
      value: 'no',
      field: 'address-match'
    }
  },
  'case-id': {
    validate: ['required'],
    dependent: {
      value: 'no',
      field: 'address-match'
    }
  },
  email: {
    validate: ['required', 'email'],
    type: 'email'
  },
  phone: {
    label: 'fields.phone.label'
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
