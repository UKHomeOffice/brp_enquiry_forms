'use strict';

const date = require('hof').components.date;

module.exports = {
  'date-lost': date('date-lost', {
    isPageHeading: true,
    mixin: 'input-date',
    validate: ['required', 'before', { type: 'after', arguments: ['20150730']}]
  })
};
