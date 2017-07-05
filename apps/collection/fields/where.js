'use strict';

const date = require('hof-component-date');

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
  'collection-date': date('collection-date', {
    validate: ['before']
  })
};
