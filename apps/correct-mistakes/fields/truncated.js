'use strict';

module.exports = {
  'truncated': {
    validate: ['required'],
    className: 'inline',
    options: [{
      value: 'yes',
      label: 'fields.truncated.options.yes.label'
    }, {
      value: 'no',
      label: 'fields.truncated.options.no.label'
    }]
  },
  'truncation-page': {
    type: 'hidden'
  }
};
