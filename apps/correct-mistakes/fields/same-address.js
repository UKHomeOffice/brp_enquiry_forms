'use strict';

module.exports = {
  'same-address-radio': {
    isPageHeading: true,
    validate: ['required'],
    className: ['govuk-radios--inline', 'form-group'],
    options: [
      'yes',
      {
        value: 'no',
        toggle: 'same-address-fieldset'
      }
    ]
  },
  'same-address-house-number': {
    validate: ['required'],
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    label: 'fields.address-house-number.label',
    dependent: {
      value: 'no',
      field: 'same-address-radio'
    }
  },
  'same-address-street': {
    validate: ['required'],
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    label: 'fields.address-street.label',
    dependent: {
      value: 'no',
      field: 'same-address-radio'
    }
  },
  'same-address-town': {
    validate: ['required'],
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    label: 'fields.address-town.label',
    dependent: {
      value: 'no',
      field: 'same-address-radio'
    }
  },
  'same-address-county': {
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    label: 'fields.address-county.label'
  },
  'same-address-postcode': {
    validate: ['required'],
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    label: 'fields.address-postcode.label',
    dependent: {
      value: 'no',
      field: 'same-address-radio'
    }
  }
};
