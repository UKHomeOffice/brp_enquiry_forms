'use strict';

module.exports = {
  '/': {
    controller: require('../../controllers/start'),
    template: 'index',
    next: '/inside-uk'
  },
  '/inside-uk': {
    fields: [
      'inside-uk',
      'country'
    ],
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
    next: '/personal-details'
  },
  '/personal-details': {
    controller: require('../../controllers/personal-details'),
    template: 'personal-details-brp.html',
    fields: [
      'fullname',
      'date-of-birth',
      'date-of-birth-day',
      'date-of-birth-month',
      'date-of-birth-year',
      'nationality',
      'brp-card'
    ],
    backLink: '/date-lost',
    next: '/contact-details'
  },
  '/contact-details': {
    controller: require('../../controllers/contact-details'),
    fields: [
      'email',
      'no-email',
      'address-street',
      'address-town',
      'address-county',
      'address-postcode',
      'phone'
    ],
    backLink: '/personal-details',
    next: '/check-details'
  },
  '/check-details': {
    controller: require('../../controllers/check-details'),
    fields: [
      'org-help',
      'rep-name',
      'organisation'
    ],
    backLink: '/contact-details',
    next: '/confirmation'
  },
  '/confirmation': {
    controller: require('../../controllers/confirmation'),
    backLink: false,
    next: '/done'
  },
  '/done': {
    backLink: null
  }
};
