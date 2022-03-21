'use strict';

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
      next: '/about-error'
    },
    '/about-error': {
      behaviours: [require('./behaviours/about-error')],
      fields: [
        'error-selection',
        'last-name-error-checkbox',
        'last-name-error',
        'first-name-error-checkbox',
        'first-name-error',
        'birth-place-error-checkbox',
        'birth-place-error',
        'date-of-birth-error-checkbox',
        'date-of-birth-error',
        'gender-error-checkbox',
        'gender-error',
        'sponsor-details-error-checkbox',
        'sponsor-details-error',
        'nationality-error-checkbox',
        'nationality-error',
        'signature-error-checkbox',
        'signature-error',
        'photograph-error-checkbox',
        'photograph-error',
        'national-insurance-error-checkbox',
        'national-insurance-error',
        'damaged-error-checkbox',
        'damaged-error',
        'conditions-error-checkbox',
        'conditions-error',
        'length-of-stay-error-checkbox',
        'length-of-stay-error',
        'biographics-error-checkbox',
        'biographics-error',
        'BRP-issue-error-checkbox',
        'BRP-issue-error',
        'letter-error-checkbox',
        'letter-error'
      ],
      backLink: 'location',
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
      next: '/personal-details'
    },
    '/personal-details': {
      template: 'personal-details-brp',
      fields: [
        'fullname', 'date-of-birth', 'nationality', 'brp-card'
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
      behaviours: ['complete', require('../common/behaviours/email')],
      fields: [
        'org-help', 'rep-name', 'rep-email', 'org-type'
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
