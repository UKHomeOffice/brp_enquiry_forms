'use strict';
const moment = require('moment');
const PRETTY_DATE_FORMAT = 'D MMMM YYYY';

module.exports = {
  'check-details': {
    steps: [
      {
        step: '/date-lost',
        field: 'date-lost',
        parse: d => d && moment(d).format(PRETTY_DATE_FORMAT)

      },
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
          return `${req.sessionModel.get('contact-address-house-number')} \n` +
            `${req.sessionModel.get('contact-address-street')} \n` +
            `${req.sessionModel.get('contact-address-town')} \n` +
            `${req.sessionModel.get('contact-address-county')} \n` +
            `${req.sessionModel.get('contact-address-postcode')}`;
        }
      },
      {
        step: '/personal-details',
        field: 'brp-number'
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
