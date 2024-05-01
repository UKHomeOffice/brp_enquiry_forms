'use strict';

const date = require('hof').components.date;
const countries = [''].concat(require('../../../assets/countries').allCountries);
function formatDate(d) {
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear();
  return Date.parse(`${year}-${month}-${day}`);
}
const todaysDate = formatDate(new Date());
const beforeTodayValidator = {
  type: 'before',
  arguments: [todaysDate]
};

module.exports = {
  'reference-number-radio': {
    mixin: 'radio-group',
    validate: ['required'],
    className: ['form-group'],
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
  },
  'date-of-birth': date('date-of-birth', {
    mixin: 'input-date',
    validate: ['required', beforeTodayValidator]
  }),
  nationality: {
    mixin: 'select',
    validate: ['required'],
    className: ['typeahead', 'js-hidden'],
    options: countries
  },
  email: {
    validate: ['required', 'email'],
    type: 'email'
  },
  phone: {
    label: 'fields.phone.label',
    className: ['govuk-input', 'govuk-input--width-20']
  },
  'contact-address-county': {
    label: 'fields.address-county.label',
    className: ['govuk-input', 'govuk-!-width-two-thirds'],
    dependent: {
      value: 'true',
      field: 'use-address'
    }
  }
};
