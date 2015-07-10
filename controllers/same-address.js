'use strict';

var util = require('util');
var Controller = require('hmpo-form-wizard').Controller;
var debug = require('debug');

var SameAddress = function SameAddress() {
  Controller.apply(this, arguments);
};

util.inherits(SameAddress, Controller);

function addressMatch(form) {
  return form && form.values && form.values['address-match'] === 'yes';
}

SameAddress.prototype.validateField = function validateField(key, req) {
  debug('Validating field %s', key);

  if (addressMatch(req.form)) {
    if (key !== 'address-match') {
      return undefined;
    }
  }
  return Controller.prototype.validateField.apply(this, arguments);
};

module.exports = SameAddress;
