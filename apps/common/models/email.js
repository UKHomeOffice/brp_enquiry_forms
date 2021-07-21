'use strict';

var emailService = require('../../../services/email');
var Model = require('hof').model;
var _ = require('underscore');

module.exports = class Email extends Model {

  save(callback) {
    // we omit keys that are not part of the session data
    emailService.send({
      template: this.get('template'),
      to: this.get('email'),
      subject: this.get('subject'),
      dataToSend: _.omit(this.toJSON(), ['steps', 'csrf-secret', 'template'])
    }, callback);
  }

};
