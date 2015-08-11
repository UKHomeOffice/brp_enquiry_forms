'use strict';

var ErrorClass = require('hmpo-form-wizard').Error;
var util = require('util');

var BaseError = function BaseError() {
  ErrorClass.apply(this, arguments);
};

util.inherits(BaseError, ErrorClass);

module.exports = BaseError;
