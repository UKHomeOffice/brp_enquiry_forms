'use strict';

module.exports = {
  'truncated': {
    validate: ['required'],
    className: 'inline',
    legend: {
      value: '',
      className: 'visuallyhidden'
    },
    options: [{
      value: 'yes',
      label: 'fields.truncated.options.yes.label'
    }, {
      value: 'no',
      label: 'fields.truncated.options.no.label',
      toggle: 'truncated-reason-no'
    }]
  },
  'truncation-page': {
    type: 'hidden'
  }
};
