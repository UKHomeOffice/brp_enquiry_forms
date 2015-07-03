'use strict';

module.exports = {
  '/': {
    controller: require('../../controllers/start'),
    template: 'index',
    next: '/about-error'
  },
  '/about-error': {
    fields: [
      'first-name-error',
      'last-name-error',
      'date-of-birth-day-error',
      'date-of-birth-month-error',
      'date-of-birth-year-error',
      'birth-place-error',
      'gender-error',
      'sponsor-details-error',
      'nationality-error',
      'signature-error',
      'photograph-error',
      'damaged-error',
      'conditions-error'
    ],
    next: '/confirmation'
  },
  '/confirmation': {
    backLink: '/about-error',
    next: '/done'
  },
  '/done': {
    backLink: null
  }
};
