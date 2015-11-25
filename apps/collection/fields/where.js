'use strict';

module.exports = {
  'collection-where-radio': {
    validate: ['required'],
    className: ['inline', 'form-group'],
    legend: {
      className: 'visuallyhidden',
      value: 'pages.where.header'
    },
    options: [{
      value: 'Post Office',
      label: 'fields.collection-where-radio.options.post-office.label',
      toggle: 'collection-date-group'
    }, {
      value: 'Sponsor',
      label: 'fields.collection-where-radio.options.sponsor.label',
      toggle: 'collection-date-group'
    }]
  },
  'collection-date': {
    legend: 'fields.collection-date.legend',
    hint: 'fields.dalivery-date.hint'
  },
  'collection-date-day': {
    validate: ['numeric'],
    label: 'fields.collection-date-day.label'
  },
  'collection-date-month': {
    validate: ['numeric'],
    label: 'fields.collection-date-month.label'
  },
  'collection-date-year': {
    validate: ['numeric'],
    label: 'fields.collection-date-year.label'
  }
};
