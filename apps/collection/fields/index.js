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
      toggle: 'reason-which-post-office-group',
      child: 'input-text'
    }, {
      value: 'under-age',
      toggle: 'reason-under-age-group',
      child: 'input-text'
    }, {
      value: 'non-identity',
      toggle: 'reason-non-identity-group',
      child: 'input-text'
    }, {
      value: 'others-identity',
      toggle: 'reason-others-identity-group',
      child: 'input-text'
    }, {
      value: 'passport-family',
      toggle: 'reason-passport-family-group',
      child: 'input-text'
    },
    {
      value: 'passport-lost',
      toggle: 'reason-passport-lost-group',
      child: 'input-text'
    },
    {
      value: 'no-brp'
    }],
    legend: {
      className: 'visuallyhidden'
    }
  },
  'reason-under-age': {
    dependent: {
      value: 'under-age',
      field: 'reason-radio'
    }
  },
  'reason-non-identity': {
    dependent: {
      value: 'non-identity',
      field: 'reason-radio'
    }
  },
  'reason-others-identity': {
    dependent: {
      value: 'others-identity',
      field: 'reason-radio'
    }
  },
  'reason-passport-family': {
    dependent: {
      value: 'passport-family',
      field: 'reason-radio'
    }
  },
  'reason-passport-lost': {
    dependent: {
      value: 'passport-lost',
      field: 'reason-radio'
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
    validate: ['required']
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
    validate: ['required']
  }
};
