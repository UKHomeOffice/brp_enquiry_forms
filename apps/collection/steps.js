'use strict';

module.exports = {
  '/': {
    controller: require('../common/controllers/start'),
    next: '/where'
  },
  '/where': {
    controller: require('./controllers/where'),
    template: 'where',
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
    template: 'reasons',
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
    backLink: 'where'
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
    controller: require('../common/controllers/personal-details'),
    template: 'personal-details.html',
    fields: [
      'fullname',
      'date-of-birth',
      'date-of-birth-day',
      'date-of-birth-month',
      'date-of-birth-year',
      'nationality',
      'passport'
    ],
    backLink: 'nominated-person',
    next: '/contact-details'
  },
  '/contact-details': {
    template: 'contact-details',
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
    controller: require('./controllers/confirm'),
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
    template: 'confirmation',
    backLink: false,
    clearSession: true
  }
};
