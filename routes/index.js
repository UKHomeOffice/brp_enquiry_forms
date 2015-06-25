'use strict';

var app = require('express').Router();
var steps = require('./steps');
var fields = require('./fields');
var wizard = require('hmpo-form-wizard');
var mixins = require('hmpo-template-mixins');
var i18n = require('i18n-future')();

app.use(mixins(i18n.translate.bind(i18n), fields));

app.use(wizard(steps, fields, {translate: i18n.translate.bind(i18n)}));

module.exports = app;
