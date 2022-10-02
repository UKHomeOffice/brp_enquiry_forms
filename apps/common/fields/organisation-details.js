'use strict';

module.exports = {
  'org-help': {
    validate: ['required'],
    className: ['govuk-radios--inline'],
    legend: {
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
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    dependent: {
      field: 'org-help',
      value: 'yes'
    }
  },
  'rep-email': {
    validate: ['email'],
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
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
