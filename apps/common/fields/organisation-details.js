'use strict';

module.exports = {
  'org-help': {
    validate: ['required'],
    className: 'inline',
    legend: {
      className: 'visuallyhidden',
      value: 'pages.check-details.org-help.title'
    },
    options: [
      {
        value: 'yes',
        toggle: 'org-details-group'
      },
      'no'
    ]
  },
  'rep-name': {
    validate: ['required', 'notUrl'],
    dependent: {
      field: 'org-help',
      value: 'yes'
    }
  },
  'rep-email': {
    validate: ['email'],
    dependent: {
      field: 'org-help',
      value: 'yes'
    }
  },
  'org-type': {
    validate: ['required'],
    dependent: {
      field: 'org-help',
      value: 'yes'
    },
    legend: {
      className: 'visuallyhidden',
      value: 'pages.check-details.org-details-group.type'
    },
    options: [
      'pbs',
      'legal',
      'relative',
      'support'
    ]
  }
};
