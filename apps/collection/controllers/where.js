'use strict';

var util = require('util');
var DateController = require('../../../lib/date-controller');

var CollectionDate = function CollectionDate() {
  this.dateKey = 'collection-date';
  DateController.apply(this, arguments);
};

util.inherits(CollectionDate, DateController);

CollectionDate.prototype.validateField = function validateField(keyToValidate, req) {
  return DateController.prototype.validateField.call(this, keyToValidate, req, false);
};

module.exports = CollectionDate;
