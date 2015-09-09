'use strict';

module.exports = {
  '/': {
    controller: require('../../controllers/collection-from'),
    template: 'collection/where',
    fields: [
      'where-radio',
      'collection-date',
      'collection-date-day',
      'collection-date-month',
      'collection-date-year',
    ],
    next: '/confirmation'
  },
  '/confirmation': {
    controller: require('../../controllers/confirmation'),
    template: 'collection/confirmation',
    backLink: false,
    next: '/done'
  },
  '/done': {
    backLink: null
  }
};
