/* eslint-disable max-len  */
'use strict';

function formatDate(date) {
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

module.exports = {
  'delivery-details': {
    steps: [
      {
        step: '/letter-received',
        field: 'delivery-date',
        parse: d => d && formatDate(new Date(d))
      },
      {
        step: '/letter-received',
        field: 'case-id'
      },
      {
        step: '/same-address',
        field: 'address-match',
        parse: (list, req) => {
          if (req.sessionModel.get('address-match') === 'yes') {
            return null;
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
        field: 'delivery-details',
        dependsOn: 'address-match'
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
        parse: d => d && formatDate(new Date(d))
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
        field: 'passport'
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
