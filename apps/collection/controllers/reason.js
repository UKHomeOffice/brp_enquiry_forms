'use strict';

var util = require('util');
var _ = require('underscore');
var Controller = require('../../../lib/base-controller');

var CollectionReason = function CollectionReason() {
  Controller.apply(this, arguments);
};

util.inherits(CollectionReason, Controller);

function getPlace(req) {
  var places = [
    'Post office',
    'Sponsor'
  ];
  var place = {};

  if (_.includes(places, req.form.values['collection-where-radio'])) {
    place[req.form.values['collection-where-radio'].replace(/\s+/g, '-').toLowerCase()] = true;
    return place;
  }
}

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

CollectionReason.prototype.locals = function ccollectionReasonLocals(req, res) {
  var locals = Controller.prototype.locals.apply(this, arguments);
  return _.extend({}, locals, {
    baseUrl: req.baseUrl,
    nextPage: this.getNextStep(req, res),
    where: getPlace(req),
    reason: getReason(req)
  });
};

module.exports = CollectionReason;
