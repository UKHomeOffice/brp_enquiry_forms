'use strict';

const date = require('hof').components.date;
const countries = [''].concat(require('../../../assets/countries').allCountries);

module.exports = {
  'collection-where-radio': {
    isPageHeading: true,
    mixin: 'radio-group',
    className: ['govuk-radios', 'govuk-radios--inline'],
    validate: ['required'],
    options: [{
      value: 'Post Office',
      toggle: 'collection-date-group'
    },
    {
      value: 'Sponsor',
      toggle: 'collection-date-group'
    }]
  },
  'collection-date': date('collection-date', {
    mixin: 'input-date',
    validate: ['date', 'before']
  }),
  'reason-radio': {
    isPageHeading: true,
    mixin: 'radio-group',
    validate: ['required'],
    options: [{
      value: 'which-post-office',
      toggle: 'which-post-office',
      child: 'input-text'
    }, {
      value: 'under-age',
      toggle: 'under-age',
      child: 'input-text'
    }, {
      value: 'non-identity',
      toggle: 'non-identity',
      child: 'input-text'
    }, {
      value: 'others-identity',
      toggle: 'others-identity',
      child: 'input-text'
    }, {
      value: 'passport-family',
      toggle: 'passport-family',
      child: 'input-text'
    },
    {
      value: 'passport-lost',
      toggle: 'passport-lost',
      child: 'input-text'
    },
    {
      value: 'no-brp'
    }]
  },
  'nominated-fullname': {
    validate: ['required']
  },
  'nominated-nationality': {
    mixin: 'select',
    validate: ['required'],
    className: ['typeahead', 'js-hidden'],
    options: countries
  },
  'nominated-id-number': {
    validate: ['required']
  },
  'nominated-date': date('nominated-date', {
    // TODO confirm with BA on over18 check 'over18' validation
    mixin: 'input-date',
    validate: ['required', 'before']
  }),
  fullname: {
    validate: ['required', 'notUrl']
  },
  'date-of-birth': date('date-of-birth', {
    mixin: 'input-date',
    validate: ['date', 'required', 'before']
  }),
  nationality: {
    mixin: 'select',
    validate: ['required'],
    className: ['typeahead', 'js-hidden'],
    options: countries
  },
  passport: {
    validate: ['required', 'notUrl']
  },
  email: {
    validate: ['email'],
    type: 'email'
  },
  phone: {
    label: 'fields.phone.label',
    className: ['govuk-input', 'govuk-input--width-20'],
    type: 'tel'
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
