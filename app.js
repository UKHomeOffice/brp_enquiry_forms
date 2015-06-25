'use strict';

var express = require('express');
var app = express();
var path = require('path');
var debug = require('debug')('index');

app.use('/public', express.static(path.resolve(__dirname, './dist')));

app.use(function setAssetPath(req, res, next) {
  res.locals.assetPath = '/public';
  next();
});

require('hmpo-govuk-template').setup(app);
app.set('view engine', 'html');
app.engine('html', require('hogan-express-strict'));
app.set('views', path.resolve(__dirname, './views'));
app.use(require('express-partial-templates')(app));

app.use(require('body-parser').urlencoded({extended: true}));
app.use(require('body-parser').json());

app.use(function setBaseUrl(req, res, next) {
  res.locals.baseUrl = req.baseUrl;
  next();
});

app.use(require('./routes'));

app.listen(require('./config').PORT);
debug('App listening on port %o', require('./config').PORT);
