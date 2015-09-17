'use strict';

var util = require('util');
var DateController = require('../lib/date-controller');

var SomeoneElseController = function SomeoneElseController() {
  DateController.apply(this, arguments);
};

util.inherits(SomeoneElseController, DateController);

SomeoneElseController.prototype.validateField = function validateField(key, req) {
  if (req.form.values['arrange-collection-radio'] === 'someone-else') {
    this.dateKey = 'someone-else-date';
  }

  if (req.form.values['arrange-collection-radio'] === 'change-person') {
    this.dateKey = 'change-person-date';
  }

  if (req.form.values['arrange-collection-radio'] === 'cancel-request') {
    return undefined;
  }

  return DateController.prototype.validateField.apply(this, arguments);
};

module.exports = SomeoneElseController;
