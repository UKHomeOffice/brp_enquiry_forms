'use strict';

var util = require('util');
var _ = require('underscore');

var Controller = require('hmpo-form-wizard').Controller;
var Model = require('../models/email');

var Submit = function Submit() {
  Controller.apply(this, arguments);
};

var serviceMap = {
  '/not-arrived/check-details': {
    template: 'delivery',
    subject: 'Form submitted: Your BRP hasn\'t arrived'
  },
  '/correct-mistakes/check-details': {
    template: 'error',
    subject: 'Form submitted: Report a problem with your new BRP'
  },
  '/lost-stolen-damaged/check-details': {
    template: 'lost-or-stolen',
    subject: 'Form submitted: Report a lost or stolen BRP'
  }
};

util.inherits(Submit, Controller);

Submit.prototype.saveValues = function saveValues(req, res, callback) {
  var data = _.pick(req.sessionModel.toJSON(), _.identity);
  var model = new Model(data);

  if (serviceMap[req.originalUrl]) {
    model.set('template', serviceMap[req.originalUrl].template);
    model.set('subject', serviceMap[req.originalUrl].subject);
  } else {
    throw new Error('no service found');
  }

  model.save(callback);
};

module.exports = Submit;
