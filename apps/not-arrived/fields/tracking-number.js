'use strict';

module.exports = {
  'tracking-number-radio': {
    isPageHeading: true,
    mixin: 'radio-group',
    className: ['govuk-radios', 'govuk-radios--inline'],
    validate: ['required'],
    options: [
      {
        value: 'yes',
        toggle: 'tracking-number',
        child: 'input-text'
      },
      {
        value: 'no'
      }
    ]
  },
  'tracking-number': {
    mixin: 'input-text',
    validate: ['required', { type: 'maxlength', arguments: 22 }, 'notUrl'],
    dependent: {
      field: 'tracking-number-radio',
      value: 'yes'
    }
  }
};
