'use strict';

var emailService = require('../services/ses-mailer');
var Model = require('hmpo-model');

var submitModel = new Model();

submitModel.save = function save() {
  emailService.sendMail({
    Source: this.getSender('sender'),
    Destination: {ToAddresses: [this.get('recipient')]},
    Message: {
      Subject: {
        Data: this.get('subject')
      },
      Body: {
        Text: {
          Data: this.toString()
        }
      }
    }
  }, function processResponse(err, data) {
    if (err) {
      throw err;
    }
    return data;
  });
};

module.exports = submitModel;
