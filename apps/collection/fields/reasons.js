'use strict';

module.exports = {
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
  }
};
