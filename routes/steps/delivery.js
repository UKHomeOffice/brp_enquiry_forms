'use strict';

module.exports = {
  '/': {
    controller: require('../../controllers/letter-received'),
    template: 'not-arrived/letter-received',
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
    template: 'not-arrived/letter-not-received',
  },
  '/on-the-way': {
    controller: require('../../controllers/on-the-way'),
    prereqs: ['/'],
    template: 'not-arrived/on-the-way',
    clearSession: false
  },
  '/same-address': {
    controller: require('../../controllers/same-address'),
    template: 'not-arrived/same-address-details.html',
    fields: [
      'address-match',
      'delivery-details',
      'address-street',
      'address-town',
      'address-county',
      'address-postcode'
    ],
    backLink: '/',
    next: '/personal-details'
  },
  '/personal-details': {
    controller: require('../../controllers/personal-details'),
    template: 'not-arrived/personal-details.html',
    fields: [
      'fullname',
      'date-of-birth',
      'date-of-birth-day',
      'date-of-birth-month',
      'date-of-birth-year',
      'nationality',
      'passport'
    ],
    backLink: '/same-address',
    next: '/contact-details'
  },
  '/contact-details': {
    controller: require('../../controllers/contact-details'),
    template: 'not-arrived/contact-details',
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
    controller: require('../../controllers/check-details'),
    template: 'not-arrived/check-details',
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
    template: 'not-arrived/confirmation',
    backLink: false
  }
};
