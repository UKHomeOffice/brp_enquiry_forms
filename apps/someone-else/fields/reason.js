'use strict';

module.exports = {
  'incapable-details': {
    validate: ['required'],
    dependent: {
      value: 'incapable',
      field: 'someone-else-reason-radio'
    }
  },
  'someone-else-reason-radio': {
    isPageHeading: true,
    validate: ['required'],
    options: [
      {
        value: 'incapable',
        toggle: 'incapable-details'
      },
      'under-age'
    ]
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
    dependent: {
      value: 'true',
      field: 'use-address'
    }
  }
};
