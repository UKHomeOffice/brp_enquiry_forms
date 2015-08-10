'use strict';

var util = require('util');
var Controller = require('../lib/base-wizard').Controller;

var ExitTruncatedController = function ExitTruncatedController() {
  Controller.apply(this, arguments);
};

util.inherits(ExitTruncatedController, Controller);

ExitTruncatedController.prototype.getValues = function getValues(req, res, callback) {
  req.sessionModel.reset();
  callback(null);
};

module.exports = ExitTruncatedController;
