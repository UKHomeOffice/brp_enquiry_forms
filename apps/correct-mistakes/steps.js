'use strict';

module.exports = {
  '/': {
    controller: require('../common/controllers/start'),
    next: '/location'
  },
  '/location': {
    template: 'location-applied.html',
    fields: [
      'location-applied'
    ],
    next: '/about-error'
  },
  '/about-error': {
    controller: require('./controllers/about-error'),
    template: 'about-error.html',
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
      'conditions-error-checkbox',
      'conditions-error'
    ],
    backLink: 'location',
    next: '/uk-address'
  },
  '/conditions-and-length': {
    prereqs: ['/'],
    template: 'conditions-and-length.html'
  },
  '/truncated': {
    controller: require('./controllers/truncated'),
    prereqs: ['/'],
    template: 'truncated.html',
    fields: [
      'truncated',
      'truncation-page'
    ],
    next: '/uk-address'
  },
  '/exit-truncated': {
    prereqs: ['/truncated'],
    template: 'exit-truncated.html'
  },
  '/uk-address': {
    template: 'uk-address.html',
    fields: [
      'uk-address-radio',
      'uk-address-street',
      'uk-address-town',
      'uk-address-county',
      'uk-address-postcode'
    ],
    backLink: 'about-error',
    next: '/personal-details'
  },
  '/personal-details': {
    controller: require('../common/controllers/personal-details'),
    template: 'personal-details-brp.html',
    fields: [
      'fullname',
      'date-of-birth',
      'date-of-birth-day',
      'date-of-birth-month',
      'date-of-birth-year',
      'nationality',
      'brp-card'
    ],
    backLink: 'uk-address',
    next: '/contact-details'
  },
  '/contact-details': {
    template: 'contact-details.html',
    fields: [
      'email',
      'no-email',
      'contact-address-street',
      'contact-address-town',
      'contact-address-county',
      'contact-address-postcode',
      'phone'
    ],
    backLink: 'personal-details',
    next: '/confirm'
  },
  '/confirm': {
    controller: require('../common/controllers/confirm'),
    template: 'confirm.html',
    fields: [
      'org-help',
      'rep-name',
      'org-type'
    ],
    backLink: 'contact-details',
    next: '/confirmation'
  },
  '/confirmation': {
    controller: require('../common/controllers/confirmation'),
    template: 'confirmation.html',
    backLink: false
  }
};
