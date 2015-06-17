'use strict';

var deliveryModel = require('hmpo-model');
var emailService = require('../lib/ses-mailer');

deliveryModel.prototype.save = function() {
  emailService.sendEmail(
    {
      Source     : this.get('sender'),
      Destination: {ToAddresses: [this.get('recipient')]},
      Message    : {
        Subject: {
          Data: this.get('subject')
        },
        Body   : {
          Text: {
            Data: this.toString()
          }
        }
      }
    }
    , function (err, data) {
      if (err) throw err
      console.log('Email sent:');
      console.log(data);
    });
};



module.exports = deliveryModel;

