'use strict';

var util = require('util');
var _ = require('underscore');

var Controller = require('../lib/base-controller');
var Model = require('../models/email');

var Submit = function Submit() {
  Controller.apply(this, arguments);
};

var serviceMap = {
  '/not-arrived/check-details': function notArrived() {
    return {
      template: 'delivery',
      subject: 'Form submitted: Your BRP hasn\'t arrived'
    };
  },
  '/correct-mistakes/check-details': function correctMistakes() {
    return {
      template: 'error',
      subject: 'Form submitted: Report a problem with your new BRP'
    };
  },
  '/lost-stolen-damaged/check-details': function lostStolenDamaged(data) {
    var suffix = (data['inside-uk'] === 'yes') ? '-uk' : '-abroad';
    return {
      template: 'lost-or-stolen' + suffix,
      subject: 'Form submitted: Report a lost or stolen BRP'
    };
  }
};

util.inherits(Submit, Controller);

Submit.prototype.saveValues = function saveValues(req, res, callback) {
  var data = _.pick(req.sessionModel.toJSON(), _.identity);
  var model = new Model(data);
  var service = serviceMap[req.originalUrl] && serviceMap[req.originalUrl](data);

  if (service) {
    model.set('template', service.template);
    model.set('subject', service.subject);
  } else {
    throw new Error('no service found');
  }

  model.save(callback);
};

module.exports = Submit;
