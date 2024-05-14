'use strict';

module.exports = {
  'inside-uk': {
    mixin: 'radio-group',
    isPageHeading: true,
    validate: ['required'],
    className: ['govuk-radios', 'govuk-radios--inline'],
    options: [{
      value: 'yes'
    }, {
      value: 'no',
      toggle: 'country-group'
    }]
  },
  country: {
    mixin: 'select',
    className: ['typeahead', 'js-hidden'],
    options: [''].concat(require('../../../assets/countries').allCountries),
    validationLink: {
      field: 'inside-uk',
      value: 'no'
    },
    validate: ['required']
  }
};
