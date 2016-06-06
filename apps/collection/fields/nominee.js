'use strict';

module.exports = {
  'nominated-fullname': {
    validate: ['required']
  },
  'nominated-nationality': {
    validate: ['required'],
    className: ['typeahead', 'js-hidden'],
    options: [''].concat(require('../../../assets/countries').nonEuCountries),
    hint: 'fields.nominated-nationality.hint'
  },
  'nominated-id-number': {
    validate: ['required']
  },
  'nominated-date': {
    hint: 'fields.dalivery-date.hint'
  },
  'nominated-date-day': {
    validate: ['required', 'numeric'],
  },
  'nominated-date-month': {
    validate: ['required', 'numeric']
  },
  'nominated-date-year': {
    validate: ['required', 'numeric']
  }
};
