'use strict';

module.exports = {
  'someone-else-fullname': {
    validate: ['required'],
    label: 'fields.someone-else-fullname.label'
  },
  'someone-else-date': {
    validate: ['required', 'date', {type: 'before', arguments: [18, 'years']}],
    legend: 'fields.someone-else-date.legend',
    hint: 'fields.someone-else-date.hint'
  },
  'someone-else-date-day': {
    validate: ['required', 'numeric'],
    label: 'fields.someone-else-date-day.label'
  },
  'someone-else-date-month': {
    validate: ['required', 'numeric'],
    label: 'fields.someone-else-date-month.label'
  },
  'someone-else-date-year': {
    validate: ['required', 'numeric'],
    label: 'fields.someone-else-date-year.label'
  },
  'someone-else-nationality': {
    validate: ['required'],
    className: ['typeahead', 'js-hidden'],
    options: [''].concat(require('../../../assets/countries').allCountries),
    type: 'typeahead'
  },
  'someone-else-id-type': {
    validate: ['required'],
    label: 'fields.someone-else-id-type.label',
    options: [{
      value: 'passport',
      label: 'fields.someone-else-id-type.options.passport.label'
    }, {
      value: 'eu-national-id',
      label: 'fields.someone-else-id-type.options.eu-national-id.label'
    }, {
      value: 'brp-card',
      label: 'fields.someone-else-id-type.options.brp-card.label'
    }]
  },
  'someone-else-id-number': {
    validate: ['required'],
    label: 'fields.someone-else-id-number.label'
  }
};
