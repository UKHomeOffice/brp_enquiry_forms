/* eslint-disable no-undef */
'use strict';

const util = require('util');
const BaseController = require('hof').controller;

const StartController = () => {
  BaseController.apply(this, arguments);
};

util.inherits(StartController, BaseController);

StartController.prototype.getValues = req => {
  req.sessionModel.reset();
  BaseController.prototype.successHandler.apply(this, arguments);
};

module.exports = StartController;
