'use strict';

module.exports = {
  '/': {
    controller: require('../common/controllers/start'),
    next: '/where'
  },
  '/where': {
    controller: require('./controllers/where'),
    fields: [
      'collection-where-radio',
      'collection-date',
      'collection-date-day',
      'collection-date-month',
      'collection-date-year',
    ],
    next: '/reasons'
  },
  '/reasons': {
    controller: require('./controllers/reason'),
    fields: [
      'reason-radio',
      'reason-which-post-office',
      'reason-under-age',
      'reason-non-identity',
      'reason-others-identity',
      'reason-passport-family',
      'reason-passport-lost',
      'reason-passport-stamp'
    ],
    next: '/personal-details',
    backLink: 'where',
    forks: [{
      target: '/nominated-person',
      condition: {
        field: 'reason-radio',
        value: 'others-identity'
      }
    }]
  },
  '/nominated-person': {
    controller: require('./controllers/nominee'),
    template: 'nominated',
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
    backLink: 'reasons'
  },
  '/personal-details': {
    controller: require('./controllers/personal-details'),
    fields: [
      'fullname',
      'date-of-birth',
      'date-of-birth-day',
      'date-of-birth-month',
      'date-of-birth-year',
      'nationality',
      'passport'
    ],
    next: '/contact-details'
  },
  '/contact-details': {
    fields: [
      'email',
      'use-address',
      'contact-address-house-number',
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
    controller: require('./controllers/confirm'),
    fields: [
      'org-help',
      'rep-name',
      'rep-email',
      'org-type'
    ],
    backLink: 'contact-details',
    next: '/confirmation'
  },
  '/confirmation': {
    controller: require('../common/controllers/confirmation'),
    backLink: false,
    clearSession: true
  }
};
