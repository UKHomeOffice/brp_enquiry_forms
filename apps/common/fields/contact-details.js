'use strict';

module.exports = {
  'contact-details-email': {
    validate: ['required', 'email'],
    type: 'email',
    dependent: {
      value: 'has-email-yes',
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
      value: 'has-email-yes',
      toggle: 'contact-details-email',
      label: 'Email Address',
      child: 'partials/email-address'
    }, {
      value: 'has-email-no',
      toggle: 'address-group',
      label: 'I don\'t have an email address'
    }]
  },
  'contact-address-house-number': {
    validate: ['required'],
    label: 'fields.address-house-number.label',
    dependent: {
      value: 'has-email-no',
      field: 'has-email-radio'
    }
  },
  'contact-address-street': {
    validate: ['required'],
    label: 'fields.address-street.label',
    dependent: {
      value: 'has-email-no',
      field: 'has-email-radio'
    }
  },
  'contact-address-town': {
    validate: ['required'],
    label: 'fields.address-town.label',
    dependent: {
      value: 'has-email-no',
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
      value: 'has-email-no',
      field: 'has-email-radio'
    }
  }
};
