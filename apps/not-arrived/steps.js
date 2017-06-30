'use strict';

module.exports = {
  '/': {
    controller: require('../common/controllers/start'),
    next: '/letter-received'
  },
  '/letter-received': {
    controller: require('./controllers/letter-received'),
    fields: [
      'received',
      'delivery-date',
      'delivery-date-day',
      'delivery-date-month',
      'delivery-date-year',
      'no-letter'
    ],
    next: '/same-address',
    forks: [{
      target: '/letter-not-received',
      condition: {
        field: 'received',
        value: 'no'
      }
    }, {
      target: '/letter-lost',
      condition: {
        field: 'no-letter',
        value: 'true'
      }
    }]
  },
  '/letter-lost': {},
  '/letter-not-received': {},
  '/on-the-way': {
    controller: require('./controllers/on-the-way'),
    prereqs: ['/'],
    clearSession: true
  },
  '/same-address': {
    template: 'same-address-details.html',
    fields: [
      'address-match',
      'delivery-details',
      'address-house-number',
      'address-street',
      'address-town',
      'address-county',
      'address-postcode',
      'case-id'
    ],
    backLink: 'letter-received',
    next: '/personal-details'
  },
  '/personal-details': {
    controller: require('../common/controllers/personal-details'),
    fields: [
      'fullname',
      'date-of-birth',
      'date-of-birth-day',
      'date-of-birth-month',
      'date-of-birth-year',
      'nationality',
      'passport'
    ],
    backLink: 'same-address',
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
    controller: require('../common/controllers/confirm'),
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
