'use strict';

var util = require('util');
var Controller = require('hmpo-form-wizard').Controller;

var ContactDetails = function ContactDetails() {
  Controller.apply(this, arguments);
};

util.inherits(ContactDetails, Controller);

function isEmail(id) {
  return id === 'email';
}

function isAddress(id) {
  return id.indexOf('address') !== -1;
}

function checkValue(field, value) {
  return field === value;
}

ContactDetails.prototype.validateField = function validateField(key, req) {

  if (isEmail(key) && checkValue(req.form.values['no-email'], 'true')) {
    return undefined;
  }

  if (isAddress(key) && checkValue(req.form.values['no-email'], '')) {
    return undefined;
  }

  return Controller.prototype.validateField.apply(this, arguments);
};

module.exports = ContactDetails;
