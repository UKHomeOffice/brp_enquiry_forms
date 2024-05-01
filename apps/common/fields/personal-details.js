'use strict';

const date = require('hof').components.date;

module.exports = {
  fullname: {
    validate: ['required', 'notUrl']
  },
  'date-of-birth': date('date-of-birth', {
    mixin: 'input-date',
    validate: ['required', 'before'],
    legend: 'fields.date-of-birth.legend',
    hint: 'fields.date-of-birth.hint'
  }),
  nationality: {
    validate: ['required'],
    className: ['typeahead', 'js-hidden'],
    options: [''].concat(require('../../../assets/countries').allCountries)
  },
  passport: {
    validate: ['required', 'notUrl']
  },
  'brp-card-number': {
    validate: ['required', 'notUrl', {type: 'regex', arguments: /^r[a-z](\d|X)\d{6}$/gi }],
    legend: 'fields.brp-card-number.legend',
    label: 'fields.brp-card-number.label',
    dependent: {
      field: 'reference-number-radio',
      value: 'brp-card'
    },
    formatter: ['uppercase']
  },
  'gwf-number': {
    validate: ['required', 'notUrl', { type: 'regex', arguments: /^GWF[0-9]{9}$/ }],
    legend: 'fields.gwf-number.legend',
    label: 'fields.gwf-number.label',
    dependent: {
      field: 'reference-number-radio',
      value: 'gwf'
    },
    formatter: ['uppercase']
  },
  'no-reference': {
    validate: ['required', 'notUrl', { type: 'maxlength', arguments: 100 }],
    legend: 'fields.no-reference.legend',
    label: 'fields.no-reference.label',
    dependent: {
      field: 'reference-number-radio',
      value: 'none'
    }
  }
};
