'use strict';

var util = require('util');
var DateController = require('../lib/date-controller');

var PersonalDetailsController = function Received() {
  this.dateKey = 'date-of-birth';
  DateController.apply(this, arguments);
};

util.inherits(PersonalDetailsController, DateController);

module.exports = PersonalDetailsController;
