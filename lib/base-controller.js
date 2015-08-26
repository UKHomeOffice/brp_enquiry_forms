'use strict';

var Controller = require('hmpo-form-wizard').Controller;
var util = require('util');
var _ = require('underscore');

var BaseController = function BaseController(options) {
  this.next = options.next;
  Controller.apply(this, arguments);
};

util.inherits(BaseController, Controller);

function getErrorLength() {
  var errors = this.getErrors.apply(this, arguments);
  var errorLength = Object.keys(errors).length;

  if (errorLength === 1) {
    return {
      single: true
    };
  }
  if (errorLength > 1) {
    return {
      multiple: true
    };
  }
}

BaseController.prototype.saveValues = function saveValues() {

  if (this.referrer && this.referrer.indexOf('/check-details') !== -1) {
    this.options.next = '/check-details';
  } else {
    this.options.next = this.options.next || this.next;
  }

  Controller.prototype.saveValues.apply(this, arguments);
};

BaseController.prototype.locals = function controllerLocals(req, res) {
  return {
    baseUrl: req.baseUrl,
    nextPage: this.getNextStep(req, res),
    errorLength: getErrorLength.apply(this, arguments)
  };
};

BaseController.prototype.getValues = function getValues(req, res, callback) {
  // clear the session if there's no next step or we request to clear the session
  if ((_.isUndefined(this.options.next) && this.options.clearSession !== false) || this.options.clearSession === true) {
    req.sessionModel.reset();
  }

  this.referrer = req.header('Referer');

  Controller.prototype.getValues.call(this, req, res, callback);
};

module.exports = BaseController;
