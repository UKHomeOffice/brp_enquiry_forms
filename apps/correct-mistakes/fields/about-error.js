'use strict';

module.exports = {
  /* eslint no-inline-comments: 0 */
  'error-selection': {
    /*this is here so we can display an error message if no error is selected */
  },
  'first-name-error-checkbox': {
    label: 'fields.first-name-error-checkbox.label',
    toggle: 'first-name-error-container'
  },
  'first-name-error': {
    validate: ['required'],
    label: 'fields.first-name-error.label',
    dependent: {
      field: 'first-name-error-checkbox',
      value: 'true'
    }
  },
  'last-name-error-checkbox': {
    label: 'fields.last-name-error-checkbox.label',
    toggle: 'last-name-error-container'
  },
  'last-name-error': {
    validate: ['required'],
    label: 'fields.last-name-error.label',
    dependent: {
      field: 'last-name-error-checkbox',
      value: 'true'
    }
  },
  'date-of-birth-error-checkbox': {
    label: 'fields.date-of-birth-error-checkbox.label',
    toggle: 'date-of-birth-error-container'
  },
  'date-of-birth-error': {
    label: 'fields.date-of-birth-error.label',
    hint: 'fields.date-of-birth-error.hint'
  },
  'date-of-birth-error-day': {
    validate: ['required', 'numeric'],
    label: 'fields.date-of-birth-error-day.label',
    hint: 'fields.date-of-birth-error-day.hint'
  },
  'date-of-birth-error-month': {
    validate: ['required', 'numeric'],
    label: 'fields.date-of-birth-error-month.label',
    hint: 'fields.date-of-birth-error-month.hint'
  },
  'date-of-birth-error-year': {
    validate: ['required', 'numeric'],
    label: 'fields.date-of-birth-error-year.label',
    hint: 'fields.date-of-birth-error-year.hint'
  },
  'birth-place-error-checkbox': {
    label: 'fields.birth-place-error-checkbox.label',
    toggle: 'birth-place-error-container'
  },
  'birth-place-error': {
    validate: ['required'],
    label: 'fields.birth-place-error.label',
    dependent: {
      field: 'birth-place-error-checkbox',
      value: 'true'
    }
  },
  'gender-error-checkbox': {
    label: 'fields.gender-error-checkbox.label',
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
      value: 'fields.gender-error-checkbox.label'
    },
    options: [{
      value: 'female',
      label: 'fields.gender-error.options.female.label'
    }, {
      value: 'male',
      label: 'fields.gender-error.options.male.label'
    }, {
      value: 'unspecified',
      label: 'fields.gender-error.options.unspecified.label'
    }]
  },
  'sponsor-details-error-checkbox': {
    label: 'fields.sponsor-details-error-checkbox.label',
    toggle: 'sponsor-details-error-container'
  },
  'sponsor-details-error': {
    validate: ['required'],
    label: 'fields.sponsor-details-error.label',
    dependent: {
      field: 'sponsor-details-error-checkbox',
      value: 'true'
    }
  },
  'nationality-error-checkbox': {
    label: 'fields.nationality-error-checkbox.label',
    toggle: 'nationality-error-container'
  },
  'nationality-error': {
    validate: ['required'],
    label: 'fields.nationality-error.label',
    dependent: {
      field: 'nationality-error-checkbox',
      value: 'true'
    }
  },
  'signature-error-checkbox': {
    label: 'fields.signature-error-checkbox.label',
    toggle: 'signature-error-container'
  },
  'signature-error': {
    validate: ['required'],
    label: 'fields.signature-error.label',
    dependent: {
      field: 'signature-error-checkbox',
      value: 'true'
    }
  },
  'photograph-error-checkbox': {
    label: 'fields.photograph-error-checkbox.label',
    toggle: 'photograph-error-container'
  },
  'photograph-error': {
    validate: ['required'],
    label: 'fields.photograph-error.label',
    dependent: {
      field: 'photograph-error-checkbox',
      value: 'true'
    }
  },
  'national-insurance-error-checkbox': {
    label: 'fields.national-insurance-error-checkbox.label',
    toggle: 'national-insurance-error-container'
  },
  'national-insurance-error': {
    validate: ['required'],
    label: 'fields.national-insurance-error.label',
    dependent: {
      field: 'national-insurance-error-checkbox',
      value: 'true'
    }
  },
  'damaged-error-checkbox': {
    label: 'fields.damaged-error-checkbox.label',
    toggle: 'damaged-error-container'
  },
  'damaged-error': {
    validate: ['required'],
    label: 'fields.damaged-error.label',
    dependent: {
      field: 'damaged-error-checkbox',
      value: 'true'
    }
  },
  'conditions-error-checkbox': {
    label: 'fields.conditions-error-checkbox.label',
    toggle: 'conditions-error-container'
  },
  'conditions-error': {
    validate: ['required'],
    label: 'fields.conditions-error.label',
    dependent: {
      field: 'conditions-error-checkbox',
      value: 'true'
    }
  },
  'letter-error-checkbox': {
    label: 'fields.letter-error-checkbox.label',
    toggle: 'letter-error-container'
  },
  'letter-error': {
    validate: ['required'],
    label: 'fields.letter-error.label',
    dependent: {
      field: 'letter-error-checkbox',
      value: 'true'
    }
  }
};
