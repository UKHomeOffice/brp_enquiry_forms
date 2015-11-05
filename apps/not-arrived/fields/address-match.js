'use strict';

module.exports = {
  'address-match': {
    validate: ['required'],
    className: ['inline', 'form-group'],
    legend: {
      className: 'visuallyhidden',
      value: ''
    },
    options: [{
      value: 'yes',
      label: 'fields.address-match.options.yes.label',
      toggle: 'delivery-details-fieldset'
    }, {
      value: 'no',
      label: 'fields.address-match.options.no.label',
      toggle: 'new-address-fieldset'
    }]
  },
  'delivery-details': {
    legend: 'fields.delivery-details.legend',
    label: 'fields.delivery-details.label'
  },
  'address-street': {
    validate: ['required'],
    label: 'fields.address-street.label',
    dependent: {
      value: 'no',
      field: 'address-match',
    }
  },
  'address-town': {
    validate: ['required'],
    label: 'fields.address-town.label',
    dependent: {
      value: 'no',
      field: 'address-match',
    }
  },
  'address-county': {
    label: 'fields.address-county.label',
    dependent: {
      value: 'no',
      field: 'address-match',
    }
  },
  'address-postcode': {
    validate: ['required'],
    label: 'fields.address-postcode.label',
    dependent: {
      value: 'no',
      field: 'address-match',
    }
  },
};
