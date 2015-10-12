'use strict';

var util = require('util');
var BaseController = require('../../../lib/base-controller');

var ReasonController = function ReasonController() {
  BaseController.apply(this, arguments);
};

util.inherits(ReasonController, BaseController);

ReasonController.prototype.saveValues = function saveValues(req) {
  if (req.form.values['someone-else-reason-radio'] === 'other') {
    this.options.next = '/exit-not-eligible';
  }

  BaseController.prototype.saveValues.apply(this, arguments);
};

module.exports = ReasonController;
