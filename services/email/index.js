'use strict';

var debug = require('debug')('services/email');
var nodemailer = require('nodemailer');
var config = require('../../config');
var i18n = require('i18n-future')();
var Mustache = require('mustache');
var lookup = require('i18n-lookup')(i18n.translate.bind(i18n));
var fs = require('fs');
var path = require('path');

var htmlTemplates = {
  error: fs.readFileSync(path.resolve(__dirname, './templates/error_html.mus')).toString('utf8'),
  'lost-or-stolen': fs.readFileSync(path.resolve(__dirname, './templates/lost_or_stolen_html.mus')).toString('utf8'),
  delivery: fs.readFileSync(path.resolve(__dirname, './templates/error_html.mus')).toString('utf8')
};

var plaintextTemplates = {
  error: fs.readFileSync(path.resolve(__dirname, './templates/error_html.mus')).toString('utf8'),
  'lost-or-stolen': fs.readFileSync(path.resolve(__dirname, './templates/error_html.mus')).toString('utf8'),
  delivery: fs.readFileSync(path.resolve(__dirname, './templates/error_html.mus')).toString('utf8')
};

var transport = config.email.safeMode ?
  require('nodemailer-stub-transport') : require('nodemailer-smtp-transport');

function Emailer() {
  this.transporter = nodemailer.createTransport(transport({
    host: config.email.host,
    port: config.email.port,
    secure: false,
    auth: config.email.auth,
    ignoreTLS: false
  }));
}

Emailer.prototype.send = function send(emailConfig, callback) {
  debug('Emailing: ', emailConfig.to, 'Subject: ', emailConfig.subject);

  var templateData = {
    data: emailConfig.dataToSend,
    t: function t() {
      return function lookupTranslation(translate) {
        // for translations inside our mustache templates
        return lookup(translate);
      };
    }
  };

  this.transporter.sendMail({
    from: config.email.from,
    to: emailConfig.to,
    subject: emailConfig.subject,
    text: Mustache.render(plaintextTemplates[emailConfig.template], templateData),
    html: Mustache.render(htmlTemplates[emailConfig.template], templateData)
  }, callback);
};

module.exports = new Emailer();
