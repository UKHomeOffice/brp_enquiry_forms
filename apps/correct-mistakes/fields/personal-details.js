'use strict';

module.exports = {
  'brp-card': {
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    validate: ['required', {type: 'regex', arguments: /^[a-z][a-z](\d|X)\d{6}$/gi }],
    formatter: ['uppercase'],
    hint: 'fields.brp-card.hint'
  }
};
