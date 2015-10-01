'use strict';

var util = require('util');
var Controller = require('../lib/base-controller');

var StartController = function StartController() {
  Controller.apply(this, arguments);
};

util.inherits(StartController, Controller);

StartController.prototype.getValues = function getValues(req, res, callback) {
  req.sessionModel.reset();
  callback();
};

StartController.prototype.render = function render(req, res) {
  res.redirect(req.baseUrl + this.options.redirectTo);
};

module.exports = StartController;
