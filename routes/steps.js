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
    next: '/step2',
    backLink: '/'
  },
  '/step2': {
    fields: [
      'delivery-details',
      'address-street'
    ],
    next: '/step3',
    backLink: '/step1'
  },
  '/step3': {
    fields: [
      'fullname',
      'date-of-birth',
      'nationality',
      'passport'
    ],
    next: '/step4',
    backLink: '/step2'
  },
  '/step4': {
    fields: [
      'email',
      'no-email',
      'phone'
    ],
    next: '/step5',
    backLink: '/step3'
  },
  '/submit': {
    controller: require('../controllers/submit'),
    next: '/done',
    backLink: '/step4'
  },
  '/done': {
    backLink: null
  }
};
