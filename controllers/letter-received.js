'use strict';

var util = require('util');
var Controller = require('hmpo-form-wizard').Controller;
var DateController = require('../lib/date-controller');
var debug = require('debug')('controllers/letter-recieved');

var LetterRecievedController = function LetterRecievedController() {
  this.dateKey = 'delivery-date';
  DateController.apply(this, arguments);
};

util.inherits(LetterRecievedController, DateController);

function checkReceived(form, value) {
  return form && form.values && form.values.received === value;
}

function hasDateKey(key) {
  return key.indexOf(this.dateKey) !== -1;
}

LetterRecievedController.prototype.saveValues = function saveValues(req, res) {
  debug('Check is letter has been received');

  if (checkReceived(req.form, 'no')) {
    res.redirect('letter-not-received');
  } else {
    Controller.prototype.saveValues.apply(this, arguments);
  }
};

LetterRecievedController.prototype.validateField = function validateField(key, req) {
  debug('Validating field %s', key);

  if (req.form.values['no-letter'] === 'true') {
    return undefined;
  }
  if (checkReceived(req.form, 'no')) {
    return undefined;
  }
  if (checkReceived(req.form, '') && hasDateKey.call(this, key)) {
    return undefined;
  }

  return DateController.prototype.validateField.apply(this, arguments);
};

module.exports = LetterRecievedController;
