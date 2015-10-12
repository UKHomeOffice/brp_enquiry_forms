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
    validate: ['required', 'numeric'],
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
    label: 'fields.reason-under-age.label',
    dependent: {
      value: 'under-age',
      field: 'reason-radio'
    }
  },
  'reason-non-identity': {
    label: 'fields.reason-non-identity.label',
    dependent: {
      value: 'non-identity',
      field: 'reason-radio'
    }
  },
  'reason-others-identity': {
    label: 'fields.reason-others-identity.label',
    dependent: {
      value: 'others-identity',
      field: 'reason-radio'
    }
  },
  'reason-others-auth': {
    label: 'fields.reason-others-auth.label',
    dependent: {
      value: 'others-auth',
      field: 'reason-radio'
    }
  },
  'reason-passport-family': {
    label: 'fields.reason-passport-family.label',
    dependent: {
      value: 'passport-family',
      field: 'reason-radio'
    }
  },
  'reason-passport-lost': {
    label: 'fields.reason-passport-lost.label',
    dependent: {
      value: 'passport-lost',
      field: 'reason-radio'
    }
  },
  'reason-passport-stamp': {
    label: 'fields.reason-passport-stamp.label',
    dependent: {
      value: 'passport-stamp',
      field: 'reason-radio'
    }
  },
  'reason-no-brp': {
    label: 'fields.reason-no-brp.label',
    dependent: {
      value: 'no-brp',
      field: 'reason-radio'
    }
  },
  'reason-other': {
    label: 'fields.reason-other.label',
    dependent: {
      value: 'other',
      field: 'reason-radio'
    }
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

