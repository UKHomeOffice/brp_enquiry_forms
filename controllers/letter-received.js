'use strict';

var util = require('util');
var Controller = require('hmpo-form-wizard').Controller;
var ErrorClass = require('hmpo-form-wizard').Error;
var i18n = require('i18n-future')();
var moment = require('moment');
var debug = require('debug')('controllers:letter-received');
var dateFormat = 'DD-MM-YYYY';

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
  return form && form.values && form.values.received !== 'yes';
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

function isDeliveryDate(key) {
  return key.indexOf('delivery-date') !== -1;
}

function isInvalidDateFormat(value) {
  return moment(value, dateFormat, true).isValid(dateFormat) === false;
}

function isFutureDate(value) {
  return moment(value, dateFormat).isAfter(moment()) === true;
}

function validateDeliveryDateField(value) {
  if (isInvalidDateFormat(value)) {
    return new ErrorClass('delivery-date', {
      key: 'delivery-date',
      type: 'format',
      redirect: undefined
    });
  }
  if (isFutureDate(value)) {
    return new ErrorClass('delivery-date', {
      key: 'delivery-date',
      type: 'future',
      redirect: undefined
    });
  }
}

Received.prototype.setErrors = function setErrors(err, req) {
  debug('Setting errors with %s', JSON.stringify(err, null, 4));

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

  if (notReceived(req.form) && isDeliveryDate(key)) {
    return undefined;
  } else if (key === 'delivery-date') {
    return validateDeliveryDateField(req.form.values['delivery-date']);
  }

  return Controller.prototype.validateField.apply(this, arguments);

};

Received.prototype.process = function process(req, res, callback) {
  debug('Processing... values %s', JSON.stringify(req.form.values, null, 4));

  var dateParts = {};

  Object.keys(req.form.values).forEach(function eachValue(id) {

    var index = id.indexOf('delivery-date-');
    var name = id.slice('delivery-date-'.length);
    var value = req.form.values[id];

    if (index !== -1 && value) {
      dateParts[name] = value;
    }
  });

  if (dateParts.day && dateParts.month && dateParts.year) {
    req.form.values['delivery-date'] = [dateParts.day, dateParts.month, dateParts.year].join('-');
  }

  callback();
};

module.exports = Received;
