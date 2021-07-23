'use strict';

module.exports = {
  'same-address-radio': {
    validate: ['required'],
    className: ['inline', 'form-group'],
    legend: {
      className: 'visuallyhidden',
      value: 'pages.same-address.address.title'
    },
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
    dependent: {
      value: 'no',
      field: 'same-address-radio'
    }
  },
  'same-address-county': {
    label: 'fields.address-county.label',
  },
  'same-address-postcode': {
    validate: ['required'],
    label: 'fields.address-postcode.label',
    dependent: {
      value: 'no',
      field: 'same-address-radio'
    }
  }
};
