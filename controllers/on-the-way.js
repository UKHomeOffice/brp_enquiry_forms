'use strict';

var util = require('util');
var Controller = require('../lib/base-controller');

var OnTheWayController = function OnTheWayController() {
  Controller.apply(this, arguments);
};

util.inherits(OnTheWayController, Controller);

function weekDayRange(req) {
  return req.sessionModel.get('week-day-range');
}

OnTheWayController.prototype.locals = function onTheWayLocals(req, res) {
  return {
    baseUrl: req.baseUrl,
    nextPage: this.getNextStep(req, res),
    weekDayRange: weekDayRange(req)
  };
};

module.exports = OnTheWayController;
