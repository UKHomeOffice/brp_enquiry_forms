'use strict';

module.exports = {
  '/': {
    template: 'index',
    next: '/name'
  },
  '/submit': {
    controller: require('../controllers/submit'),
    next: '/done'
  },
  '/done': {
    backLink: null
  }
};
