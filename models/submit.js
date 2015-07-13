'use strict';

var util = require('util');
var emailService = require('../services/email');
var Model = require('hmpo-model');

function SubmitModel() {
  Model.apply(this, arguments);
}

util.inherits(SubmitModel, Model);

SubmitModel.prototype.save = function save(callback) {
  emailService.send({
    to: this.get('email'),
    subject: this.get('subject'),
    text: JSON.stringify(this.toJSON())
  }, callback);
};

module.exports = SubmitModel;
