/* eslint-disable max-len  */
'use strict';

function formatDate(date) {
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}

module.exports = {
  'problem-details': {
    steps: [
      {
        step: '/where',
        field: 'collection-where-radio',
        parse: (list, req) => {
          if (!req.sessionModel.get('steps').includes('/where')) {
            return null;
          }
          const collectionDate = req.sessionModel.get('collection-date');
          return collectionDate ? `${list}\n${formatDate(new Date(collectionDate))}` : list;
        }
      },
      {
        step: '/reason',
        field: 'reason-radio',
        parse: (list, req) => {
          if (req.sessionModel.get('which-post-office')) {
            return `${list}\n${req.sessionModel.get('which-post-office')}`;
          } else if (req.sessionModel.get('under-age')) {
            return `${list}\n${req.sessionModel.get('under-age')}`;
          } else if (req.sessionModel.get('non-identity')) {
            return `${list}\n${req.sessionModel.get('non-identity')}`;
          } else if (req.sessionModel.get('others-identity')) {
            return `${list}\n${req.sessionModel.get('others-identity')}`;
          } else if (req.sessionModel.get('passport-family')) {
            return `${list}\n${req.sessionModel.get('passport-family')}`;
          } else if (req.sessionModel.get('passport-lost')) {
            return `${list}\n${req.sessionModel.get('passport-lost')}`;
          }
          return list;
        }
      }
    ]
  },
  'others-details': {
    steps: [
      {
        step: '/nominated-person',
        field: 'nominated-fullname'
      },
      {
        step: '/nominated-person',
        field: 'nominated-date',
        parse: d => d && formatDate(new Date(d))
      },
      {
        step: '/nominated-person',
        field: 'nominated-nationality'
      },
      {
        step: '/nominated-person',
        field: 'nominated-id-number'
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
