'use strict';

var util = require('util');
var _ = require('underscore');

var BaseController = require('../../../lib/base-controller');
var EmailModel = require('../../../models/email');

var ConfirmController = function ConfirmController() {
  BaseController.apply(this, arguments);
};

util.inherits(ConfirmController, BaseController);

ConfirmController.prototype.saveValues = function saveValues(req, res, callback) {

  BaseController.prototype.saveValues.call(this, req, res, function saveModel() {
    var data = _.pick(req.sessionModel.toJSON(), _.identity);
    var keys = _.keys(data);

    _.each(keys, function updateKeys(key) {
      var keyParts = key.match(/(someone-else|change-person)(.*)/);
      if (keyParts) {
        // copy either someone-else or change-person to a single key for emails
        data['changed-person' + keyParts[2]] = data[key];
      }
    });

    var model = new EmailModel(data);

    model.set('template', 'someone-else');
    model.set('subject', 'Form submitted: Report someone else collecting your BRP');

    model.save(callback);
  });

};

module.exports = ConfirmController;
