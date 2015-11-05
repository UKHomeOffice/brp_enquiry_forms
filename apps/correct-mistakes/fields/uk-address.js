'use strict';

module.exports = {
  'uk-address-radio': {
    validate: ['required'],
    className: ['inline', 'form-group'],
    legend: {
      className: 'visuallyhidden',
      value: ''
    },
    options: [{
      value: 'yes',
      label: 'fields.uk-address-radio.options.yes.label',
      toggle: 'uk-address-fieldset'
    }, {
      value: 'no',
      label: 'fields.uk-address-radio.options.no.label'
    }]
  },
  'uk-address-street': {
    validate: ['required'],
    label: 'fields.address-street.label',
    dependent: {
      value: 'yes',
      field: 'uk-address-radio',
    }
  },
  'uk-address-town': {
    validate: ['required'],
    label: 'fields.address-town.label',
    dependent: {
      value: 'yes',
      field: 'uk-address-radio',
    }
  },
  'uk-address-county': {
    label: 'fields.address-county.label',
    dependent: {
      value: 'yes',
      field: 'uk-address-radio',
    }
  },
  'uk-address-postcode': {
    validate: ['required'],
    label: 'fields.address-postcode.label',
    dependent: {
      value: 'yes',
      field: 'uk-address-radio',
    }
  }
};
