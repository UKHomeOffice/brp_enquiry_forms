'use strict';

module.exports = {
  '/': {
    controller: require('../common/controllers/start'),
    next: '/arrange'
  },
  '/arrange': {
    controller: require('./controllers/arrange'),
    template: 'arrange',
    fields: [
      'arrange-collection-radio',
      'someone-else-fullname',
      'someone-else-date',
      'someone-else-date-day',
      'someone-else-date-month',
      'someone-else-date-year',
      'someone-else-nationality',
      'someone-else-id-number',
      'change-person-fullname',
      'change-person-date',
      'change-person-date-day',
      'change-person-date-month',
      'change-person-date-year',
      'change-person-nationality',
      'change-person-id-number',
    ],
    next: '/reason'
  },
  '/reason': {
    controller: require('./controllers/reason'),
    template: 'reason',
    fields: [
      'someone-else-reason-radio',
      'incapable-details'
    ],
    next: '/personal-details'
  },
  '/exit-not-eligible': {
    template: 'exit-not-eligible',
    clearSession: true,
    prereqs: ['/']
  },
  '/personal-details': {
    controller: require('../common/controllers/personal-details'),
    template: 'personal-details',
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
  '/personal-details-no-reason': {
    controller: require('../common/controllers/personal-details'),
    template: 'personal-details',
    fields: [
      'fullname',
      'date-of-birth',
      'date-of-birth-day',
      'date-of-birth-month',
      'date-of-birth-year',
      'nationality',
      'passport'
    ],
    prereqs: ['/arrange'],
    next: '/contact-details',
    backLink: 'arrange'
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
    next: '/confirm'
  },
  '/confirm': {
    controller: require('./controllers/confirm'),
    template: 'confirm',
    fields: [
      'org-help',
      'rep-name',
      'org-type'
    ],
    next: '/confirmation'
  },
  '/confirmation': {
    controller: require('../common/controllers/confirmation'),
    template: 'confirmation',
    backLink: false,
    clearSession: true
  }
};
