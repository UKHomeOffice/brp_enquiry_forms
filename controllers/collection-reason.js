'use strict';

var util = require('util');
var _ = require('underscore');
var Controller = require('../lib/base-controller');

var CollectionReason = function CollectionReason() {
  Controller.apply(this, arguments);
};

util.inherits(CollectionReason, Controller);

function getWhereValue(req) {
  if (req.form.values['collection-where-radio'] === 'post-office') {
    return {
      'post-office': true
    };
  }
  if (req.form.values['collection-where-radio'] === 'sponsor') {
    return {
      'sponsor': true
    };
  }
}

CollectionReason.prototype.locals = function ccollectionReasonLocals(req, res) {
  var locals = Controller.prototype.locals.apply(this, arguments);

  return _.extend({}, locals, {
    baseUrl: req.baseUrl,
    nextPage: this.getNextStep(req, res),
    collectionWhere: getWhereValue(req)
  });
};

module.exports = CollectionReason;
