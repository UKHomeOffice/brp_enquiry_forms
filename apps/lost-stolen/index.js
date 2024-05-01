'use strict';
const hof = require('hof');
const Summary = hof.components.summary;

module.exports = {
  name: 'lost-stolen',
  baseUrl: '/lost-stolen',
  params: '/:action?',
  behaviours: [require('../common/behaviours/location')],
  steps: {
    '/where': {
      fields: ['inside-uk', 'country'],
      locals: { captionHeading: 'Step 1 of 5' },
      next: '/date-lost'
    },
    '/date-lost': {
      fields: [
        'date-lost'
      ],
      backLink: 'where',
      locals: { captionHeading: 'Step 2 of 5' },
      next: '/personal-details'
    },
    '/personal-details': {
      fields: [
        'fullname',
        'date-of-birth',
        'nationality',
        'reference-number-radio',
        'brp-card-number',
        'gwf-number',
        'no-reference'
      ],
      backLink: 'date-lost',
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
      behaviours: [Summary, 'complete', require('../common/behaviours/email')],
      sections: require('./sections/summary-data-sections'),
      fields: ['org-help', 'rep-name', 'rep-email', 'org-type'],
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
