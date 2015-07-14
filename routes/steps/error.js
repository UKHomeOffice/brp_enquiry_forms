'use strict';

module.exports = {
  '/': {
    controller: require('../../controllers/start'),
    template: 'index',
    next: '/about-error'
  },
  '/about-error': {
    controller: require('../../controllers/about-error'),
    fields: [
      'first-name-error-checkbox',
      'first-name-error',
      'last-name-error-checkbox',
      'last-name-error',
      'date-of-birth-error-checkbox',
      'date-of-birth-error',
      'date-of-birth-error-day',
      'date-of-birth-error-month',
      'date-of-birth-error-year',
      'birth-place-error-checkbox',
      'birth-place-error',
      'gender-error-checkbox',
      'gender-error',
      'sponsor-details-error-checkbox',
      'sponsor-details-error',
      'nationality-error-checkbox',
      'nationality-error',
      'signature-error-checkbox',
      'signature-error',
      'photograph-error-checkbox',
      'photograph-error',
      'damaged-error-checkbox',
      'damaged-error',
      'conditions-error-checkbox',
      'conditions-error',
    ],
    next: '/same-address'
  },
  '/same-address': {
    controller: require('../../controllers/same-address'),
    fields: [
      'address-match',
      'address-street',
      'address-town',
      'address-county',
      'address-postcode'
    ],
    backLink: '/about-error',
    next: '/personal-details'
  },
  '/personal-details': {
    controller: require('../../controllers/personal-details'),
    template: 'personal-details-brp.html',
    fields: [
      'fullname',
      'date-of-birth',
      'date-of-birth-day',
      'date-of-birth-month',
      'date-of-birth-year',
      'nationality',
      'passport'
    ],
    backLink: '/same-address',
    next: '/contact-details'
  },
  '/contact-details': {
    controller: require('../../controllers/contact-details'),
    fields: [
      'email',
      'no-email',
      'address-street',
      'address-town',
      'address-county',
      'address-postcode',
      'phone'
    ],
    backLink: '/personal-details',
    next: '/check-details'
  },
  '/check-details': {
    template: 'check-details-error.html',
    backLink: '/contact-details',
    next: '/confirmation'
  },
  '/confirmation': {
    backLink: false,
    next: '/done'
  },
  '/done': {
    backLink: null
  }
};
