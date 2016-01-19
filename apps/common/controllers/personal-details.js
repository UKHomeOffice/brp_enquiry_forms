'use strict';

var util = require('util');
var DateController = require('hof').controllers.date;

var PersonalDetailsController = function PersonalDetailsController() {
  this.dateKey = 'date-of-birth';
  DateController.apply(this, arguments);
};

util.inherits(PersonalDetailsController, DateController);

module.exports = PersonalDetailsController;
