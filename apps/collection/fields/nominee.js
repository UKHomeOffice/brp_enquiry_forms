'use strict';

const date = require('hof-component-date');

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
  'nominated-date': date('nominated-date', {
    validate: ['required', 'before'],
    hint: 'fields.dalivery-date.hint'
  })
};
