'use strict';

var deliveryModel = require('hmpo-model');
var emailService = require('../lib/ses-mailer');

deliveryModel.prototype.save = function save() {
  emailService.sendEmail(
    {
      Source: this.get('sender'),
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
    },
    function processResponse(err, data) {
      if (err) {
        throw err;
      }
      return data;
    }
  );
};

module.exports = deliveryModel;

