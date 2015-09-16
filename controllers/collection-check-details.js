'use strict';

var util = require('util');
var CheckDetails = require('./check-details');
var _ = require('underscore');

var CollectionCheckDetails = function CollectionCheckDetails() {
  CheckDetails.apply(this, arguments);
};

util.inherits(CollectionCheckDetails, CheckDetails);

function getReason(req) {
  if (req.form.values['reason-radio'] === 'under-age') {
    return {
      'under-age': true
    };
  }
  if (req.form.values['reason-radio'] === 'non-identity') {
    return {
      'non-identity': true
    };
  }
  if (req.form.values['reason-radio'] === 'others-identity') {
    return {
      'others-identity': true
    };
  }if (req.form.values['reason-radio'] === 'others-auth') {
    return {
      'others-auth': true
    };
  }if (req.form.values['reason-radio'] === 'passport-family') {
    return {
      'passport-family': true
    };
  }if (req.form.values['reason-radio'] === 'passport-lost') {
    return {
      'passport-lost': true
    };
  }if (req.form.values['reason-radio'] === 'passport-stamp') {
    return {
      'passport-stamp': true
    };
  }if (req.form.values['reason-radio'] === 'no-brp') {
    return {
      'no-brp': true
    };
  }if (req.form.values['reason-radio'] === 'other') {
    return {
      'other': true
    };
  }
}

CollectionCheckDetails.prototype.locals = function CollectionCheckDetailsLocals(req, res) {
  var locals = CheckDetails.prototype.locals.apply(this, arguments);
  return _.extend({}, locals, {
    baseUrl: req.baseUrl,
    nextPage: this.getNextStep(req, res),
    reason: getReason(req)
  });
};

module.exports = CollectionCheckDetails;
