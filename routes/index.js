'use strict';

var app = require('express').Router();
var deliverySteps = require('./steps/delivery');
var errorSteps = require('./steps/error');
var lostSteps = require('./steps/lost');
var fields = require('./fields');
var wizard = require('hmpo-form-wizard');
var mixins = require('hmpo-template-mixins');
var i18n = require('i18n-future')();

app.use(mixins(i18n.translate.bind(i18n), fields));

app.use('/not-arrived/', wizard(deliverySteps, fields, {
  translate: i18n.translate.bind(i18n),
  controller: require('../lib/base-controller')
}));

app.use('/correct-mistakes/', wizard(errorSteps, fields, {
  translate: i18n.translate.bind(i18n),
  controller: require('../lib/base-controller')
}));

app.use('/lost-stolen-damaged/', wizard(lostSteps, fields, {
  translate: i18n.translate.bind(i18n),
  controller: require('../lib/base-controller')
}));

app.use('/cookies', function cookies(req, res) {
  res.render('cookies');
});

module.exports = app;
