'use strict';

const date = require('hof').components.date;
const countries = [''].concat(require('../../../assets/countries').allCountries);

module.exports = {
  'collection-where-radio': {
    mixin: 'radio-group',
    validate: ['required'],
    className: ['inline', 'form-group'],
    legend: {
      className: 'visuallyhidden'
    },
    options: [{
      value: 'Post Office',
      toggle: 'collection-date-group'
    }, {
      value: 'Sponsor',
      toggle: 'collection-date-group'
    }]
  },
  'collection-date': date('collection-date', {
    validate: ['before']
  }),
  'reason-radio': {
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
    legend: {
      className: 'visuallyhidden'
    }
  },
  'nominated-fullname': {
    validate: ['required']
  },
  'nominated-nationality': {
    validate: ['required'],
    className: ['typeahead', 'js-hidden'],
    options: countries,
    hint: 'fields.nominated-nationality.hint'
  },
  'nominated-id-number': {
    validate: ['required']
  },
  'nominated-date': date('nominated-date', {
    // TODO confirm with BA on over18 check 'over18' validation
    validate: ['required', 'before']
  }),
  fullname: {
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
  },
  'application-type-other': {
    validate: ['required', {type: 'maxlength', arguments: 50}],
    dependent: {
      field: 'application-type',
      value: 'application-type-other'
    }
  }
};
