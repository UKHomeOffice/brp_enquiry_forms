'use strict';

module.exports = {
  '/': {
    controller: require('../../controllers/start'),
    redirectTo: '/where'
  },
  '/where': {
    controller: require('../../controllers/collection-where'),
    template: 'collection/where',
    fields: [
      'collection-where-radio',
      'collection-date',
      'collection-date-day',
      'collection-date-month',
      'collection-date-year',
    ],
    allowOrigin: '/check-details',
    next: '/reasons'
  },
  '/reasons': {
    controller: require('../../controllers/collection-reason'),
    template: 'collection/reasons',
    fields: [
      'reason-radio',
      'reason-under-age',
      'reason-non-identity',
      'reason-others-identity',
      'reason-others-auth',
      'reason-passport-family',
      'reason-passport-lost',
      'reason-passport-stamp',
      'reason-no-brp',
      'reason-other'
    ],
    next: '/nominated-person',
    backLink: '/where'
  },
  '/nominated-person': {
    controller: require('../../controllers/nominated-person'),
    template: 'collection/nominated',
    fields: [
      'nominated-fullname',
      'nominated-date',
      'nominated-date-day',
      'nominated-date-month',
      'nominated-date-year',
      'nominated-nationality',
      'nominated-id-number'
    ],
    next: '/personal-details',
    backLink: '/reasons'
  },
  '/personal-details': {
    controller: require('../../controllers/personal-details'),
    template: 'collection/personal-details.html',
    fields: [
      'fullname',
      'date-of-birth',
      'date-of-birth-day',
      'date-of-birth-month',
      'date-of-birth-year',
      'nationality',
      'passport'
    ],
    backLink: '/nominated-person',
    next: '/contact-details'
  },
  '/contact-details': {
    template: 'collection/contact-details',
    fields: [
      'email',
      'no-email',
      'contact-address-street',
      'contact-address-town',
      'contact-address-county',
      'contact-address-postcode',
      'phone'
    ],
    backLink: '/personal-details',
    next: '/check-details'
  },
  '/check-details': {
    controller: require('../../controllers/collection-check-details'),
    template: 'collection/check-details.html',
    fields: [
      'org-help',
      'rep-name',
      'org-type'
    ],
    backLink: '/contact-details',
    next: '/confirmation'
  },
  '/confirmation': {
    controller: require('../../controllers/confirmation'),
    template: 'collection/confirmation',
    backLink: false,
    next: '/done'
  },
  '/done': {
    backLink: null
  }
};
