'use strict';

const date = require('hof-component-date');

module.exports = {
  fullname: {
    validate: ['required']
  },
  'date-of-birth': date('date-of-birth', {
    validate: ['required', 'before'],
    legend: 'fields.date-of-birth.legend',
    hint: 'fields.date-of-birth.hint'
  }),
  nationality: {
    validate: ['required'],
    className: ['typeahead', 'js-hidden'],
    options: [''].concat(require('../../../assets/countries').allCountries),
    hint: 'fields.nationality.hint'
  },
  passport: {
    validate: 'required'
  },
  'brp-card': {
    hint: 'fields.brp-card.hint'
  }
};
