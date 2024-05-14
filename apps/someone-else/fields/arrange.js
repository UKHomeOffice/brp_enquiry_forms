'use strict';

const date = require('hof').components.date;

module.exports = {
  'someone-else-fullname': {
    validate: ['required', 'notUrl']
  },
  'someone-else-date': date('someone-else-date', {
    mixin: 'input-date',
    validate: [
      'required',
      { type: 'before', arguments: [18, 'years'] }
    ]
  }),
  'someone-else-nationality': {
    mixin: 'select',
    validate: ['required'],
    className: ['typeahead', 'js-hidden'],
    options: [''].concat(require('../../../assets/countries').allCountries)
  },
  'someone-else-id-type': {
    mixin: 'radio-group',
    validate: ['required'],
    options: [
      'passport',
      'eu-national-id',
      'brp-card'
    ]
  },
  'someone-else-id-number': {
    validate: ['required', 'notUrl']
  }
};
