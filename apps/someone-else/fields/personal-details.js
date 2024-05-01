'use strict';
const countries = [''].concat(require('../../../assets/countries').allCountries);

module.exports = {
  nationality: {
    mixin: 'select',
    validate: ['required'],
    className: ['typeahead', 'js-hidden'],
    options: countries
  }
};
