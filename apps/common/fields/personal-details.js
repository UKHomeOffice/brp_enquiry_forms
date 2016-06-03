'use strict';

module.exports = {
  fullname: {
    validate: ['required']
  },
  'date-of-birth': {
    legend: 'fields.date-of-birth.legend',
    hint: 'fields.date-of-birth.hint'
  },
  'date-of-birth-day': {
    validate: ['required', 'numeric']
  },
  'date-of-birth-month': {
    validate: ['required', 'numeric']
  },
  'date-of-birth-year': {
    validate: ['required', 'numeric']
  },
  nationality: {
    validate: ['required'],
    className: ['typeahead', 'js-hidden'],
    options: [''].concat(require('../../../assets/countries').nonEuCountries),
    hint: 'fields.nationality.hint'
  },
  passport: {
    validate: 'required'
  },
  'brp-card': {
    hint: 'fields.brp-card.hint'
  }
};
