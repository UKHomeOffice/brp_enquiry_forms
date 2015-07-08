'use strict';

var util = require('util');
var Controller = require('hmpo-form-wizard').Controller;
var ErrorClass = require('hmpo-form-wizard').Error;
var i18n = require('i18n-future')();
var debug = require('debug')('controllers:letter-received');

var Received = function Received() {
  ErrorClass.prototype.translate = i18n.translate.bind(i18n);
  Controller.apply(this, arguments);
};

util.inherits(Received, Controller);

function deleteDateErrors(err) {
  delete err['delivery-date-day'];
  delete err['delivery-date-month'];
  delete err['delivery-date-year'];
  delete err['delivery-date'];
}

function notReceived(form) {
  return form && form.values.received !== 'yes';
}

function isDateError(err) {
  return err['delivery-date-day'] || err['delivery-date-month'] || err['delivery-date-year'];
}

function errorType(err) {
  var result = 'numeric';
  Object.keys(err).forEach(function eachError(value) {
    if (err[value].type === 'required') {
      result = 'required';
    }
  });
  return result;
}

Received.prototype.setErrors = function setErrors(err, req) {
  debug('Setting errors with %o', err);

  if (err && notReceived(req.form)) {
    deleteDateErrors(err);
  }

  if (err && isDateError(err)) {
    err['delivery-date'] = new ErrorClass('delivery-date', {
      key: 'delivery-date',
      type: errorType(err),
      redirect: undefined
    });
  }

  Controller.prototype.setErrors.apply(this, arguments);
};

Received.prototype.validateField = function validateField(key, req) {
  debug('Validating field %s', key);

  if (notReceived(req.form)) {
    if (key.indexOf('delivery-date') !== -1) {
      return undefined;
    }
  }
  return Controller.prototype.validateField.apply(this, arguments);
};

module.exports = Received;
