'use-strict';

module.exports = {
  'previous-submission': {
    mixin: 'radio-group',
    validate: ['required'],
    className: ['inline', 'form-group'],
    legend: {
      className: 'visuallyhidden'
    },
    options: [{
      value: 'yes',
      toggle: 'previous-submission-reference-group'
    }, {
      value: 'no'
    }]
  },
  'submission-reference': {
    validate: [ {type: 'regex', arguments: /^[A-Za-z0-9]{15}$|(^$)+/g }]
  }
};
