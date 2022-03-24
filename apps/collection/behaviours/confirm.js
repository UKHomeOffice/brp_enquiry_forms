/* eslint-disable consistent-return */
'use strict';

function getReason(req) {
  const reasons = [
    'which-post-office',
    'under-age',
    'non-identity',
    'others-identity',
    'passport-family',
    'passport-lost',
    'no-brp',
    'other'
  ];
  const reason = {};
  const reasonType = req.form.values['reason-radio'];

  reasons.forEach(r => {
    if (r === reasonType) {
      reason[reasonType] = req.sessionModel.get(reasonType);
      return;
    }
    req.sessionModel.unset(r);
    delete req.form.values[r];
  });
  return reason;
}

module.exports = superclass => class Confirm extends superclass {
  locals(req, res) {
    const locals = super.locals(req, res);
    const reason = getReason(req);
    req.sessionModel.set(reason);
    return Object.assign({}, locals, {
      reason
    });
  }
};
