'use strict';

var util = require('util');
var ParentController = require('../../common/controllers/confirm');
var _ = require('underscore');

var ConfirmController = function ConfirmController() {
  ParentController.apply(this, arguments);
};

util.inherits(ConfirmController, ParentController);

function getReason(req) {
  var reasons = [
    'under-age',
    'non-identity',
    'others-identity',
    'others-auth',
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

ConfirmController.prototype.locals = function confirmLocals(req, res) {
  var locals = ParentController.prototype.locals.apply(this, arguments);
  req.sessionModel.set(getReason(req));

  return _.extend({}, locals, {
    baseUrl: req.baseUrl,
    nextPage: this.getNextStep(req, res),
    reason: getReason(req)
  });
};

module.exports = ConfirmController;
