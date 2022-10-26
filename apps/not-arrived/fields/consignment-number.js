'use strict';

module.exports = {
  'consignment-number-radio': {
    isPageHeading: true,
    mixin: 'radio-group',
    validate: ['required'],
    className: ['govuk-radios--inline', 'form-group'],
    legend: {
      className: 'visuallyhidden'
    },
    options: [
      {
        value: 'yes',
        toggle: 'consignment-number-fieldset'
      },
      {value: 'no'}
    ]
  },
  'consignment-number': {
    className: ['govuk-input govuk-!-width-two-thirds'],
    validate: [{type: 'maxlength', arguments: 22}, 'notUrl'],
    dependent: {
      field: 'consignment-number-radio',
      value: 'yes'
    }
  }
};
