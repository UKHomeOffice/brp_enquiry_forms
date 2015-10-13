'use strict';

module.exports = {
  '/': {
    controller: require('../common/controllers/start'),
    next: '/letter-received'
  },
  '/letter-received': {
    controller: require('./controllers/letter-received'),
    template: 'letter-received',
    fields: [
      'received',
      'delivery-date',
      'delivery-date-day',
      'delivery-date-month',
      'delivery-date-year',
      'no-letter'
    ],
    next: '/same-address'
  },
  '/letter-not-received': {
    template: 'letter-not-received',
  },
  '/on-the-way': {
    controller: require('./controllers/on-the-way'),
    prereqs: ['/'],
    template: 'on-the-way'
  },
  '/same-address': {
    template: 'same-address-details.html',
    fields: [
      'address-match',
      'delivery-details',
      'address-street',
      'address-town',
      'address-county',
      'address-postcode'
    ],
    backLink: 'letter-received',
    next: '/personal-details'
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
    backLink: 'same-address',
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
    controller: require('../common/controllers/confirm'),
    template: 'confirm',
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
    backLink: false
  }
};
