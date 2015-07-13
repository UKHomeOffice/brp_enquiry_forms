'use strict';

var util = require('util');
var DateController = require('../lib/date-controller');
var debug = require('debug')('controllers/letter-recieved');

var LetterRecievedController = function LetterRecievedController() {
  this.dateKey = 'delivery-date';
  DateController.apply(this, arguments);
};

util.inherits(LetterRecievedController, DateController);

function checkRecieved(form, value) {
  return form && form.values && form.values.received === value;
}

function hasDateKey(key) {
  return key.indexOf(this.dateKey) !== -1;
}

LetterRecievedController.prototype.validateField = function validateField(key, req) {
  debug('Validating field %s', key);

  if (req.form.values['no-letter'] === 'true') {
    return undefined;
  }
  if (checkRecieved(req.form, 'no')) {
    return undefined;
  }
  if (checkRecieved(req.form, '') && hasDateKey.call(this, key)) {
    return undefined;
  }
  if (key === this.dateKey) {
    return DateController.prototype.validateField.apply(this, arguments);
  }

  return DateController.prototype.validateField.apply(this, arguments);
};

module.exports = LetterRecievedController;
