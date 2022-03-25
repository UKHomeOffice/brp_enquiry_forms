'use strict';

module.exports = {
  name: 'lost-stolen',
  baseUrl: '/lost-stolen',
  params: '/:action?',
  behaviours: [require('../common/behaviours/location')],
  steps: {
    '/previous-submission': {
      fields: [
        'previous-submission',
        'submission-reference'
      ],
      next: '/where'
    },
    '/where': {
      fields: ['inside-uk', 'country'],
      next: '/date-lost',
      backLink: 'previous-submission'
    },
    '/date-lost': {
      fields: [
        'date-lost',
        'date-lost-day',
        'date-lost-month',
        'date-lost-year'
      ],
      backLink: 'where',
      next: '/personal-details'
    },
    '/personal-details': {
      fields: ['fullname', 'date-of-birth', 'nationality', 'brp-card'],
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
      behaviours: ['complete', require('../common/behaviours/email')],
      fields: ['org-help', 'rep-name', 'rep-email', 'org-type'],
      backLink: 'contact-details',
      next: '/confirmation'
    },
    '/confirmation': {
      backLink: false,
      clearSession: true
    }
  }
};
