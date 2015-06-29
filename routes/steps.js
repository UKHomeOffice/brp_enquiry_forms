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
      'dated'
    ],
    next: '/step2'
  },
  '/step2': {
    fields: [
      'delivery-details',
      'address-street'
    ],
    next: '/step3'
  },
  '/step3': {
    fields: [
      'fullname',
      'date-of-birth',
      'nationality',
      'passport'
    ],
    next: '/step4'
  },
  '/step4': {
    fields: [
      'email',
      'no-email',
      'phone'
    ],
    next: '/step5'
  },
  '/submit': {
    controller: require('../controllers/submit'),
    next: '/done'
  },
  '/done': {
    backLink: null
  }
};
