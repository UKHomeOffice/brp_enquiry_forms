/* eslint-disable max-len  */
'use strict';

function formatDate(date) {
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

module.exports = {
  'nominee-information': {
    steps: [
      {
        step: '/reason',
        field: 'someone-else-reason-radio'
      },
      {
        step: '/reason',
        field: 'incapable-details'
      },
      {
        step: '/arrange',
        field: 'someone-else-fullname'
      },
      {
        step: '/arrange',
        field: 'someone-else-date'
      },
      {
        step: '/arrange',
        field: 'someone-else-nationality'
      },
      {
        step: '/arrange',
        field: 'someone-else-id-type'
      },
      {
        step: '/arrange',
        field: 'someone-else-id-number'
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
