'use strict';

module.exports = {
  'tracking-number-radio': {
    mixin: 'radio-group',
    validate: ['required'],
    className: ['inline', 'form-group'],
    legend: {
      className: 'visuallyhidden'
    },
    options: [
      {
        value: 'yes',
        toggle: 'tracking-number-fieldset'
      },
      {value: 'no'}
    ]
  },
  'tracking-number': {
    validate: ['required', {type: 'maxlength', arguments: 22}, 'notUrl'],
    dependent: {
      field: 'tracking-number-radio',
      value: 'yes'
    }
  }
};
