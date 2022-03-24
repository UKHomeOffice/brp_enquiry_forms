'use strict';

module.exports = {
  'brp-card': {
    validate: ['required', {type: 'regex', arguments: /^[a-z][a-z](\d|X)\d{6}$/gi }],
    formatter: ['uppercase'],
    hint: 'fields.brp-card.hint'
  },
  phone: {
    validate: ['notUrl']
  }
};
