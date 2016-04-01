'use strict';

var util = require('util');
var Parent = require('../../../lib/date-controller');
var ErrorClass = require('hof').controllers.error;
var moment = require('moment');

var PersonalDetailsController = function PersonalDetailsController() {
  this.dateKey = 'date-of-birth';
  Parent.apply(this, arguments);
};

util.inherits(PersonalDetailsController, Parent);

var dateFormat = 'DD-MM-YYYY';

function isDateKey(key) {
  return key === this.dateKey;
}

function declaredUnder18(req) {
  return req.sessionModel.get('reason-radio') === 'under-age';
}

function isOver18(value) {
  return moment(value, dateFormat).isBefore(moment().subtract({years: 18}));
}

PersonalDetailsController.prototype.validateField = function validateField(keyToValidate, req, required) {

  var error;

  if (typeof required !== 'boolean') {
    required = true;
  }

  if (required &&
      isDateKey.call(this, keyToValidate) &&
      declaredUnder18(req) &&
      isOver18(req.form.values[keyToValidate])) {

    error = new ErrorClass(this.dateKey, {
      key: this.dateKey,
      type: 'under-18',
      redirect: undefined
    });
  }

  return error ? error : Parent.prototype.validateField.apply(this, arguments);

};

module.exports = PersonalDetailsController;
