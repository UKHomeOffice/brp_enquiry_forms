'use strict';

var util = require('util');
var Controller = require('../lib/base-controller');

var OnTheWay = function OnTheWayController() {
  Controller.apply(this, arguments);
};

util.inherits(OnTheWay, Controller);

function weekDayRange(req) {
  return req.sessionModel.get('week-day-range');
}

OnTheWay.prototype.locals = function onTheWayLocals(req, res) {
  return {
    baseUrl: req.baseUrl,
    nextPage: this.getNextStep(req, res),
    weekDayRange: weekDayRange(req)
  };
};

module.exports = OnTheWay;
