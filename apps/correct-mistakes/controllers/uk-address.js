'use strict';

var util = require('util');
var BaseController = require('../../../lib/base-controller');
var _ = require('underscore');

var UKAddressController = function UKAddressController() {
  BaseController.apply(this, arguments);
};

util.inherits(UKAddressController, BaseController);

function appliedInUk(location) {
  return location === 'yes';
}

UKAddressController.prototype.locals = function ukAddressLocals(req, res) {
  var locals = BaseController.prototype.locals.apply(this, arguments);

  return _.extend({}, locals, {
    baseUrl: req.baseUrl,
    nextPage: this.getNextStep(req, res),
    ukApplication: appliedInUk(req.form.values['location-applied'])
  });
};

module.exports = UKAddressController;
