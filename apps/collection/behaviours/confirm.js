/* eslint-disable consistent-return,  max-len  */
'use strict';

const NOMINATED_BRP_DETAILS_SECTION = 'Details of the person who attempted to collect your BRP';

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
    if (locals.route === 'confirm') {
      locals.rows = locals.rows.map(row => {
        if (req.sessionModel.get('nominated-fullname') && row.section === NOMINATED_BRP_DETAILS_SECTION) {
          row.section = `${req.sessionModel.get('nominated-fullname')}\n\n${NOMINATED_BRP_DETAILS_SECTION}`;
          return row;
        }
        return row;
      });
    }
    return Object.assign({}, locals, {
      reason
    });
  }
};
