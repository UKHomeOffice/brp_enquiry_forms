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
    hint: 'fields.dalivery-date.hint',
    dependent: {
      value: 'yes',
      field: 'received',
    }
  },
  'delivery-date-day': {

    label: 'fields.delivery-date-day.label',
    dependent: {
      value: 'yes',
      field: 'received',
    }
  },
  'delivery-date-month': {
    validate: ['required', 'numeric'],
    label: 'fields.delivery-date-month.label',
    dependent: {
      value: 'yes',
      field: 'received',
    }
  },
  'delivery-date-year': {
    validate: ['required', 'numeric'],
    label: 'fields.delivery-date-year.label',
    dependent: {
      value: 'yes',
      field: 'received',
    }
  },
  'collection-where-radio': {
    validate: ['required'],
    className: ['inline', 'form-group'],
    options: [{
      value: 'post-office',
      label: 'fields.collection-where-radio.options.post-office.label'
    }, {
      value: 'sponsor',
      label: 'fields.collection-where-radio.options.sponsor.label'
    }]
  },
  'collection-date': {
    legend: 'fields.collection-date.legend',
    hint: 'fields.dalivery-date.hint'
  },
  'collection-date-day': {
    validate: ['numeric'],
    label: 'fields.collection-date-day.label'
  },
  'collection-date-month': {
    validate: ['numeric'],
    label: 'fields.collection-date-month.label'
  },
  'collection-date-year': {
    validate: ['numeric'],
    label: 'fields.collection-date-year.label'
  },
  'nominated-fullname': {
    validate: ['required']
  },
  'nominated-nationality': {
    validate: ['required']
  },
  'nominated-id-number': {
    validate: ['required']
  },
  'nominated-date': {
    legend: 'fields.nominated-date.legend',
    hint: 'fields.dalivery-date.hint'
  },
  'nominated-date-day': {
    validate: ['required', 'numeric'],
    label: 'fields.nominated-date-day.label'
  },
  'nominated-date-month': {
    validate: ['required', 'numeric'],
    label: 'fields.nominated-date-month.label'
  },
  'nominated-date-year': {
    validate: ['required', 'numeric'],
    label: 'fields.nominated-date-year.label'
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
    label: 'fields.address-street.label',
    dependent: {
      value: 'no',
      field: 'address-match',
    }
  },
  'address-town': {
    validate: ['required'],
    label: 'fields.address-town.label',
    dependent: {
      value: 'no',
      field: 'address-match',
    }
  },
  'address-county': {
    label: 'fields.address-county.label',
    dependent: {
      value: 'no',
      field: 'address-match',
    }
  },
  'address-postcode': {
    validate: ['required'],
    label: 'fields.address-postcode.label',
    dependent: {
      value: 'no',
      field: 'address-match',
    }
  },
  'contact-address-street': {
    validate: ['required'],
    label: 'fields.address-street.label',
    dependent: {
      value: 'true',
      field: 'no-email'
    }
  },
  'contact-address-town': {
    validate: ['required'],
    label: 'fields.address-town.label',
    dependent: {
      value: 'true',
      field: 'no-email'
    }
  },
  'contact-address-county': {
    label: 'fields.address-county.label',
  },
  'contact-address-postcode': {
    validate: ['required'],
    label: 'fields.address-postcode.label',
    dependent: {
      value: 'true',
      field: 'no-email'
    }
  },
  'uk-address-radio': {
    validate: ['required'],
    className: ['inline', 'form-group'],
    options: [{
      value: 'yes',
      label: 'fields.uk-address-radio.options.yes.label',
      toggle: 'uk-address-fieldset'
    }, {
      value: 'no',
      label: 'fields.uk-address-radio.options.no.label'
    }]
  },
  'uk-address-street': {
    validate: ['required'],
    label: 'fields.address-street.label',
    dependent: {
      value: 'yes',
      field: 'uk-address-radio',
    }
  },
  'uk-address-town': {
    validate: ['required'],
    label: 'fields.address-town.label',
    dependent: {
      value: 'yes',
      field: 'uk-address-radio',
    }
  },
  'uk-address-county': {
    label: 'fields.address-county.label',
    dependent: {
      value: 'yes',
      field: 'uk-address-radio',
    }
  },
  'uk-address-postcode': {
    validate: ['required'],
    label: 'fields.address-postcode.label',
    dependent: {
      value: 'yes',
      field: 'uk-address-radio',
    }
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
    label: 'fields.email.label',
    dependent: {
      value: '',
      field: 'no-email'
    }
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
    dependent: {
      field: 'first-name-error-checkbox',
      value: 'true'
    }
  },
  'last-name-error-checkbox': {
    label: 'fields.last-name-error-checkbox.label',
    toggle: 'last-name-error-group'
  },
  'last-name-error': {
    validate: ['required'],
    label: 'fields.last-name-error.label',
    dependent: {
      field: 'last-name-error-checkbox',
      value: 'true'
    }
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
    label: 'fields.birth-place-error.label',
    dependent: {
      field: 'birth-place-error-checkbox',
      value: 'true'
    }
  },
  'gender-error-checkbox': {
    label: 'fields.gender-error-checkbox.label',
    toggle: 'gender-error-group'
  },
  'gender-error': {
    validate: ['required'],
    className: 'panel-indent block',
    dependent: {
      field: 'gender-error-checkbox',
      value: 'true'
    },
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
    dependent: {
      field: 'sponsor-details-error-checkbox',
      value: 'true'
    }
  },
  'nationality-error-checkbox': {
    label: 'fields.nationality-error-checkbox.label',
    toggle: 'nationality-error-group'
  },
  'nationality-error': {
    validate: ['required'],
    label: 'fields.nationality-error.label',
    dependent: {
      field: 'nationality-error-checkbox',
      value: 'true'
    }
  },
  'signature-error-checkbox': {
    label: 'fields.signature-error-checkbox.label',
    toggle: 'signature-error-group'
  },
  'signature-error': {
    validate: ['required'],
    label: 'fields.signature-error.label',
    dependent: {
      field: 'signature-error-checkbox',
      value: 'true'
    }
  },
  'photograph-error-checkbox': {
    label: 'fields.photograph-error-checkbox.label',
    toggle: 'photograph-error-group'
  },
  'photograph-error': {
    validate: ['required'],
    label: 'fields.photograph-error.label',
    dependent: {
      field: 'photograph-error-checkbox',
      value: 'true'
    }
  },
  'national-insurance-error-checkbox': {
    label: 'fields.national-insurance-error-checkbox.label',
    toggle: 'national-insurance-error-group'
  },
  'national-insurance-error': {
    validate: ['required'],
    label: 'fields.national-insurance-error.label',
    dependent: {
      field: 'national-insurance-error-checkbox',
      value: 'true'
    }
  },
  'damaged-error-checkbox': {
    label: 'fields.damaged-error-checkbox.label',
    toggle: 'damaged-error-group'
  },
  'damaged-error': {
    validate: ['required'],
    label: 'fields.damaged-error.label',
    dependent: {
      field: 'damaged-error-checkbox',
      value: 'true'
    }
  },
  'conditions-error-checkbox': {
    label: 'fields.conditions-error-checkbox.label',
    toggle: 'conditions-error-group'
  },
  'conditions-error': {
    validate: ['required'],
    label: 'fields.conditions-error.label',
    dependent: {
      field: 'conditions-error-checkbox',
      value: 'true'
    }
  },
  'reason-radio': {
    validate: ['required'],
    options: [{
      value: 'under-age',
      label: 'fields.reason-radio.under-age.label',
      toggle: 'reason-under-age-group',
    }, {
      value: 'non-identity',
      label: 'fields.reason-radio.non-identity.label',
      toggle: 'reason-non-identity-group',
    }, {
      value: 'others-identity',
      label: 'fields.reason-radio.others-identity.label',
      toggle: 'reason-others-identity-group',
    }, {
      value: 'others-auth',
      label: 'fields.reason-radio.others-auth.label',
      toggle: 'reason-others-auth-group',
    }, {
      value: 'passport-family',
      label: 'fields.reason-radio.reason-passport-family.label',
      toggle: 'reason-reason-passport-family-group',
    },
    {
      value: 'passport-lost',
      label: 'fields.reason-radio.reason-passport-lost.label',
      toggle: 'reason-reason-passport-lost-group',
    },
    {
      value: 'passport-stamp',
      label: 'fields.reason-radio.reason-passport-stamp.label',
      toggle: 'reason-reason-passport-stamp-group',
    },
    {
      value: 'no-brp',
      label: 'fields.reason-radio.reason-no-brp.label',
      toggle: 'reason-reason-no-brp-group',
    },
    {
      value: 'other',
      label: 'fields.reason-radio.reason-other.label',
      toggle: 'reason-reason-other-group',
    }]
  },
  'reason-under-age': {
    label: 'fields.reason-under-age.label'
  },
  'reason-non-identity': {
    label: 'fields.reason-non-identity.label'
  },
  'reason-others-identity': {
    label: 'fields.reason-others-identity.label'
  },
  'reason-others-auth': {
    label: 'fields.reason-others-auth.label'
  },
  'reason-passport-family': {
    label: 'fields.reason-passport-family.label'
  },
  'reason-passport-lost': {
    label: 'fields.reason-passport-lost.label'
  },
  'reason-passport-stamp': {
    label: 'fields.reason-passport-stamp.label'
  },
  'reason-no-brp': {
    label: 'fields.reason-no-brp.label'
  },
  'reason-other': {
    label: 'fields.reason-other.label'
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
