'use strict';

const ReasonsBehaviour = require('./behaviours/reason');
const PersonalDetailsBehaviour = require('./behaviours/personal-details');
const ConfirmBehaviour = require('./behaviours/confirm');
const EmailBehaviour = require('../common/behaviours/email');

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
      behaviours: ['complete', ConfirmBehaviour, EmailBehaviour],
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
      backLink: false,
      clearSession: true
    }
  }
};
