'use strict';

module.exports = {
  '/': {
    controller: require('../../controllers/start'),
    template: 'index',
    next: '/about-error'
  },
  '/about-error': {
    fields: [
      'first-name',
      'last-name'
    ],
    next: '/confirmation'
  },
  '/confirmation': {
    backLink: '/about-error',
    next: '/done'
  },
  '/done': {
    backLink: null
  }
};
