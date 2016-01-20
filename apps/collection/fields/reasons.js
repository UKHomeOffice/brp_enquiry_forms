'use strict';

module.exports = {
  'reason-radio': {
    validate: ['required'],
    options: [{
      value: 'which-post-office',
      label: 'fields.reason-radio.which-post-office.label',
      toggle: 'reason-which-post-office-group',
    }, {
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
      value: 'no-brp',
      label: 'fields.reason-radio.reason-no-brp.label'
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
  }
};
