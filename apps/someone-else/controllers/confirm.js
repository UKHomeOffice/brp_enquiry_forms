'use strict';

var util = require('util');
var _ = require('underscore');

var BaseController = require('hof').controllers.base;
var EmailModel = require('../../common/models/email');

var ConfirmController = function ConfirmController() {
  BaseController.apply(this, arguments);
};

util.inherits(ConfirmController, BaseController);

ConfirmController.prototype.saveValues = function saveValues(req, res, callback) {

  BaseController.prototype.saveValues.call(this, req, res, function saveModel() {
    var model = new EmailModel(_.pick(req.sessionModel.toJSON(), _.identity));

    model.set('template', 'someone-else');
    model.set('subject', 'Form submitted: Report someone else collecting your BRP');

    model.save(callback);
  });

};

module.exports = ConfirmController;
