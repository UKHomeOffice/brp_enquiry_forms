'use strict';

module.exports = {
 'location-applied': {
    validate: ['required'],
    legend: {
      className: 'visuallyhidden',
      value: ''
    },
    className: ['inline', 'form-group'],
    options: [{
      value: 'yes',
      label: 'fields.location-applied.options.yes.label'
    }, {
      value: 'no',
      label: 'fields.location-applied.options.no.label'
    }]
  }
};
