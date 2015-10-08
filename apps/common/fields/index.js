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
  'collection-where-radio': {
    validate: ['required'],
    className: ['inline', 'form-group'],
    options: [{
      value: 'Post office',
      label: 'fields.collection-where-radio.options.post-office.label'
    }, {
      value: 'Sponsor',
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
  'arrange-collection-radio': {
    validate: ['required'],
    className: ['inline', 'form-group'],
    options: [{
      value: 'someone-else',
      label: 'fields.arrange-collection-radio.options.someone-else.label',
      toggle: 'someone-else-group'
    }, {
      value: 'change-person',
      label: 'fields.arrange-collection-radio.options.change-person.label',
      toggle: 'change-person-group'
    }, {
      value: 'cancel-request',
      label: 'fields.arrange-collection-radio.options.cancel-request.label'
    }]
  },
  'someone-else-fullname': {
    validate: ['required'],
    label: 'fields.someone-else-fullname.label',
    dependent: {
      value: 'someone-else',
      field: 'arrange-collection-radio',
    }
  },
  'someone-else-date': {
    legend: 'fields.someone-else-date.legend',
    hint: 'fields.someone-else-date.hint',
    dependent: {
      value: 'someone-else',
      field: 'arrange-collection-radio',
    }
  },
  'someone-else-date-day': {
    validate: ['required', 'numeric'],
    label: 'fields.someone-else-date-day.label',
    dependent: {
      value: 'someone-else',
      field: 'arrange-collection-radio',
    }
  },
  'someone-else-date-month': {
    validate: ['required', 'numeric'],
    label: 'fields.someone-else-date-month.label',
    dependent: {
      value: 'someone-else',
      field: 'arrange-collection-radio',
    }
  },
  'someone-else-date-year': {
    validate: ['required', 'numeric'],
    label: 'fields.someone-else-date-year.label',
    dependent: {
      value: 'someone-else',
      field: 'arrange-collection-radio',
    }
  },
  'someone-else-nationality': {
    validate: ['required'],
    label: 'fields.someone-else-nationality.label',
    dependent: {
      value: 'someone-else',
      field: 'arrange-collection-radio',
    }
  },
  'someone-else-id-number': {
    validate: ['required'],
    label: 'fields.someone-else-id-number.label',
    dependent: {
      value: 'someone-else',
      field: 'arrange-collection-radio',
    }
  },
  'someone-else-reason-radio': {
    validate: ['required'],
    options: [{
      value: 'incapable',
      label: 'fields.someone-else-reason-radio.options.incapable.label',
      toggle: 'incapable-details',
    }, {
      value: 'refugee',
      label: 'fields.someone-else-reason-radio.options.refugee.label'
    }, {
      value: 'under-age',
      label: 'fields.someone-else-reason-radio.options.under-age.label'
    }, {
      value: 'other',
      label: 'fields.someone-else-reason-radio.options.other.label'
    }]
  },
  'incapable-details': {
    validate: ['required'],
    label: 'fields.incapable-details.label',
    dependent: {
      value: 'incapable',
      field: 'someone-else-reason-radio',
    }
  },
  'change-person-fullname': {
    validate: ['required'],
    label: 'fields.change-person-fullname.label',
    dependent: {
      value: 'change-person',
      field: 'arrange-collection-radio',
    }
  },
  'change-person-date': {
    legend: 'fields.change-person-date.legend',
    hint: 'fields.change-person-date.hint',
    dependent: {
      value: 'change-person',
      field: 'arrange-collection-radio',
    }
  },
  'change-person-date-day': {
    validate: ['required', 'numeric'],
    label: 'fields.change-person-date-day.label',
    dependent: {
      value: 'change-person',
      field: 'arrange-collection-radio',
    }
  },
  'change-person-date-month': {
    validate: ['required', 'numeric'],
    label: 'fields.change-person-date-month.label',
    dependent: {
      value: 'change-person',
      field: 'arrange-collection-radio',
    }
  },
  'change-person-date-year': {
    validate: ['required', 'numeric'],
    label: 'fields.change-person-date-year.label',
    dependent: {
      value: 'change-person',
      field: 'arrange-collection-radio',
    }
  },
  'change-person-nationality': {
    validate: ['required'],
    label: 'fields.change-person-nationality.label',
    dependent: {
      value: 'change-person',
      field: 'arrange-collection-radio',
    }
  },
  'change-person-id-number': {
    validate: ['required'],
    label: 'fields.change-person-id-number.label',
    dependent: {
      value: 'change-person',
      field: 'arrange-collection-radio',
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

