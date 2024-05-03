/* eslint-disable max-len  */
'use strict';

const moment = require('moment');
const PRETTY_DATE_FORMAT = 'D MMMM YYYY';

module.exports = {
  'delivery-details': {
    steps: [
      {
        step: '/same-address',
        field: 'address-match',
        parse: (list, req) => {
          if (req.sessionModel.get('address-match') === 'yes') {
            return req.sessionModel.get('delivery-details');
          }
          return req.sessionModel.get('address-county') ? `${req.sessionModel.get('address-house-number')} ${req.sessionModel.get('address-street')}, \n` +
            `${req.sessionModel.get('address-town')}, \n` +
            `${req.sessionModel.get('address-county')}, \n` +
            `${req.sessionModel.get('address-postcode')}` :

            `${req.sessionModel.get('address-house-number')} ${req.sessionModel.get('address-street')}, \n` +
            `${req.sessionModel.get('address-town')}, \n` +
            `${req.sessionModel.get('address-postcode')}`;
        }
      },
      {
        step: '/same-address',
        field: 'case-id'
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
        step: '/personal-details',
        field: 'passport'
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
