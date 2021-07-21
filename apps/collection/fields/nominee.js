'use strict';

const date = require('hof').components.date;

module.exports = {
  'nominated-fullname': {
    validate: ['required']
  },
  'nominated-nationality': {
    validate: ['required'],
    className: ['typeahead', 'js-hidden'],
    options: [''].concat(require('../../../assets/countries').allCountries),
    hint: 'fields.nominated-nationality.hint'
  },
  'nominated-id-number': {
    validate: ['required']
  },
  'nominated-date': date('nominated-date', {
    validate: ['required', 'before'],
    hint: 'fields.dalivery-date.hint'
  })
};
