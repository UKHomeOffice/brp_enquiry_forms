'use strict';

module.exports = {
  'reason-radio': {
    validate: ['required'],
    options: [{
      value: 'which-post-office',
      toggle: 'reason-which-post-office-group',
    }, {
      value: 'under-age',
      toggle: 'reason-under-age-group',
    }, {
      value: 'non-identity',
      toggle: 'reason-non-identity-group',
    }, {
      value: 'others-identity',
      toggle: 'reason-others-identity-group',
    }, {
      value: 'passport-family',
      toggle: 'reason-reason-passport-family-group',
    },
    {
      value: 'passport-lost',
      toggle: 'reason-reason-passport-lost-group',
    },
    {
      value: 'no-brp'
    }]
  },
  'reason-under-age': {
    dependent: {
      value: 'under-age',
      field: 'reason-radio'
    }
  },
  'reason-non-identity': {
    dependent: {
      value: 'non-identity',
      field: 'reason-radio'
    }
  },
  'reason-others-identity': {
    dependent: {
      value: 'others-identity',
      field: 'reason-radio'
    }
  },
  'reason-passport-family': {
    dependent: {
      value: 'passport-family',
      field: 'reason-radio'
    }
  },
  'reason-passport-lost': {
    dependent: {
      value: 'passport-lost',
      field: 'reason-radio'
    }
  }
};
