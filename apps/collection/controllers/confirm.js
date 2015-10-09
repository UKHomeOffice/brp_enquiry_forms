'use strict';

var util = require('util');
var CheckDetails = require('../../common/controllers/confirm');
var _ = require('underscore');

var CollectionCheckDetails = function CollectionCheckDetails() {
  CheckDetails.apply(this, arguments);
};

util.inherits(CollectionCheckDetails, CheckDetails);

function getReason(req) {
  var reasons = [
    'under-age',
    'non-identity',
    'others-identity',
    'others-auth',
    'passport-family',
    'passport-lost',
    'passport-stamp',
    'no-brp',
    'other'
  ];
  var reason = {};

  if (_.includes(reasons, req.form.values['reason-radio'])) {
    reason[req.form.values['reason-radio']] = true;
    return reason;
  }
}

CollectionCheckDetails.prototype.locals = function collectionCheckDetailsLocals(req, res) {
  var locals = CheckDetails.prototype.locals.apply(this, arguments);
  req.sessionModel.set(getReason(req));

  return _.extend({}, locals, {
    baseUrl: req.baseUrl,
    nextPage: this.getNextStep(req, res),
    reason: getReason(req)
  });
};

module.exports = CollectionCheckDetails;
