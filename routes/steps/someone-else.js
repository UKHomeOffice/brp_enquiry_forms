'use strict';

module.exports = {
  '/': {
    controller: require('../../controllers/start'),
    next: '/arrange'
  },
  '/arrange': {
    controller: require('../../controllers/someone-else'),
    template: 'someone-else/arrange',
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
    controller: require('../../controllers/reason'),
    template: 'someone-else/reason',
    fields: [
      'someone-else-reason-radio'
    ],
    next: '/personal-details'
  },
  '/exit-not-eligible': {
    template: 'someone-else/exit-not-eligible',
    prereqs: ['/']
  },
  '/personal-details': {
    controller: require('../../controllers/personal-details'),
    template: 'someone-else/personal-details',
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
    controller: require('../../controllers/personal-details'),
    template: 'someone-else/personal-details',
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
    backLink: '/arrange'
  },
  '/contact-details': {
    template: 'someone-else/contact-details',
    fields: [
      'email',
      'no-email',
      'contact-address-street',
      'contact-address-town',
      'contact-address-county',
      'contact-address-postcode',
      'phone'
    ],
    next: '/check-details'
  },
  '/check-details': {
    controller: require('../../controllers/someone-else-check-details'),
    template: 'someone-else/check-details',
    fields: [
      'org-help',
      'rep-name',
      'org-type'
    ],
    next: '/confirmation'
  },
  '/confirmation': {
    controller: require('../../controllers/confirmation'),
    template: 'someone-else/confirmation',
    backLink: false,
    next: '/done'
  },
  '/done': {
    backLink: null
  }
};
