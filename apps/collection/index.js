'use strict';

const ReasonsBehaviour = require('./behaviours/reason');
const PersonalDetailsBehaviour = require('./behaviours/personal-details');
const ConfirmBehaviour = require('./behaviours/confirm');
const EmailBehaviour = require('../common/behaviours/email');
const hof = require('hof');
const Summary = hof.components.summary;
module.exports = {
  name: 'collection',
  baseUrl: '/collection',
  params: '/:action?',
  steps: {
    '/where': {
      fields: [
        'collection-where-radio',
        'collection-date'
      ],
      locals: { captionHeading: 'Step 1 of 6' },
      next: '/reasons'
    },
    '/reasons': {
      behaviours: ReasonsBehaviour,
      fields: [
        'reason-radio',
        'which-post-office',
        'under-age',
        'non-identity',
        'others-identity',
        'passport-family',
        'passport-lost'
      ],
      locals: { captionHeading: 'Step 2 of 6' },
      next: '/personal-details',
      backLink: 'where',
      forks: [{
        target: '/nominated-person',
        condition: {
          field: 'reason-radio',
          value: 'others-identity'
        }
      }]
    },
    '/nominated-person': {
      fields: [
        'nominated-fullname',
        'nominated-date',
        'nominated-nationality',
        'nominated-id-number'
      ],
      locals: { captionHeading: 'Step 3 of 6' },
      next: '/personal-details',
      backLink: 'reasons'
    },
    '/personal-details': {
      behaviours: PersonalDetailsBehaviour,
      fields: [
        'fullname',
        'date-of-birth',
        'nationality',
        'passport'
      ],
      locals: { captionHeading: 'Step 4 of 6' },
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
      locals: { captionHeading: 'Step 5 of 6' },
      next: '/confirm'
    },
    '/confirm': {
      behaviours: [Summary, 'complete', ConfirmBehaviour, EmailBehaviour],
      sections: require('./sections/summary-data-sections'),
      fields: [
        'org-help',
        'rep-name',
        'rep-email',
        'org-type'
      ],
      backLink: 'contact-details',
      locals: { captionHeading: 'Step 6 of 6' },
      next: '/confirmation'
    },
    '/confirmation': {
      backLink: false,
      clearSession: true
    },
    '/exit': {}
  }
};
