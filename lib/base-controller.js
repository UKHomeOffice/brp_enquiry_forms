'use strict';

var Controller = require('hmpo-form-wizard').Controller;

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

Controller.prototype.locals = function controllerLocals(req, res) {
  return {
    baseUrl: req.baseUrl,
    nextPage: this.getNextStep(req, res),
    errorLength: getErrorLength.apply(this, arguments)
  };
};

module.exports = Controller;
