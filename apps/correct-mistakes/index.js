'use strict';
const hof = require('hof');
const Summary = hof.components.summary;

module.exports = {
  name: 'correct-mistakes',
  baseUrl: '/correct-mistakes',
  params: '/:action?',
  behaviours: [require('../common/behaviours/location')],
  steps: {
    '/location': {
      template: 'location-applied',
      fields: [
        'location-applied'
      ],
      locals: { captionHeading: 'Step 1 of 6' },
      next: '/about-error'
    },
    '/about-error': {
      behaviours: [require('./behaviours/about-error')],
      fields: [
        'error-selection',
        'last-name-error',
        'first-name-error',
        'birth-place-error',
        'date-of-birth-error',
        'gender-error',
        'sponsor-details-error',
        'nationality-error',
        'signature-error',
        'photograph-error',
        'national-insurance-error',
        'damaged-error',
        'conditions-error',
        'length-of-stay-error',
        'biographics-error',
        'BRP-issue-error',
        'letter-error'
      ],
      backLink: 'location',
      locals: { captionHeading: 'Step 2 of 6' },
      next: '/uk-address',
      forks: [{
        target: '/same-address',
        condition: req => {
          if (req.sessionModel && req.sessionModel.toJSON) {
            return req.sessionModel.toJSON()['location-applied'] === 'yes';
          }
          return false;
        }
      }, {
        target: '/uk-address',
        condition: req => {
          if (req.sessionModel && req.sessionModel.toJSON) {
            return req.sessionModel.toJSON()['location-applied'] === 'no';
          }
          return false;
        }
      }
      ]
    },
    '/enrolment-letter': {
      clearSession: true
    },
    '/truncated': {
      behaviours: [require('./behaviours/truncated')],
      fields: [
        'truncated', 'truncation-page'
      ],
      next: '/uk-address'
    },
    '/exit-truncated': {
      prereqs: ['/truncated'],
      clearSession: true
    },
    '/uk-address': {
      fields: [
        'uk-address-radio',
        'uk-address-house-number',
        'uk-address-street',
        'uk-address-town',
        'uk-address-county',
        'uk-address-postcode'
      ],
      backLink: 'about-error',
      locals: { captionHeading: 'Step 3 of 6' },
      next: '/personal-details'
    },
    '/same-address': {
      fields: [
        'same-address-radio',
        'same-address-house-number',
        'same-address-street',
        'same-address-town',
        'same-address-county',
        'same-address-postcode'
      ],
      backLink: 'about-error',
      locals: { captionHeading: 'Step 3 of 6' },
      next: '/personal-details'
    },
    '/personal-details': {
      template: 'personal-details-brp',
      fields: [
        'fullname',
        'date-of-birth',
        'nationality',
        'reference-number-radio',
        'brp-card-number',
        'gwf-number',
        'no-reference'
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
      behaviours: [Summary, 'complete', require('../common/behaviours/email')],
      sections: require('./sections/summary-data-sections'),
      fields: [
        'org-help', 'rep-name', 'rep-email', 'org-type'
      ],
      backLink: 'contact-details',
      locals: { captionHeading: 'Step 6 of 6' },
      next: '/confirmation'
    },
    '/confirmation': {
      backLink: false,
      clearSession: true
    }
  }
};
