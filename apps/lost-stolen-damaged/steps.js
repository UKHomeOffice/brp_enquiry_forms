'use strict';

module.exports = {
  '/': {
    controller: require('../common/controllers/start'),
    next: '/inside-uk'
  },
  '/inside-uk': {
    template: 'inside-uk.html',
    fields: [
      'inside-uk',
      'country'
    ],
    next: '/date-lost'
  },
  '/date-lost': {
    controller: require('./controllers/date-lost'),
    template: 'date-lost.html',
    fields: [
      'date-lost',
      'date-lost-day',
      'date-lost-month',
      'date-lost-year',
    ],
    backLink: 'inside-uk',
    next: '/personal-details'
  },
  '/personal-details': {
    controller: require('../common/controllers/personal-details'),
    template: 'personal-details.html',
    fields: [
      'fullname',
      'date-of-birth',
      'date-of-birth-day',
      'date-of-birth-month',
      'date-of-birth-year',
      'nationality',
      'brp-card'
    ],
    backLink: 'date-lost',
    next: '/contact-details'
  },
  '/contact-details': {
    template: 'contact-details.html',
    fields: [
      'email',
      'no-email',
      'contact-address-street',
      'contact-address-town',
      'contact-address-county',
      'contact-address-postcode',
      'phone'
    ],
    backLink: 'personal-details',
    next: '/confirm'
  },
  '/confirm': {
    controller: require('../common/controllers/confirm'),
    template: 'confirm.html',
    fields: [
      'org-help',
      'rep-name',
      'org-type'
    ],
    backLink: 'contact-details',
    next: '/confirmation'
  },
  '/confirmation': {
    controller: require('../common/controllers/confirmation'),
    template: 'confirmation.html',
    backLink: false
  }
};
