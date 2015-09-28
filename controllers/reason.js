'use strict';

var util = require('util');
var Controller = require('../lib/base-controller');

var ReasonController = function ReasonController() {
  Controller.apply(this, arguments);
};

util.inherits(ReasonController, Controller);

ReasonController.prototype.saveValues = function saveValues(req) {
  if (req.form.values['someone-else-reason-radio'] === 'other') {
    this.options.next = '/exit-not-eligible';
  }

  Controller.prototype.saveValues.apply(this, arguments);
};

module.exports = ReasonController;
