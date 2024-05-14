'use strict';

const date = require('hof').components.date;

module.exports = {
  /* eslint no-inline-comments: 0 */
  'error-selection': {
    /* this is here so we can display an error message if no error is selected */
  },
  'first-name-error-checkbox': {
    mixin: 'checkbox',
    toggle: 'first-name-error-container'
  },
  'first-name-error': {
    validate: ['required', 'notUrl'],
    dependent: {
      field: 'first-name-error-checkbox',
      value: 'true'
    }
  },
  'last-name-error-checkbox': {
    mixin: 'checkbox',
    toggle: 'last-name-error-container'
  },
  'last-name-error': {
    validate: ['required', 'notUrl'],
    dependent: {
      field: 'last-name-error-checkbox',
      value: 'true'
    }
  },
  'date-of-birth-error-checkbox': {
    mixin: 'checkbox',
    toggle: 'date-of-birth-error-container'
  },
  'date-of-birth-error': date('date-of-birth-error', {
    mixin: 'input-date',
    validate: ['required', 'before'],
    validationLink: {
      field: 'date-of-birth-error-checkbox',
      value: 'true'
    }
  }),
  'birth-place-error-checkbox': {
    mixin: 'checkbox',
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
    mixin: 'checkbox',
    toggle: 'gender-error-group'
  },
  'gender-error': {
    mixin: 'radio-group',
    validate: ['required'],
    dependent: {
      field: 'gender-error-checkbox',
      value: 'true'
    },
    options: ['female', 'male', 'unspecified']
  },
  'sponsor-details-error-checkbox': {
    mixin: 'checkbox',
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
    mixin: 'checkbox',
    toggle: 'nationality-error-container'
  },
  'nationality-error': {
    mixin: 'select',
    validate: ['required'],
    dependent: {
      field: 'nationality-error-checkbox',
      value: 'true'
    },
    className: ['typeahead', 'js-hidden'],
    options: [''].concat(require('../../../assets/countries').allCountries)
  },
  'signature-error-checkbox': {
    mixin: 'checkbox',
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
    mixin: 'checkbox',
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
    mixin: 'checkbox',
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
    mixin: 'checkbox',
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
    mixin: 'checkbox',
    toggle: 'conditions-error-container'
  },
  'conditions-error': {
    validate: ['required'],
    dependent: {
      field: 'conditions-error-checkbox',
      value: 'true'
    }
  },
  'length-of-stay-error-checkbox': {
    mixin: 'checkbox',
    toggle: 'length-of-stay-error-container'
  },
  'length-of-stay-error': {
    validate: ['required'],
    dependent: {
      field: 'length-of-stay-error-checkbox',
      value: 'true'
    }
  },
  'biographics-error-checkbox': {
    mixin: 'checkbox',
    toggle: 'biographics-error-container'
  },
  'biographics-error': {
    validate: ['required'],
    dependent: {
      field: 'biographics-error-checkbox',
      value: 'true'
    }
  },
  'BRP-issue-error-checkbox': {
    mixin: 'checkbox',
    toggle: 'BRP-issue-error-container'
  },
  'BRP-issue-error': {
    validate: ['required'],
    dependent: {
      field: 'BRP-issue-error-checkbox',
      value: 'true'
    }
  }
};
