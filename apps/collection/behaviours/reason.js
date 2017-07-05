'use strict';

const _ = require('underscore');

function getPlace(req) {
  const places = [
    'Post Office',
    'Sponsor'
  ];
  const place = {};

  if (_.includes(places, req.form.values['collection-where-radio'])) {
    place[req.form.values['collection-where-radio'].replace(/\s+/g, '-').toLowerCase()] = true;
    return place;
  }
}

function getReason(req) {
  const reasons = [
    'which-post-office',
    'under-age',
    'non-identity',
    'others-identity',
    'passport-family',
    'passport-lost',
    'no-brp'
  ];
  const reason = {};
  if (_.includes(reasons, req.form.values['reason-radio'])) {
    reason[req.form.values['reason-radio']] = true;
    return reason;
  }
}

module.exports = superclass => class Reason extends superclass {

  locals(req, res) {
    const locals = super.locals(req, res);
    return Object.assign({}, locals, {
      where: getPlace(req),
      reason: getReason(req)
    });
  }

};
