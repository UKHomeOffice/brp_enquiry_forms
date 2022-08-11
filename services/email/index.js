/* eslint-disable func-names */
'use strict';

const logger = require('../../lib/logger');
const nodemailer = require('nodemailer');
const config = require('../../config');
const i18n = require('i18n-future');
const Hogan = require('hogan.js');
const fs = require('fs');
const path = require('path');

const customerHtmlTemplates = {
  error: fs.readFileSync(
    path.resolve(__dirname, './templates/customer/html/error.mus')).toString('utf8'),
  'error-triage': fs.readFileSync(
    path.resolve(__dirname, './templates/customer/html/error.mus')).toString('utf8'),
  'lost-or-stolen-uk': fs.readFileSync(
    path.resolve(__dirname, './templates/customer/html/lost_or_stolen_uk.mus')).toString('utf8'),
  'lost-or-stolen-abroad': fs.readFileSync(
    path.resolve(__dirname, './templates/customer/html/lost_or_stolen_abroad.mus')).toString('utf8'),
  delivery: fs.readFileSync(
    path.resolve(__dirname, './templates/customer/html/delivery.mus')).toString('utf8'),
  collection: fs.readFileSync(
    path.resolve(__dirname, './templates/customer/html/collection.mus')).toString('utf8'),
  'someone-else': fs.readFileSync(
    path.resolve(__dirname, './templates/customer/html/someone-else.mus')).toString('utf8')
};

const customerPlainTextTemplates = {
  error: fs.readFileSync(
    path.resolve(__dirname, './templates/customer/plain/error.mus')).toString('utf8'),
  'error-triage': fs.readFileSync(
    path.resolve(__dirname, './templates/customer/plain/error.mus')).toString('utf8'),
  'lost-or-stolen-uk': fs.readFileSync(
    path.resolve(__dirname, './templates/customer/plain/lost_or_stolen_uk.mus')).toString('utf8'),
  'lost-or-stolen-abroad': fs.readFileSync(
    path.resolve(__dirname, './templates/customer/plain/lost_or_stolen_abroad.mus')).toString('utf8'),
  delivery: fs.readFileSync(
    path.resolve(__dirname, './templates/customer/plain/delivery.mus')).toString('utf8'),
  collection: fs.readFileSync(
    path.resolve(__dirname, './templates/customer/plain/collection.mus')).toString('utf8'),
  'someone-else': fs.readFileSync(
    path.resolve(__dirname, './templates/customer/plain/someone-else.mus')).toString('utf8')
};

const caseworkerHtmlTemplates = {
  error: fs.readFileSync(
    path.resolve(__dirname, './templates/caseworker/html/error.mus')).toString('utf8'),
  'error-triage': fs.readFileSync(
    path.resolve(__dirname, './templates/caseworker/html/error.mus')).toString('utf8'),
  'lost-or-stolen-uk': fs.readFileSync(
    path.resolve(__dirname, './templates/caseworker/html/lost_or_stolen.mus')).toString('utf8'),
  'lost-or-stolen-abroad': fs.readFileSync(
    path.resolve(__dirname, './templates/caseworker/html/lost_or_stolen.mus')).toString('utf8'),
  delivery: fs.readFileSync(
    path.resolve(__dirname, './templates/caseworker/html/delivery.mus')).toString('utf8'),
  collection: fs.readFileSync(
    path.resolve(__dirname, './templates/caseworker/html/collection.mus')).toString('utf8'),
  'someone-else': fs.readFileSync(
    path.resolve(__dirname, './templates/caseworker/html/someone-else.mus')).toString('utf8')
};

const caseworkerPlainTextTemplates = {
  error: fs.readFileSync(
    path.resolve(__dirname, './templates/caseworker/plain/error.mus')).toString('utf8'),
  'error-triage': fs.readFileSync(
    path.resolve(__dirname, './templates/caseworker/plain/error.mus')).toString('utf8'),
  'lost-or-stolen-uk': fs.readFileSync(
    path.resolve(__dirname, './templates/caseworker/plain/lost_or_stolen.mus')).toString('utf8'),
  'lost-or-stolen-abroad': fs.readFileSync(
    path.resolve(__dirname, './templates/caseworker/plain/lost_or_stolen.mus')).toString('utf8'),
  delivery: fs.readFileSync(
    path.resolve(__dirname, './templates/caseworker/plain/delivery.mus')).toString('utf8'),
  collection: fs.readFileSync(
    path.resolve(__dirname, './templates/caseworker/plain/collection.mus')).toString('utf8'),
  'someone-else': fs.readFileSync(
    path.resolve(__dirname, './templates/caseworker/plain/someone-else.mus')).toString('utf8')
};

const translationLocation = {
  error: 'correct-mistakes',
  'error-triage': 'correct-mistakes',
  'lost-or-stolen-uk': 'lost-stolen',
  'lost-or-stolen-abroad': 'lost-stolen',
  delivery: 'not-arrived',
  collection: 'collection',
  'someone-else': 'someone-else'
};

let transportType = (config.email.auth.user === '' && config.env !== 'docker-compose') ?
  'stub' : 'smtp';

let emailOptions = {
  host: config.email.host,
  port: config.email.port,
  ignoreTLS: config.email.ignoreTLS
};

if (config.email.auth.user && config.email.auth.pass) {
  emailOptions.auth = config.email.auth;
}

if (config.email.secure) {
  emailOptions.secure = config.email.secure;
}

if (config.email.aws.accessKeyId && config.email.aws.secretAccessKey) {
  transportType = 'ses';

  emailOptions = config.email.aws;
}

logger.info('Sending mail via ' + transportType + ' transport');

function Emailer() {
  this.transporter = nodemailer.createTransport(require('nodemailer-' + transportType + '-transport')(emailOptions));
}

Emailer.prototype.send = function send(email, callback) {
  const locali18n = i18n({
    path: path.resolve(
      __dirname, '../../apps/', './' + translationLocation[email.template], './translations/__lng__/__ns__.json'
    )
  });

  locali18n.on('ready', function locali18nLoaded() {
    const templateData = {
      data: email.dataToSend,
      t: function t() {
        return function lookupTranslation(translate) {
          // for translations inside our mustache templates
          return locali18n.translate(Hogan.compile(translate).render(email.dataToSend));
        };
      }
    };
    const attachments = [
      {
        filename: 'govuk_logotype_email.png',
        path: path.resolve(__dirname, './images/govuk_logotype_email.png'),
        cid: 'govuk_logotype_email'
      },
      {
        filename: 'ho_crest_27px.png',
        path: path.resolve(__dirname, './images/ho_crest_27px.png'),
        cid: 'ho_crest_27px'
      },
      {
        filename: 'spacer.gif',
        path: path.resolve(__dirname, './images/spacer.gif'),
        cid: 'spacer_image'
      }
    ];

    function sendCustomerEmail() {
      if (email.to) {
        logger.info('Emailing customer: ' + email.subject);
        this.transporter.sendMail({
          from: config.email.from,
          replyTo: config.email.replyTo,
          to: email.to,
          subject: email.subject,
          text: Hogan.compile(customerPlainTextTemplates[email.template]).render(templateData),
          html: Hogan.compile(customerHtmlTemplates[email.template]).render(templateData),
          attachments: attachments
        }, callback);
      } else {
        callback();
      }
    }

    logger.info('Emailing caseworker: ' + email.subject);
    this.transporter.sendMail({
      from: config.email.from,
      to: config.email.caseworker[email.template],
      subject: email.subject,
      text: Hogan.compile(caseworkerPlainTextTemplates[email.template]).render(templateData),
      html: Hogan.compile(caseworkerHtmlTemplates[email.template]).render(templateData),
      attachments: attachments
    }, function errorHandler(err) {
      return err
        ? callback(err)
        : sendCustomerEmail.bind(this)();
    }.bind(this));
  }.bind(this));
};

module.exports = new Emailer();
