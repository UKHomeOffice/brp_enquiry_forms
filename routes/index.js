'use strict';

var app = require('express').Router();
var steps = require('./steps');
var fields = require('./fields');

app.use(require('hmpo-form-wizard')(steps, fields));

module.exports = app;
