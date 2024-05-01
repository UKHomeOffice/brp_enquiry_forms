'use strict';

module.exports = {
  'someone-else-reason-radio': {
    isPageHeading: true,
    mixin: 'radio-group',
    validate: ['required'],
    options: [
      {
        value: 'incapable',
        toggle: 'incapable-details',
        child: 'textarea'
      },
      'under-age'
    ]
  },
  'incapable-details': {
    validate: ['required'],
    dependent: {
      value: 'incapable',
      field: 'someone-else-reason-radio'
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
