'use strict';

var util = require('util');
var Controller = require('../lib/base-controller');

var StartController = function StartController() {
  Controller.apply(this, arguments);
};

util.inherits(StartController, Controller);

StartController.prototype.getValues = function getValues(req) {
  req.sessionModel.reset();
  Controller.prototype.successHandler.apply(this, arguments);
};

module.exports = StartController;
