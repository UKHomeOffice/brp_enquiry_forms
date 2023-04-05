'use strict';

module.exports = {
  'contact-details-email': {
    validate: ['required', 'email'],
    type: 'email',
    dependent: {
      value: 'true',
      field: 'has-email-radio'
    }
  },
  'has-email-radio': {
    mixin: 'radio-group',
    validate: ['required'],
    className: ['form-group'],
    legend: {
      className: 'visuallyhidden'
    },
    options: [{
      value: 'true',
      toggle: 'contact-details-email',
      label: 'Email Address',
      child: 'partials/email-address'
    }, {
      value: 'false',
      toggle: 'address-group',
      label: 'I don\'t have an email address'
    }]
  },
  'contact-address-house-number': {
    validate: ['required'],
    label: 'fields.address-house-number.label',
    dependent: {
      value: 'false',
      field: 'has-email-radio'
    }
  },
  'contact-address-street': {
    validate: ['required'],
    label: 'fields.address-street.label',
    dependent: {
      value: 'false',
      field: 'has-email-radio'
    }
  },
  'contact-address-town': {
    validate: ['required'],
    label: 'fields.address-town.label',
    dependent: {
      value: 'false',
      field: 'has-email-radio'
    }
  },
  'contact-address-county': {
    label: 'fields.address-county.label'
  },
  'contact-address-postcode': {
    validate: ['required'],
    label: 'fields.address-postcode.label',
    dependent: {
      value: 'false',
      field: 'has-email-radio'
    }
  }
};
