'use strict';

module.exports = {
  received: {
    validate: ['required'],
    options: [
      {value: 'yes', label: 'Yes'},
      {value: 'no', label: 'No'}
    ]
  },
  continue: {
    value: 'Continue',
    label: 'Continue'
  },
  'dated-day': {
    label: 'Day',
    hint: 'Day hint!',
  },
  'dated-month': {
    label: 'Month',
    hint: 'Month hint!'
  },
  'dated-year': {
    label: 'Year',
    hint: 'year hint!'
  },
  'letter-gone': {
    label: 'I don\'t have the letter anymore'
  }
};
