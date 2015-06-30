'use strict';

module.exports = {
  '/': {
    controller: require('../controllers/start'),
    template: 'index',
    next: '/step1'
  },
  '/step1': {
    fields: [
      'received',
      'delivery-date-day',
      'delivery-date-month',
      'delivery-date-year'
    ],
    next: '/step2'
  },
  '/step2': {
    fields: [
      'address-match',
      'delivery-details',
      'address-street',
      'address-town',
      'address-county',
      'address-postcode'
    ],
    next: '/step3'
  },
  '/step3': {
    fields: [
      'fullname',
      'date-of-birth-day',
      'date-of-birth-month',
      'date-of-birth-year',
      'nationality',
      'passport'
    ],
    next: '/step4'
  },
  '/step4': {
    fields: [
      'email',
      'no-email',
      'address-street',
      'address-town',
      'address-county',
      'address-postcode',
      'phone'
    ],
    next: '/step5'
  },
  '/step5': {
    next: '/confirmation'
  },
  '/confirmation': {
    next: '/done'
  },
  '/done': {
    backLink: null
  }
};
