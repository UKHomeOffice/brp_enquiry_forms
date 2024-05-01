'use strict';

module.exports = {
  'location-applied': {
    mixin: 'radio-group',
    validate: ['required'],
    legend: {
      className: 'visuallyhidden'
    },
    className: ['govuk-radios', 'govuk-radios--inline'],
    options: ['yes', 'no']
  }
};
