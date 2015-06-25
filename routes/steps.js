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
    next: '/submit',
    backLink: '/'
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
