'use strict';
const SummaryPageBehaviour = require('hof').components.summary;

module.exports = {
  name: 'someone-else',
  baseUrl: '/someone-else',
  params: '/:action?',
  confirmStep: '/confirm',
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
      locals: { captionHeading: 'Step 1 of 5' },
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
      behaviours: [SummaryPageBehaviour, 'complete', require('../common/behaviours/email')],
      sections: require('./sections/summary-data-sections'),
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
