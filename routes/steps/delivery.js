'use strict';

module.exports = {
  '/': {
    controller: require('../../controllers/start'),
    template: 'index',
    next: '/letter-received'
  },
  '/letter-received': {
    controller: require('../../controllers/letter-received'),
    fields: [
      'received',
      'delivery-date',
      'delivery-date-day',
      'delivery-date-month',
      'delivery-date-year'
    ],
    next: '/same-address'
  },
  '/same-address': {
    controller: require('../../controllers/same-address'),
    template: 'same-address-details.html',
    fields: [
      'address-match',
      'delivery-details',
      'address-street',
      'address-town',
      'address-county',
      'address-postcode'
    ],
    backLink: '/letter-received',
    next: '/personal-details'
  },
  '/personal-details': {
    template: 'personal-details-passport.html',
    fields: [
      'fullname',
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
    fields: [
      'email',
      'no-email',
      'address-street',
      'address-town',
      'address-county',
      'address-postcode',
      'phone'
    ],
    backLink: '/personal-details',
    next: '/check-details'
  },
  '/check-details': {
    template: 'check-details-delivery.html',
    backLink: '/contact-details',
    next: '/confirmation'
  },
  '/confirmation': {
    backLink: false,
    next: '/done'
  },
  '/done': {
    backLink: null
  }
};
