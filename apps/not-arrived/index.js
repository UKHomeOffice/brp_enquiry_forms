'use strict';
const hof = require('hof');
const Summary = hof.components.summary;

module.exports = {
  name: 'not-arrived',
  baseUrl: '/not-arrived',
  params: '/:action?',
  steps: {
    '/post-office-collect': {
      next: '/tracking-number',
      behaviours: [require('./behaviours/change-path')],
      template: 'collection.html',
      fields: [
        'collection'
      ]
    },
    '/tracking-number': {
      next: '/letter-received',
      fields: [
        'tracking-number-radio',
        'tracking-number'
      ],
      backLink: 'post-office-collect'
    },
    '/letter-received': {
      behaviours: [require('./behaviours/letter-received')],
      fields: [
        'received',
        'delivery-date',
        'no-letter',
        'case-id-number'
      ],
      backLink: 'tracking-number',
      locals: { captionHeading: 'Step 1 of 5' },
      next: '/same-address',
      forks: [{
        target: '/letter-not-received',
        condition: {
          field: 'received',
          value: 'no'
        }
      }, {
        target: '/letter-lost',
        condition: {
          field: 'no-letter',
          value: 'true'
        }
      }]
    },
    '/letter-lost': {},
    '/letter-not-received': {},
    '/on-the-way': {
      prereqs: ['/letter-received']
    },
    '/same-address': {
      template: 'same-address-details.html',
      fields: [
        'address-match',
        'delivery-details',
        'address-house-number',
        'address-street',
        'address-town',
        'address-county',
        'address-postcode',
        'case-id'
      ],
      backLink: 'letter-received',
      locals: { captionHeading: 'Step 2 of 5' },
      next: '/personal-details'
    },
    '/personal-details': {
      fields: [
        'fullname',
        'date-of-birth',
        'nationality',
        'passport'
      ],
      backLink: 'same-address',
      locals: { captionHeading: 'Step 3 of 5' },
      next: '/contact-details'
    },
    '/contact-details': {
      fields: [
        'email',
        'phone',
        'use-address',
        'contact-address-house-number',
        'contact-address-street',
        'contact-address-town',
        'contact-address-county',
        'contact-address-postcode'
      ],
      backLink: 'personal-details',
      locals: { captionHeading: 'Step 4 of 5' },
      next: '/confirm'
    },
    '/confirm': {
      behaviours: [Summary,  require('../common/behaviours/email')],
      sections: require('./sections/summary-data-sections'),
      fields: [
        'org-help',
        'rep-name',
        'rep-email',
        'org-type'
      ],
      backLink: 'contact-details',
      locals: { captionHeading: 'Step 5 of 5' },
      next: '/confirmation'
    },
    '/confirmation': {
      backLink: false,
      clearSession: true
    }
  }
};
