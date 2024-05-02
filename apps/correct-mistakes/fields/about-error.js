'use strict';

const date = require('hof').components.date;

module.exports = {
  /* eslint no-inline-comments: 0 */
  'error-selection': {
    /* this is here so we can display an error message if no error is selected */
    mixin: 'checkbox-group',
    validate: ['required'],
    options: [{
      value: 'first-name-error-checkbox',
      toggle: 'first-name-error',
      child: 'input-text'
    },
    {
      value: 'last-name-error-checkbox',
      toggle: 'last-name-error',
      child: 'input-text'
    },
    {
      value: 'date-of-birth-error-checkbox',
      toggle: 'date-of-birth-error',
      child: 'input-date'
    },
    {
      value: 'birth-place-error-checkbox',
      toggle: 'birth-place-error',
      child: 'input-text'
    },
    {
      value: 'gender-error-checkbox',
      toggle: 'gender-error-group',
      child: 'radio-group'
    },
    {
      value: 'sponsor-details-error-checkbox',
      toggle: 'sponsor-details-error',
      child: 'input-text'
    },
    {
      value: 'nationality-error-checkbox',
      toggle: 'nationality-error',
      child: 'select'
    },
    {
      value: 'signature-error-checkbox',
      toggle: 'signature-error',
      child: 'textarea'
    },
    {
      value: 'photograph-error-checkbox',
      toggle: 'photograph-error',
      child: 'textarea'
    },
    {
      value: 'national-insurance-error-checkbox',
      toggle: 'national-insurance-error',
      child: 'textarea'
    },
    {
      value: 'damaged-error-checkbox',
      toggle: 'damaged-error',
      child: 'textarea'
    },
    {
      value: 'conditions-error-checkbox',
      toggle: 'conditions-error',
      child: 'textarea'
    },
    {
      value: 'length-of-stay-error-checkbox',
      toggle: 'length-of-stay-error',
      child: 'textarea'
    },
    {
      value: 'biographics-error-checkbox',
      toggle: 'biographics-error',
      child: 'textarea'
    },
    {
      value: 'BRP-issue-error-checkbox',
      toggle: 'BRP-issue-error',
      child: 'textarea'
    }
    ]
  },
  'first-name-error': {
    validate: ['required', 'notUrl'],
    dependent: {
      field: 'error-selection',
      value: 'first-name-error-checkbox'
    }
  },
  'last-name-error': {
    validate: ['required', 'notUrl'],
    dependent: {
      field: 'error-selection',
      value: 'last-name-error-checkbox'
    }
  },
  'date-of-birth-error': date('date-of-birth-error', {
    validate: ['required', 'before'],
    validationLink: {
      field: 'error-selection',
      value: 'date-of-birth-error-checkbox'
    }
  }),
  'birth-place-error': {
    validate: ['required'],
    dependent: {
      field: 'error-selection',
      value: 'birth-place-error-checkbox'
    }
  },
  'gender-error': {
    mixin: 'radio-group',
    validate: ['required'],
    className: 'panel-indent block',
    dependent: {
      field: 'error-selection',
      value: 'gender-error-checkbox'
    },
    legend: {
      className: 'visuallyhidden'
    },
    options: ['female', 'male', 'unspecified']
  },
  'sponsor-details-error': {
    validate: ['required'],
    dependent: {
      field: 'error-selection',
      value: 'sponsor-details-error-checkbox'
    }
  },
  'nationality-error': {
    mixin: 'select',
    validate: ['required'],
    dependent: {
      field: 'error-selection',
      value: 'nationality-error-checkbox'
    },
    className: ['typeahead', 'js-hidden'],
    options: [''].concat(require('../../../assets/countries').allCountries)
  },
  'signature-error': {
    validate: ['required'],
    dependent: {
      field: 'error-selection',
      value: 'signature-error-checkbox'
    }
  },
  'photograph-error': {
    validate: ['required'],
    dependent: {
      field: 'error-selection',
      value: 'photograph-error-checkbox'
    }
  },
  'national-insurance-error': {
    validate: ['required'],
    dependent: {
      field: 'error-selection',
      value: 'national-insurance-error-checkbox'
    }
  },
  'damaged-error': {
    validate: ['required'],
    dependent: {
      field: 'error-selection',
      value: 'damaged-error-checkbox'
    }
  },
  'conditions-error': {
    validate: ['required'],
    dependent: {
      field: 'error-selection',
      value: 'conditions-error-checkbox'
    }
  },
  'length-of-stay-error': {
    validate: ['required'],
    dependent: {
      field: 'error-selection',
      value: 'length-of-stay-error-checkbox'
    }
  },
  'biographics-error': {
    validate: ['required'],
    dependent: {
      field: 'error-selection',
      value: 'biographics-error-checkbox'
    }
  },
  'BRP-issue-error': {
    validate: ['required'],
    dependent: {
      field: 'error-selection',
      value: 'BRP-issue-error-checkbox'
    }
  }
};
