'use strict';

var debug = require('debug')('services/email');
var nodemailer = require('nodemailer');
var config = require('../../config');
var i18n = require('i18n-future')();
var Mustache = require('mustache');
var lookup = require('i18n-lookup')(i18n.translate.bind(i18n));
var fs = require('fs');
var path = require('path');

var customerHtmlTemplates = {
  error: fs.readFileSync(
    path.resolve(__dirname, './templates/customer/html/error.mus')).toString('utf8'),
  'lost-or-stolen': fs.readFileSync(
    path.resolve(__dirname, './templates/customer/html/lost_or_stolen.mus')).toString('utf8'),
  delivery: fs.readFileSync(
    path.resolve(__dirname, './templates/customer/html/delivery.mus')).toString('utf8')
};

var customerPlainTextTemplates = {
  error: fs.readFileSync(
    path.resolve(__dirname, './templates/customer/plain/error.mus')).toString('utf8'),
  'lost-or-stolen': fs.readFileSync(
    path.resolve(__dirname, './templates/customer/plain/lost_or_stolen.mus')).toString('utf8'),
  delivery: fs.readFileSync(
    path.resolve(__dirname, './templates/customer/plain/delivery.mus')).toString('utf8')
};

var caseworkerHtmlTemplates = {
  error: fs.readFileSync(
    path.resolve(__dirname, './templates/caseworker/html/error.mus')).toString('utf8'),
  'lost-or-stolen': fs.readFileSync(
    path.resolve(__dirname, './templates/caseworker/html/lost_or_stolen.mus')).toString('utf8'),
  delivery: fs.readFileSync(
    path.resolve(__dirname, './templates/caseworker/html/delivery.mus')).toString('utf8')
};

var caseworkerPlainTextTemplates = {
  error: fs.readFileSync(
    path.resolve(__dirname, './templates/caseworker/plain/error.mus')).toString('utf8'),
  'lost-or-stolen': fs.readFileSync(
    path.resolve(__dirname, './templates/caseworker/plain/lost_or_stolen.mus')).toString('utf8'),
  delivery: fs.readFileSync(
    path.resolve(__dirname, './templates/caseworker/plain/delivery.mus')).toString('utf8')
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

Emailer.prototype.send = function send(email, callback) {
  debug('Emailing: ', email.to, 'Subject: ', email.subject);

  var templateData = {
    data: email.dataToSend,
    t: function t() {
      return function lookupTranslation(translate) {
        // for translations inside our mustache templates
        return lookup(translate);
      };
    }
  };

  function sendCustomerEmail() {
    this.transporter.sendMail({
      from: config.email.from,
      to: config.email.caseworker,
      subject: email.subject,
      text: Mustache.render(customerPlainTextTemplates[email.template], templateData),
      html: Mustache.render(customerHtmlTemplates[email.template], templateData)
    }, callback);
  }

  this.transporter.sendMail({
    from: config.email.from,
    to: email.to,
    subject: email.subject,
    text: Mustache.render(caseworkerPlainTextTemplates[email.template], templateData),
    html: Mustache.render(caseworkerHtmlTemplates[email.template], templateData)
  }, sendCustomerEmail.bind(this));
};

module.exports = new Emailer();
