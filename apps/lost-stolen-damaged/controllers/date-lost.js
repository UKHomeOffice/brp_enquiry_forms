'use strict';

var util = require('util');
var DateController = require('hof').controllers.date;

var DateLostController = function DateLostController() {
  this.dateKey = 'date-lost';
  DateController.apply(this, arguments);
};

util.inherits(DateLostController, DateController);

module.exports = DateLostController;
