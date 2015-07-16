'use strict';

module.exports = {
  '/': {
    controller: require('../../controllers/start'),
    template: 'index',
    next: '/inside-uk'
  },
  '/inside-uk': {
    // controller: require('../../controllers/about-error'),
    fields: [
      'inside-uk',
      'country'
    ],
    backLink: '/',
    next: '/date-lost'
  },
  '/date-lost': {
    controller: require('../../controllers/date-lost'),
    fields: [
      'date-lost',
      'date-lost-day',
      'date-lost-month',
      'date-lost-year',
    ],
    backLink: '/inside-uk',
    next: '/confirmation'
  },
  '/done': {
    backLink: null
  }
};
