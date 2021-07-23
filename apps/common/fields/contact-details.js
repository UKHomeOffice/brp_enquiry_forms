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
    toggle: 'address-group'
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
    dependent: {
      value: 'true',
      field: 'use-address'
    }
  },
  'contact-address-county': {
    label: 'fields.address-county.label'
  },
  'contact-address-postcode': {
    validate: ['required'],
    label: 'fields.address-postcode.label',
    dependent: {
      value: 'true',
      field: 'use-address'
    }
  }
};
