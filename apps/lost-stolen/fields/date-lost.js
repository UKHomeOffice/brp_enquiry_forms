'use strict';

const date = require('hof').components.date;

module.exports = {
  'date-lost': date('date-lost', {
    validate: ['required', 'before'],
    legend: 'fields.date-lost.legend',
    hint: 'fields.date-lost.hint'
  })
};
