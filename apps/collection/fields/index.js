'use strict';

const date = require('hof').components.date;
const countries = [''].concat(require('../../../assets/countries').allCountries);

module.exports = {
  'collection-where-radio': {
    isPageHeading: true,
    mixin: 'radio-group',
    validate: ['required'],
    className: ['govuk-radios--inline', 'govuk-form-group'],
    options: [{
      value: 'Post Office',
    }, {
      value: 'Sponsor',
    }]
  },
  'collection-date': date('collection-date', {
    validate: ['before'],
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
    }],
  },
  'nominated-fullname': {
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    validate: ['required']
  },
  'nominated-nationality': {
    validate: ['required'],
    className: ['typeahead', 'js-hidden'],
    options: countries,
    hint: 'fields.nominated-nationality.hint'
  },
  'nominated-id-number': {
    className: ['govuk-input govuk-!-width-two-thirds'],
    validate: ['required']
  },
  'nominated-date': date('nominated-date', {
    // TODO confirm with BA on over18 check 'over18' validation
    validate: ['required', 'before']
  }),
  fullname: {
    className: ['govuk-input govuk-!-width-two-thirds'],
    validate: ['required', 'notUrl']
  },
  'date-of-birth': date('date-of-birth', {
    validate: ['required', 'before']
  }),
  nationality: {
    validate: ['required'],
    className: ['typeahead', 'js-hidden'],
    options: countries,
    hint: 'fields.nationality.hint'
  },
  passport: {
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    validate: ['required', 'notUrl']
  },
  email: {
    validate: ['email'],
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
