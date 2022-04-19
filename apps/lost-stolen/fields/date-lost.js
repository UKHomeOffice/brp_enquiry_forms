'use strict';

const date = require('hof').components.date;

module.exports = {
  'date-lost': date('date-lost', {
    validate: ['required', 'before', { type: 'after', arguments: ['20150730']}],
    legend: 'fields.date-lost.legend',
    hint: 'fields.date-lost.hint'
  })
};
