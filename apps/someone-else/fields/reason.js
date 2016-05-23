'use strict';

module.exports = {
  'incapable-details': {
    validate: ['required'],
    label: 'fields.incapable-details.label',
    dependent: {
      value: 'incapable',
      field: 'someone-else-reason-radio',
    }
  },
  'someone-else-reason-radio': {
    validate: ['required'],
    legend: {
      className: 'visuallyhidden',
      value: ''
    },
    options: [{
      value: 'incapable',
      label: 'fields.someone-else-reason-radio.options.incapable.label',
      toggle: 'incapable-details',
    }, {
      value: 'under-age',
      label: 'fields.someone-else-reason-radio.options.under-age.label'
    }]
  }
};
