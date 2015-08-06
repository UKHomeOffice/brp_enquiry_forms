'use strict';

module.exports = {
  '/': {
    controller: require('../../controllers/start'),
    template: 'index',
    next: '/about-error'
  },
  '/about-error': {
    controller: require('../../controllers/about-error'),
    template: 'correct-mistakes/about-error.html',
    fields: [
      'error-selection',
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
      'national-insurance-error-checkbox',
      'national-insurance-error',
      'damaged-error-checkbox',
      'damaged-error',
      'conditions-error-checkbox'
    ],
    next: '/same-address'
  },
  '/conditions-and-length': {
    template: 'correct-mistakes/conditions-and-length.html'
  },
  '/truncated': {
    controller: require('../../controllers/truncated'),
    template: 'correct-mistakes/truncated.html',
    fields: [
      'truncated',
      'truncation-page'
    ],
    next: '/same-address'
  },
  '/exit-truncated': {
    template: 'correct-mistakes/exit-truncated.html'
  },
  '/same-address': {
    controller: require('../../controllers/same-address'),
    template: 'correct-mistakes/same-address.html',
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
    template: 'correct-mistakes/personal-details-brp.html',
    fields: [
      'fullname',
      'date-of-birth',
      'date-of-birth-day',
      'date-of-birth-month',
      'date-of-birth-year',
      'nationality',
      'brp-card'
    ],
    backLink: '/same-address',
    next: '/contact-details'
  },
  '/contact-details': {
    controller: require('../../controllers/contact-details'),
    template: 'correct-mistakes/contact-details.html',
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
    controller: require('../../controllers/check-details'),
    template: 'correct-mistakes/check-details.html',
    fields: [
      'org-help',
      'rep-name',
      'organisation'
    ],
    backLink: '/contact-details',
    next: '/confirmation'
  },
  '/confirmation': {
    controller: require('../../controllers/confirmation'),
    template: 'correct-mistakes/confirmation.html',
    backLink: false,
    next: '/done'
  },
  '/done': {
    backLink: null
  }
};
