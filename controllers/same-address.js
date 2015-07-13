'use strict';

var util = require('util');
var Controller = require('hmpo-form-wizard').Controller;
var debug = require('debug');

var SameAddressController = function SameAddressController() {
  Controller.apply(this, arguments);
};

util.inherits(SameAddressController, Controller);

function checkValue(value, test) {
  return value === test;
}

function isAddressMatch(key) {
  return key === 'address-match';
}

SameAddressController.prototype.validateField = function validateField(key, req) {
  debug('Validating field %s', key);

  if (isAddressMatch(key) && checkValue(req.form.values['address-match'], 'yes')) {
    return undefined;
  }

  if (isAddressMatch(key) && checkValue(req.form.values['address-match'], '')) {
    return Controller.prototype.validateField.apply(this, arguments);
  }

  if (checkValue(req.form.values['address-match'], 'no')) {
    return Controller.prototype.validateField.apply(this, arguments);
  }

};

module.exports = SameAddressController;
