'use strict';

module.exports = {
  'brp-card': {
    validate: ['required',
      {type: 'regex', arguments: /^R\D(\d|X)\d{5}$/gi}
    ],
    hint: 'fields.brp-card.hint'
  }
};
