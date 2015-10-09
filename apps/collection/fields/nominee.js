'use strict';

module.exports = {
  'nominated-fullname': {
    validate: ['required']
  },
  'nominated-nationality': {
    validate: ['required']
  },
  'nominated-id-number': {
    validate: ['required']
  },
  'nominated-date': {
    legend: 'fields.nominated-date.legend',
    hint: 'fields.dalivery-date.hint'
  },
  'nominated-date-day': {
    validate: ['required', 'numeric'],
    label: 'fields.nominated-date-day.label'
  },
  'nominated-date-month': {
    validate: ['required', 'numeric'],
    label: 'fields.nominated-date-month.label'
  },
  'nominated-date-year': {
    validate: ['required', 'numeric'],
    label: 'fields.nominated-date-year.label'
  }
};
