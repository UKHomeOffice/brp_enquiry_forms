var aws = require('aws-sdk');
aws.config.loadFromPath('./config/aws.json');

var sesMailer = new aws.SES({apiVersion: '2010-12-01'});

module.exports = sesMailer;
