'use strict';

var util = require('util');
var _ = require('underscore');

var Controller = require('../lib/base-controller');
var Model = require('../models/email');

var Submit = function Submit() {
  Controller.apply(this, arguments);
};

util.inherits(Submit, Controller);

Submit.prototype.saveValues = function saveValues(req, res, callback) {

  Controller.prototype.saveValues.call(this, req, res, function saveModel() {
    var data = _.pick(req.sessionModel.toJSON(), _.identity);
    var keys = _.keys(data);

    _.each(keys, function updateKeys(key) {
      var keyParts = key.match(/(someone-else|change-person)(.*)/);
      if (keyParts) {
        // copy either someone-else or change-person to a single key for emails
        data['changed-person' + keyParts[2]] = data[key];
      }
    });

    var model = new Model(data);

    model.set('template', 'someone-else');
    model.set('subject', 'Form submitted: Report someone else collecting your BRP');

    model.save(callback);
  });

};

module.exports = Submit;
