'use strict';

const brpNumber = {
  type: 'regex',
  arguments: /^(?=(?:.){9})[a-zA-Z]{2}[xX0-9]{1}\d{6}$/
};


module.exports = {
  'brp-card': {
    validate: ['required', brpNumber],
    formatter: ['uppercase'],
    hint: 'fields.brp-card.hint'
  }
};
