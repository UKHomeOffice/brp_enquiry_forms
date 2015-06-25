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
      'dated',
      'continue'
    ],
    next: '/step2',
    backLink: '/'
  },
  '/step2': {
    fields: [
      'delivery-details',
      'address-street',
      'continue'
    ],
    next: '/submit',
    backLink: '/step1'
  },
  '/submit': {
    controller: require('../controllers/submit'),
    next: '/done',
    backLink: '/step2'
  },
  '/done': {
    backLink: null
  }
};
