'use strict';

var util = require('util');
var DateController = require('../../../lib/date-controller');

var DateLostController = function DateLostController() {
  this.dateKey = 'date-lost';
  DateController.apply(this, arguments);
};

util.inherits(DateLostController, DateController);

module.exports = DateLostController;
