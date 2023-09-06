'use strict';

module.exports = {
  'reference-number-radio': {
    validate: ['required'],
    className: ['form-group'],
    options: [
      {
        value: 'brp-card',
        toggle: 'brp-card-number',
        child: 'input-text'
      },
      {
        value: 'gwf',
        toggle: 'gwf-number',
        child: 'input-text'
      },
      {
        value: 'none',
        toggle: 'no-reference',
        child: 'input-text'
      }
    ]
  }
};
