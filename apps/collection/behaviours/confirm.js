'use strict';

var _ = require('underscore');

function getReason(req) {
  var reasons = [
    'which-post-office',
    'under-age',
    'non-identity',
    'others-identity',
    'passport-family',
    'passport-lost',
    'no-brp',
    'other'
  ];
  var reason = {};

  if (_.includes(reasons, req.form.values['reason-radio'])) {
    reason[req.form.values['reason-radio']] = true;
    return reason;
  }
}

module.exports = superclass => class Confirm extends superclass {

  locals(req, res) {
    var locals = super.locals(req, res);
    const reason = getReason(req);
    req.sessionModel.set(reason);
    return Object.assign({}, locals, {
      reason
    });
  }

};
