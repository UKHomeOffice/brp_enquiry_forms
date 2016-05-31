'use strict';

var util = require('util');
var _ = require('underscore');
var BaseController = require('hof').controllers.base;

var ContactDetailsController = function ContactDetailsController() {
  BaseController.apply(this, arguments);
};

util.inherits(ContactDetailsController, BaseController);

ContactDetailsController.prototype.locals = function contactDetailsLocals(req) {
  var locals = BaseController.prototype.locals.apply(this, arguments);
  return (req.form.values['inside-uk'] === 'yes') ? _.extend({}, locals, {
    insideUk: true
  }) : locals;
};

module.exports = ContactDetailsController;
