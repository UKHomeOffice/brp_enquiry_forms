'use strict';

module.exports = {
  truncated: {
    validate: ['required'],
    className: ['govuk-radios', 'govuk-radios--inline'],
    legend: {
      value: '',
      className: 'visuallyhidden'
    },
    options: [{
      value: 'yes'
    }, {
      value: 'no',
      toggle: 'truncated-reason-no'
    }]
  },
  'truncation-page': {
    type: 'hidden'
  }
};
