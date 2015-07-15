'use strict';

var util = require('util');
var _ = require('underscore');

var Controller = require('hmpo-form-wizard').Controller;
var Model = require('../models/email');

var Submit = function Submit() {
  Controller.apply(this, arguments);
};

util.inherits(Submit, Controller);

Submit.prototype.saveValues = function saveValues(req, res, callback) {
  var data = _.pick(req.sessionModel.toJSON(), _.identity);
  var model = new Model(data);

  // set template
  switch (req.originalUrl) {
    case '/permit-delivery/check-details':
      model.set('template', 'permit');
      break;
    case '/permit-error/check-details':
      model.set('template', 'error');
      break;
    case '/permit-lost-or-stolen/check-details':
      model.set('template', 'lost-or-stolen');
      break;
    default:
      throw new Error('no template found');
  }

  model.save(callback);
};

module.exports = Submit;
