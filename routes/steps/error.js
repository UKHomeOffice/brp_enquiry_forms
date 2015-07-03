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
    next: '/same-address'
  },
  '/same-address': {
    backLink: '/about-error',
    fields: [
      'address-match',
      'address-street',
      'address-town',
      'address-county',
      'address-postcode'
    ],
    next: '/contact-details'
  },
  '/contact-details': {
    fields: [
      'email',
      'no-email',
      'address-street',
      'address-town',
      'address-county',
      'address-postcode',
      'phone'
    ],
    backLink: '/same-address',
    next: '/confirmation'
  },
  '/confirmation': {
    backLink: '/same-address',
    next: '/done'
  },
  '/done': {
    backLink: null
  }
};
