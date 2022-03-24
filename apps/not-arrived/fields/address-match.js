'use strict';

module.exports = {
  'address-match': {
    validate: ['required'],
    className: ['inline', 'form-group'],
    legend: {
      className: 'visuallyhidden',
      value: 'journeys.delivery.same-address.header'
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
  'address-house-number': {
    validate: ['required', 'notUrl'],
    label: 'fields.address-house-number.label',
    dependent: {
      value: 'no',
      field: 'address-match'
    }
  },
  'address-street': {
    validate: ['required', 'notUrl'],
    label: 'fields.address-street.label',
    dependent: {
      value: 'no',
      field: 'address-match'
    }
  },
  'address-town': {
    validate: ['required', 'notUrl'],
    label: 'fields.address-town.label',
    dependent: {
      value: 'no',
      field: 'address-match'
    }
  },
  'address-county': {
    validate: ['notUrl'],
    label: 'fields.address-county.label',
    dependent: {
      value: 'no',
      field: 'address-match'
    }
  },
  'address-postcode': {
    validate: ['required', 'notUrl'],
    label: 'fields.address-postcode.label',
    dependent: {
      value: 'no',
      field: 'address-match'
    }
  },
  'case-id': {
    validate: ['required', 'notUrl'],
    label: 'fields.case-id.label',
    hint: 'fields.case-id.hint',
    dependent: {
      value: 'no',
      field: 'address-match'
    }
  }
};
