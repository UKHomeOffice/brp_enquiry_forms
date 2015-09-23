'use strict';

var util = require('util');
var _ = require('underscore');
var Controller = require('../lib/base-controller');

var CollectionReason = function CollectionReason() {
  Controller.apply(this, arguments);
};

util.inherits(CollectionReason, Controller);

function getWhereValue(req) {
  if (req.form.values['collection-where-radio'] === 'Post office') {
    return {
      'post-office': true
    };
  }
  if (req.form.values['collection-where-radio'] === 'Sponsor') {
    return {
      'sponsor': true
    };
  }
}

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

CollectionReason.prototype.locals = function ccollectionReasonLocals(req, res) {
  var locals = Controller.prototype.locals.apply(this, arguments);
  return _.extend({}, locals, {
    baseUrl: req.baseUrl,
    nextPage: this.getNextStep(req, res),
    where: getWhereValue(req),
    reason: getReason(req)
  });
};

module.exports = CollectionReason;
