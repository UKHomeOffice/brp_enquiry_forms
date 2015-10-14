'use strict';

var app = require('express').Router();
var lostSteps = require('./steps/lost');
var fields = require('./fields');
var wizard = require('hmpo-form-wizard');
var mixins = require('hmpo-template-mixins');
var i18n = require('i18n-future')();
var options = {
  translate: i18n.translate.bind(i18n),
  controller: require('../lib/base-controller'),
  params: '/:action?'
};

app.use(mixins(i18n.translate.bind(i18n), fields));

app.use('/lost-stolen-damaged/', wizard(lostSteps, fields, options));

app.use('/cookies', function cookies(req, res) {
  res.render('cookies');
});

app.use('/terms-and-conditions', function cookies(req, res) {
  res.render('terms');
});

module.exports = app;
