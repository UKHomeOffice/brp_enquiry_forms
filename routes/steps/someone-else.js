'use strict';

module.exports = {
  '/': {
    controller: require('../../controllers/someone-else'),
    template: 'someone-else/arrange',
    fields: [
      'arrange-collection-radio',
      'someone-else-fullname',
      'someone-else-date',
      'someone-else-date-day',
      'someone-else-date-month',
      'someone-else-date-year',
      'someone-else-nationality',
      'someone-else-id-number',
      'change-person-fullname',
      'change-person-date',
      'change-person-date-day',
      'change-person-date-month',
      'change-person-date-year',
      'change-person-nationality',
      'change-person-id-number',
    ],
    next: '/reason'
  },
  '/reason': {
    controller: require('../../controllers/reason'),
    template: 'someone-else/reason',
    fields: [
      'someone-else-reason-radio'
    ],
    next: '/personal-details',
    backLink: '/'
  },
  '/personal-details': {
    controller: require('../../controllers/personal-details'),
    template: 'someone-else/personal-details',
    fields: [
      'fullname',
      'date-of-birth',
      'date-of-birth-day',
      'date-of-birth-month',
      'date-of-birth-year',
      'nationality',
      'passport'
    ],
    prereqs: ['/'],
    next: '/confirmation',
    backLink: '/reason'
  },
  '/confirmation': {
    controller: require('../../controllers/confirmation'),
    template: 'someone-else/confirmation',
    backLink: false,
    next: '/done'
  },
  '/done': {
    backLink: null
  }
};
