/* eslint-disable max-len  */
'use strict';
const moment = require('moment');
const PRETTY_DATE_FORMAT = 'D MMMM YYYY';

module.exports = {
  'check-details': {
    steps: [
      {
        step: '/about-error',
        field: 'first-name-error'
      },
      {
        step: '/about-error',
        field: 'last-name-error'
      },
      {
        step: '/about-error',
        field: 'birth-place-error'
      },
      {
        step: '/about-error',
        field: 'date-of-birth-error',
        parse: d => d && moment(d).format(PRETTY_DATE_FORMAT)
      },
      {
        step: '/about-error',
        field: 'gender-error'
      },
      {
        step: '/about-error',
        field: 'sponsor-details-error'
      },
      {
        step: '/about-error',
        field: 'nationality-error'
      },
      {
        step: '/about-error',
        field: 'signature-error'
      },
      {
        step: '/about-error',
        field: 'photograph-error'
      },
      {
        step: '/about-error',
        field: 'national-insurance-error'
      },
      {
        step: '/about-error',
        field: 'damaged-error'
      },
      {
        step: '/about-error',
        field: 'conditions-error'
      },
      {
        step: '/about-error',
        field: 'length-of-stay-error'
      },
      {
        step: '/about-error',
        field: 'biographics-error'
      },
      {
        step: '/about-error',
        field: 'BRP-issue-error'
      }
    ]
  },
  'delivery-details': {
    steps: [
      {
        step: '/same-address',
        field: 'same-address-radio',
        parse: (list, req) => {
          if (!req.sessionModel.get('same-address-radio') || req.sessionModel.get('same-address-radio') === 'yes') {
            return null;
          }
          return req.sessionModel.get('same-address-county') ? `${req.sessionModel.get('same-address-house-number')} ${req.sessionModel.get('same-address-street')}, \n` +
            `${req.sessionModel.get('same-address-town')}, \n` +
            `${req.sessionModel.get('same-address-county')}, \n` +
            `${req.sessionModel.get('same-address-postcode')}` :

            `${req.sessionModel.get('same-address-house-number')} ${req.sessionModel.get('same-address-street')}, \n` +
            `${req.sessionModel.get('same-address-town')}, \n` +
            `${req.sessionModel.get('same-address-postcode')}`;
        }
      },
      {
        step: '/uk-address',
        field: 'uk-address-radio',
        parse: (list, req) => {
          if (!req.sessionModel.get('uk-address-radio') || req.sessionModel.get('uk-address-radio') === 'no') {
            return null;
          }
          return req.sessionModel.get('uk-address-county') ? `${req.sessionModel.get('uk-address-house-number')} ${req.sessionModel.get('uk-address-street')}, \n` +
            `${req.sessionModel.get('uk-address-town')}, \n` +
            `${req.sessionModel.get('uk-address-county')}, \n` +
            `${req.sessionModel.get('uk-address-postcode')}` :

            `${req.sessionModel.get('uk-address-house-number')} ${req.sessionModel.get('uk-address-street')}, \n` +
            `${req.sessionModel.get('uk-address-town')}, \n` +
            `${req.sessionModel.get('uk-address-postcode')}`;
        }
      }
    ]
  },
  'personal-details': {
    steps: [
      {
        step: '/personal-details',
        field: 'fullname'
      },
      {
        step: '/personal-details',
        field: 'date-of-birth',
        parse: d => d && moment(d).format(PRETTY_DATE_FORMAT)
      },
      {
        step: '/personal-details',
        field: 'nationality'
      },
      {
        step: '/contact-details',
        field: 'use-address',
        parse: (list, req) => {
          if (!req.sessionModel.get('use-address')) {
            return null;
          }
          return req.sessionModel.get('contact-address-county') ? `${req.sessionModel.get('contact-address-house-number')} ${req.sessionModel.get('contact-address-street')}, \n` +
            `${req.sessionModel.get('contact-address-town')}, \n` +
            `${req.sessionModel.get('contact-address-county')}, \n` +
            `${req.sessionModel.get('contact-address-postcode')}` :

            `${req.sessionModel.get('contact-address-house-number')} ${req.sessionModel.get('contact-address-street')}, \n` +
            `${req.sessionModel.get('contact-address-town')}, \n` +
            `${req.sessionModel.get('contact-address-postcode')}`;
        }
      },
      {
        step: '/personal-details',
        field: 'brp-card-number'
      },
      {
        step: '/personal-details',
        field: 'gwf-number'
      },
      {
        step: '/personal-details',
        field: 'no-reference'
      },
      {
        step: '/contact-details',
        field: 'email'
      },
      {
        step: '/contact-details',
        field: 'phone'
      }
    ]
  }
};
