'use strict';

const date = require('hof').components.date;

module.exports = {
  collection: {
    mixin: 'radio-group',
    validate: ['required'],
    className: ['inline', 'form-group'],
    legend: {
      className: 'visuallyhidden'
    },
    options: [
      {
        value: 'yes',
        label: 'fields.collection.options.yes.label'
      },
      {
        value: 'no',
        label: 'fields.collection.options.no.label'
      }
    ]
  },
  received: {
    validate: ['required'],
    className: ['inline', 'form-group'],
    legend: {
      className: 'visuallyhidden'
    },
    options: [
      {
        value: 'yes',
        toggle: 'delivery-date-group'
      },
      'no'
    ]
  },
  'delivery-date': date('delivery-date', {
    validate: ['before'],
    dependent: {
      field: 'received',
      value: 'yes'
    }
  }),
  'no-letter': {
    className: 'form-checkbox',
    dependent: {
      value: 'yes',
      field: 'received'
    }
  }
};
