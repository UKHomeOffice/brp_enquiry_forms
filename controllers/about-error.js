'use strict';

var util = require('util');
var Controller = require('hmpo-form-wizard').Controller;
var moment = require('moment');

var AboutError = function AboutError() {
  Controller.apply(this, arguments);
};

util.inherits(AboutError, Controller);

AboutError.prototype.saveValues = function saveValues(req) {
  if (req.form.values['date-of-birth-error-day']) {
    var day = req.form.values['date-of-birth-error-day'];
    var month = req.form.values['date-of-birth-error-month'];
    var year = req.form.values['date-of-birth-error-year'];
    var formattedDate = moment([year, month, day]);

    req.form.values['date-of-birth-error-formatted'] = formattedDate.format('D MMMM YYYY');
  }

  Controller.prototype.saveValues.apply(this, arguments);
};

module.exports = AboutError;
