'use strict';

var util = require('util');
var DateController = require('hof').controllers.date;

var NominatedPersonController = function NominatedPersonController() {
  this.dateKey = 'nominated-date';
  DateController.apply(this, arguments);
};

util.inherits(NominatedPersonController, DateController);

module.exports = NominatedPersonController;
