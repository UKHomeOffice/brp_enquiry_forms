'use strict';

module.exports = {
  '/where': {
    fields: [
      'collection-where-radio',
      'collection-date'
    ],
    next: '/reasons'
  },
  '/reasons': {
    behaviours: [require('./behaviours/reason')],
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
    template: 'nominated',
    fields: [
      'nominated-fullname',
      'nominated-date',
      'nominated-nationality',
      'nominated-id-number'
    ],
    next: '/personal-details',
    backLink: 'reasons'
  },
  '/personal-details': {
    behaviours: [require('./behaviours/personal-details')],
    fields: [
      'fullname',
      'date-of-birth',
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
    behaviours: ['complete', require('./behaviours/confirm'), require('../common/behaviours/email')],
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
    backLink: false
  }
};
