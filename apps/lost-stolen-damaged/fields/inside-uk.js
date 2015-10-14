'use strict';

module.exports = {
  'inside-uk': {
    validate: ['required'],
    className: ['inline', 'form-group'],
    options: [{
      value: 'yes',
      label: 'fields.inside-uk.options.yes.label'
    }, {
      value: 'no',
      label: 'fields.inside-uk.options.no.label',
      toggle: 'country-group'
    }]
  },
  country: {
    dependent: {
      field: 'inside-uk',
      value: 'no'
    },
    validate: ['required'],
    label: 'fields.country.label'
  }
};
