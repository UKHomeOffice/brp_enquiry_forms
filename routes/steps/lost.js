'use strict';

module.exports = {
  '/': {
    controller: require('../../controllers/start'),
    template: 'index',
    next: '/inside-uk'
  },
  '/inside-uk': {
    template: 'lost-or-stolen/inside-uk.html',
    fields: [
      'inside-uk',
      'country'
    ],
    next: '/date-lost'
  },
  '/date-lost': {
    controller: require('../../controllers/date-lost'),
    template: 'lost-or-stolen/date-lost.html',
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
    template: 'lost-or-stolen/personal-details.html',
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
    template: 'lost-or-stolen/contact-details.html',
    fields: [
      'email',
      'no-email',
      'contact-address-street',
      'contact-address-town',
      'contact-address-county',
      'contact-address-postcode',
      'phone'
    ],
    backLink: '/personal-details',
    next: '/check-details'
  },
  '/check-details': {
    controller: require('../../controllers/check-details'),
    template: 'lost-or-stolen/check-details.html',
    fields: [
      'org-help',
      'rep-name',
      'org-type'
    ],
    backLink: '/contact-details',
    next: '/confirmation'
  },
  '/confirmation': {
    controller: require('../../controllers/confirmation'),
    template: 'lost-or-stolen/confirmation.html',
    backLink: false
  }
};
