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
    className: ['inline', 'form-group'],
    options: [{
      value: 'yes',
      label: 'fields.received.options.yes.label',
      toggle: 'delivery-date-group'
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
    validate: ['required'],
    className: ['inline', 'form-group'],
    options: [{
      value: 'yes',
      label: 'fields.address-match.options.yes.label',
      toggle: 'delivery-details-fieldset'
    }, {
      value: 'no',
      label: 'fields.address-match.options.no.label',
      toggle: 'new-address-fieldset'
    }]
  },
  'address-street': {
    validate: ['required'],
    label: 'fields.address-street.label'
  },
  'address-town': {
    validate: ['required'],
    label: 'fields.address-town.label'
  },
  'address-county': {
    label: 'fields.address-county.label'
  },
  'address-postcode': {
    validate: ['required'],
    label: 'fields.address-postcode.label'
  },
  'contact-address-street': {
    validate: ['required'],
    label: 'fields.address-street.label'
  },
  'contact-address-town': {
    validate: ['required'],
    label: 'fields.address-town.label'
  },
  'contact-address-county': {
    label: 'fields.address-county.label'
  },
  'contact-address-postcode': {
    validate: ['required'],
    label: 'fields.address-postcode.label'
  },
  fullname: {
    validate: ['required'],
    label: 'fields.fullname.label'
  },
  'date-of-birth': {
    legend: 'fields.date-of-birth.legend',
    hint: 'fields.date-of-birth.hint'
  },
  'date-of-birth-day': {
    validate: ['required', 'numeric'],
    label: 'fields.date-of-birth-day.label'
  },
  'date-of-birth-month': {
    validate: ['required', 'numeric'],
    label: 'fields.date-of-birth-month.label'
  },
  'date-of-birth-year': {
    validate: ['required', 'numeric'],
    label: 'fields.date-of-birth-year.label'
  },
  nationality: {
    validate: ['required'],
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
    validate: ['required', 'email'],
    type: 'email',
    label: 'fields.email.label'
  },
  'no-email': {
    className: 'inline',
    label: 'fields.no-email.label',
    toggle: 'address-group'
  },
  phone: {
    label: 'fields.phone.label'
  },
  /* eslint no-inline-comments: 0 */
  'error-selection': {
    /*this is here so we can display an error message if no error is selected */
  },
  'first-name-error-checkbox': {
    label: 'fields.first-name-error-checkbox.label',
    toggle: 'first-name-error-group'
  },
  'first-name-error': {
    validate: ['required'],
    label: 'fields.first-name-error.label',
  },
  'last-name-error-checkbox': {
    label: 'fields.last-name-error-checkbox.label',
    toggle: 'last-name-error-group'
  },
  'last-name-error': {
    validate: ['required'],
    label: 'fields.last-name-error.label'
  },
  'date-of-birth-error-checkbox': {
    label: 'fields.date-of-birth-error-checkbox.label',
    toggle: 'date-of-birth-error-group'
  },
  'date-of-birth-error': {
    label: 'fields.date-of-birth-error.label',
    hint: 'fields.date-of-birth-error.hint'
  },
  'date-of-birth-error-day': {
    validate: ['required', 'numeric'],
    label: 'fields.date-of-birth-error-day.label',
    hint: 'fields.date-of-birth-error-day.hint'
  },
  'date-of-birth-error-month': {
    validate: ['required', 'numeric'],
    label: 'fields.date-of-birth-error-month.label',
    hint: 'fields.date-of-birth-error-month.hint'
  },
  'date-of-birth-error-year': {
    validate: ['required', 'numeric'],
    label: 'fields.date-of-birth-error-year.label',
    hint: 'fields.date-of-birth-error-year.hint'
  },
  'birth-place-error-checkbox': {
    label: 'fields.birth-place-error-checkbox.label',
    toggle: 'birth-place-error-group'
  },
  'birth-place-error': {
    validate: ['required'],
    label: 'fields.birth-place-error.label'
  },
  'gender-error-checkbox': {
    label: 'fields.gender-error-checkbox.label',
    toggle: 'gender-error-group'
  },
  'gender-error': {
    validate: ['required'],
    className: 'panel-indent block',
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
    label: 'fields.sponsor-details-error-checkbox.label',
    toggle: 'sponsor-details-error-group'
  },
  'sponsor-details-error': {
    validate: ['required'],
    label: 'fields.sponsor-details-error.label',
  },
  'nationality-error-checkbox': {
    label: 'fields.nationality-error-checkbox.label',
    toggle: 'nationality-error-group'
  },
  'nationality-error': {
    validate: ['required'],
    label: 'fields.nationality-error.label',
  },
  'signature-error-checkbox': {
    label: 'fields.signature-error-checkbox.label',
    toggle: 'signature-error-group'
  },
  'signature-error': {
    validate: ['required'],
    label: 'fields.signature-error.label',
  },
  'photograph-error-checkbox': {
    label: 'fields.photograph-error-checkbox.label',
    toggle: 'photograph-error-group'
  },
  'photograph-error': {
    validate: ['required'],
    label: 'fields.photograph-error.label',
  },
  'national-insurance-error-checkbox': {
    label: 'fields.national-insurance-error-checkbox.label',
    toggle: 'national-insurance-error-group'
  },
  'national-insurance-error': {
    validate: ['required'],
    label: 'fields.national-insurance-error.label',
  },
  'damaged-error-checkbox': {
    label: 'fields.damaged-error-checkbox.label',
    toggle: 'damaged-error-group'
  },
  'damaged-error': {
    validate: ['required'],
    label: 'fields.damaged-error.label',
  },
  'conditions-error-checkbox': {
    label: 'fields.conditions-error-checkbox.label',
    toggle: 'conditions-error-group'
  },
  'truncated': {
    validate: ['required'],
    className: 'inline',
    options: [{
      value: 'yes',
      label: 'fields.truncated.options.yes.label'
    }, {
      value: 'no',
      label: 'fields.truncated.options.no.label'
    }]
  },
  'truncation-page': {
    type: 'hidden'
  },
  'inside-uk': {
    validate: ['required'],
    className: ['inline', 'form-group'],
    options: [{
      value: 'yes',
      label: 'fields.inside-uk.options.yes.label',
    }, {
      value: 'no',
      label: 'fields.inside-uk.options.no.label',
      toggle: 'country-group'
    }]
  },
  'location-applied': {
    validate: ['required'],
    className: ['inline', 'form-group'],
    options: [{
      value: 'yes',
      label: 'fields.location-applied.options.yes.label'
    }, {
      value: 'no',
      label: 'fields.location-applied.options.no.label'
    }]
  },
  'country': {
    dependent: {
      field: 'inside-uk',
      value: 'no'
    },
    validate: ['required'],
    label: 'fields.country.label',
  },
  'date-lost': {
    legend: 'fields.date-lost.legend',
    hint: 'fields.date-lost.hint'
  },
  'date-lost-day': {
    validate: ['required', 'numeric'],
    label: 'fields.date-lost-day.label'
  },
  'date-lost-month': {
    validate: ['required', 'numeric'],
    label: 'fields.date-lost-month.label'
  },
  'date-lost-year': {
    validate: ['required', 'numeric'],
    label: 'fields.date-lost-year.label'
  },
  'org-help': {
    validate: ['required'],
    className: 'inline',
    options: [{
      value: 'yes',
      label: 'fields.org-help.options.yes.label',
      toggle: 'org-details-group'
    }, {
      value: 'no',
      label: 'fields.org-help.options.no.label'
    }]
  },
  'rep-name': {
    validate: ['required'],
    label: 'fields.rep-name.label',
    dependent: {
      field: 'org-help',
      value: 'yes'
    },
  },
  'org-type': {
    validate: ['required'],
    dependent: {
      field: 'org-help',
      value: 'yes'
    },
    options: [{
      value: 'pbs',
      label: 'fields.org-type.options.pbs.label'
    }, {
      value: 'legal',
      label: 'fields.org-type.options.legal.label'
    }, {
      value: 'relative',
      label: 'fields.org-type.options.relative.label'
    }, {
      value: 'support',
      label: 'fields.org-type.options.support.label'
    }]
  },
};
