'use strict';

module.exports = {
  '/where': {
    fields: [
      'inside-uk',
      'country'
    ],
    next: '/date-lost'
  },
  '/date-lost': {
    fields: [
      'date-lost',
      'date-lost-day',
      'date-lost-month',
      'date-lost-year',
    ],
    backLink: 'where',
    next: '/personal-details'
  },
  '/personal-details': {
    fields: [
      'fullname',
      'date-of-birth',
      'nationality',
      'brp-card'
    ],
    backLink: 'date-lost',
    next: '/contact-details'
  },
  '/contact-details': {
    fields: [
      'email',
      'use-address',
      'contact-address-house-number',
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
    behaviours: ['complete', require('../common/behaviours/email'), require('../common/behaviours/workflow')],
    fields: [
      'org-help',
      'rep-name',
      'rep-email',
      'org-type'
    ],
    backLink: 'contact-details',
    next: '/confirmation'
  },
  '/confirmation': {
    backLink: false
  }
};
