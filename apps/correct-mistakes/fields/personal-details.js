'use strict';
const countries = [''].concat(require('../../../assets/countries').allCountries);

module.exports = {
  nationality: {
    mixin: 'select',
    validate: ['required'],
    className: ['typeahead', 'js-hidden'],
    options: countries
  },
  'reference-number-radio': {
    mixin: 'radio-group',
    validate: ['required'],
    options: [
      {
        value: 'brp-card',
        toggle: 'brp-card-number',
        child: 'input-text'
      },
      {
        value: 'gwf',
        toggle: 'gwf-number',
        child: 'input-text'
      },
      {
        value: 'none',
        toggle: 'no-reference',
        child: 'input-text'
      }
    ]
  }
};
