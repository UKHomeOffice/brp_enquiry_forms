'use strict';

module.exports = {
  name: 'someone-else',
  baseUrl: '/someone-else',
  params: '/:action?',
  steps: {
    '/arrange': {
      behaviours: [require('./behaviours/someone-else-brp')],
      fields: [
        'someone-else-fullname',
        'someone-else-date',
        'someone-else-nationality',
        'someone-else-id-type',
        'someone-else-id-number'
      ],
      next: '/reason'
    },
    '/reason': {
      fields: [
        'someone-else-reason-radio',
        'incapable-details'
      ],
      next: '/personal-details'
    },
    '/personal-details': {
      behaviours: [require('./behaviours/personal-details')],
      fields: [
        'fullname',
        'date-of-birth',
        'nationality',
        'passport'
      ],
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
      next: '/confirm'
    },
    '/confirm': {
      behaviours: ['complete', require('../common/behaviours/email')],
      fields: [
        'org-help',
        'rep-name',
        'rep-email',
        'org-type'
      ],
      next: '/confirmation'
    },
    '/confirmation': {
      backLink: false,
      clearSession: true
    }
  }
};
