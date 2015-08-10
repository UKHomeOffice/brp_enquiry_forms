'use strict';

var util = require('util');
var DateController = require('../lib/date-controller');
var Controller = require('../lib/base-controller');

var PersonalDetailsController = function PersonalDetailsController() {
  this.dateKey = 'date-of-birth';
  DateController.apply(this, arguments);
};

util.inherits(PersonalDetailsController, DateController);

PersonalDetailsController.prototype.saveValues = function saveValues(req) {
  DateController.prototype.format.call(this, req);
  Controller.prototype.saveValues.apply(this, arguments);
};

module.exports = PersonalDetailsController;
