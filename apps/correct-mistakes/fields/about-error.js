'use strict';

module.exports = {
  /* eslint no-inline-comments: 0 */
  'error-selection': {
    /*this is here so we can display an error message if no error is selected */
  },
  'first-name-error-checkbox': {
    toggle: 'first-name-error-container'
  },
  'first-name-error': {
    validate: ['required'],
    dependent: {
      field: 'first-name-error-checkbox',
      value: 'true'
    }
  },
  'last-name-error-checkbox': {
    toggle: 'last-name-error-container'
  },
  'last-name-error': {
    validate: ['required'],
    dependent: {
      field: 'last-name-error-checkbox',
      value: 'true'
    }
  },
  'date-of-birth-error-checkbox': {
    toggle: 'date-of-birth-error-container'
  },
  'date-of-birth-error': {
    hint: 'fields.date-of-birth-error.hint'
  },
  'date-of-birth-error-day': {
    validate: ['required', 'numeric'],
    hint: 'fields.date-of-birth-error-day.hint'
  },
  'date-of-birth-error-month': {
    validate: ['required', 'numeric'],
    hint: 'fields.date-of-birth-error-month.hint'
  },
  'date-of-birth-error-year': {
    validate: ['required', 'numeric'],
    hint: 'fields.date-of-birth-error-year.hint'
  },
  'birth-place-error-checkbox': {
    toggle: 'birth-place-error-container'
  },
  'birth-place-error': {
    validate: ['required'],
    dependent: {
      field: 'birth-place-error-checkbox',
      value: 'true'
    }
  },
  'gender-error-checkbox': {
    toggle: 'gender-error-group'
  },
  'gender-error': {
    validate: ['required'],
    className: 'panel-indent block',
    dependent: {
      field: 'gender-error-checkbox',
      value: 'true'
    },
    legend: {
      className: 'visuallyhidden',
      value: 'fields.gender-error.legend'
    },
    options: [{
      value: 'female'
    }, {
      value: 'male'
    }, {
      value: 'unspecified'
    }]
  },
  'sponsor-details-error-checkbox': {
    toggle: 'sponsor-details-error-container'
  },
  'sponsor-details-error': {
    validate: ['required'],
    dependent: {
      field: 'sponsor-details-error-checkbox',
      value: 'true'
    }
  },
  'nationality-error-checkbox': {
    toggle: 'nationality-error-container'
  },
  'nationality-error': {
    validate: ['required'],
    dependent: {
      field: 'nationality-error-checkbox',
      value: 'true'
    },
    className: ['typeahead', 'js-hidden'],
    options: [''].concat(require('../../../assets/countries').nonEuCountries),
    hint: 'fields.nationality-error.hint'
  },
  'signature-error-checkbox': {
    toggle: 'signature-error-container'
  },
  'signature-error': {
    validate: ['required'],
    dependent: {
      field: 'signature-error-checkbox',
      value: 'true'
    }
  },
  'photograph-error-checkbox': {
    toggle: 'photograph-error-container'
  },
  'photograph-error': {
    validate: ['required'],
    dependent: {
      field: 'photograph-error-checkbox',
      value: 'true'
    }
  },
  'national-insurance-error-checkbox': {
    toggle: 'national-insurance-error-container'
  },
  'national-insurance-error': {
    validate: ['required'],
    dependent: {
      field: 'national-insurance-error-checkbox',
      value: 'true'
    }
  },
  'damaged-error-checkbox': {
    toggle: 'damaged-error-container'
  },
  'damaged-error': {
    validate: ['required'],
    dependent: {
      field: 'damaged-error-checkbox',
      value: 'true'
    }
  },
  'conditions-error-checkbox': {
    toggle: 'conditions-error-container'
  },
  'letter-error-checkbox': {
    toggle: 'letter-error-container'
  }
};
