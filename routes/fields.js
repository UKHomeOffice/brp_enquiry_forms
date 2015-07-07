'use strict';

module.exports = {
  'continue': {
    value: 'buttons.continue'
  },
  submit: {
    value: 'buttons.submit'
  },
  change: {
    value: 'buttons.change'
  },
  received: {
    validate: ['required'],
    display: 'inline',
    options: [{
      value: 'yes',
      label: 'fields.received.options.yes.label'
    }, {
      value: 'no',
      label: 'fields.received.options.no.label'
    }]
  },
  'delivery-date': {
    legend: 'fields.delivery-date.legend',
    hint: 'fields.dalivery-date.hint'
  },
  'delivery-date-day': {
    validate: ['required', 'numeric'],
    label: 'fields.delivery-date-day.label',
  },
  'delivery-date-month': {
    validate: ['required', 'numeric'],
    label: 'fields.delivery-date-month.label'
  },
  'delivery-date-year': {
    validate: ['required', 'numeric'],
    label: 'fields.delivery-date-year.label'
  },
  'no-letter': {
    label: 'fields.no-letter.label',
    className: 'form-checkbox'
  },
  'delivery-details': {
    legend: 'fields.delivery-details.legend',
    label: 'fields.delivery-details.label'
  },
  'address-match': {
    display: 'inline',
    options: [{
      value: 'yes',
      label: 'fields.address-match.options.yes.label'
    }, {
      value: 'no',
      label: 'fields.address-match.options.no.label'
    }]
  },
  'address-street': {
    label: 'fields.address-street.label'
  },
  'address-town': {
    label: 'fields.address-town.label'
  },
  'address-county': {
    label: 'fields.address-county.label'
  },
  'address-postcode': {
    label: 'fields.address-postcode.label'
  },
  fullname: {
    label: 'fields.fullname.label'
  },
  'date-of-birth': {
    legend: 'fields.date-of-birth.legend',
    hint: 'fields.date-of-birth.hint'
  },
  'date-of-birth-day': {
    label: 'fields.date-of-birth-day.label'
  },
  'date-of-birth-month': {
    label: 'fields.date-of-birth-month.label'
  },
  'date-of-birth-year': {
    label: 'fields.date-of-birth-year.label'
  },
  nationality: {
    label: 'fields.nationality.label'
  },
  passport: {
    label: 'fields.passport.label'
  },
  'brp-card': {
    label: 'fields.brp-card.label',
    hint: 'fields.brp-card.hint'
  },
  email: {
    type: 'email',
    label: 'fields.email.label'
  },
  'no-email': {
    display: 'inline',
    options: [{
      value: 'yes',
      label: 'fields.no-email.options.yes.label'
    }, {
      value: 'no',
      label: 'fields.no-email.options.no.label'
    }]
  },
  phone: {
    label: 'fields.phone.label'
  },
  'first-name-error-checkbox': {
    label: 'fields.first-name-error-checkbox.label'
  },
  'first-name-error': {
    label: 'fields.first-name-error.label'
  },
  'last-name-error-checkbox': {
    label: 'fields.last-name-error-checkbox.label'
  },
  'last-name-error': {
    label: 'fields.last-name-error.label'
  },
  'date-of-birth-error-checkbox': {
    label: 'fields.date-of-birth-error-checkbox.label'
  },
  'date-of-birth-error': {
    label: 'fields.date-of-birth-error.label',
    hint: 'fields.date-of-birth-error.hint'
  },
  'date-of-birth-day-error': {
    label: 'fields.date-of-birth-day-error.label',
    hint: 'fields.date-of-birth-day-error.hint'
  },
  'date-of-birth-month-error': {
    label: 'fields.date-of-birth-month-error.label',
    hint: 'fields.date-of-birth-month-error.hint'
  },
  'date-of-birth-year-error': {
    label: 'fields.date-of-birth-year-error.label',
    hint: 'fields.date-of-birth-year-error.hint'
  },
  'birth-place-error-checkbox': {
    label: 'fields.birth-place-error-checkbox.label'
  },
  'birth-place-error': {
    label: 'fields.birth-place-error.label'
  },
  'gender-error-checkbox': {
    label: 'fields.gender-error-checkbox.label'
  },
  'gender-error': {
    display: 'block',
    className: 'panel-indent',
    options: [{
      value: 'female',
      label: 'fields.gender-error.options.female.label'
    }, {
      value: 'male',
      label: 'fields.gender-error.options.male.label'
    }, {
      value: 'unspecified',
      label: 'fields.gender-error.options.unspecified.label'
    }]
  },
  'sponsor-details-error-checkbox': {
    label: 'fields.sponsor-details-error-checkbox.label'
  },
  'sponsor-details-error': {
    label: 'fields.sponsor-details-error.label',
  },
  'nationality-error-checkbox': {
    label: 'fields.nationality-error-checkbox.label'
  },
  'nationality-error': {
    label: 'fields.nationality-error.label',
  },
  'signature-error-checkbox': {
    label: 'fields.signature-error-checkbox.label'
  },
  'signature-error': {
    label: 'fields.signature-error.label',
  },
  'photograph-error-checkbox': {
    label: 'fields.photograph-error-checkbox.label'
  },
  'photograph-error': {
    label: 'fields.photograph-error.label',
  },
  'damaged-error-checkbox': {
    label: 'fields.damaged-error-checkbox.label'
  },
  'damaged-error': {
    label: 'fields.damaged-error.label',
  },
  'conditions-error-checkbox': {
    label: 'fields.conditions-error-checkbox.label'
  }
};
