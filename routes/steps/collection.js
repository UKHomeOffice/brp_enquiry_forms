'use strict';

module.exports = {
  '/': {
    controller: require('../../controllers/collection-where'),
    template: 'collection/where',
    fields: [
      'collection-where-radio',
      'collection-date',
      'collection-date-day',
      'collection-date-month',
      'collection-date-year',
    ],
    next: '/reasons'
  },
  '/reasons': {
    controller: require('../../controllers/collection-reason'),
    template: 'collection/reasons',
    fields: [
      'reason-radio',
      'reason-under-age',
      'reason-non-identity',
      'reason-others-identity',
      'reason-others-auth',
      'reason-passport-family',
      'reason-passport-lost',
      'reason-passport-stamp',
      'reason-no-brp',
      'reason-other'
    ],
    next: '/confirmation',
    backLink: '/'
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
