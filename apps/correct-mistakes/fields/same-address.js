'use strict';

module.exports = {
  'same-address-radio': {
    validate: ['required'],
    className: ['inline', 'form-group'],
    legend: {
      className: 'visuallyhidden',
      value: 'pages.same-address.address.title'
    },
    options: [{
      value: 'yes',
      label: 'fields.same-address-radio.options.yes.label'
    }, {
      value: 'no',
      label: 'fields.same-address-radio.options.no.label',
      toggle: 'same-address-fieldset'
    }]
  },
  'same-address-house-number': {
    validate: ['required'],
      label: 'common-fields.address-house-number.label',
      dependent: {
        value: 'no',
        field: 'same-address-radio'
      }
  },
  'same-address-street': {
    validate: ['required'],
    label: 'common-fields.address-street.label',
    dependent: {
      value: 'no',
      field: 'same-address-radio'
    }
  },
  'same-address-town': {
    validate: ['required'],
    label: 'common-fields.address-town.label',
    dependent: {
      value: 'no',
      field: 'same-address-radio'
    }
  },
  'same-address-county': {
    label: 'common-fields.address-county.label',
  },
  'same-address-postcode': {
    validate: ['required'],
    label: 'common-fields.address-postcode.label',
    dependent: {
      value: 'no',
      field: 'same-address-radio'
    }
  }
};
