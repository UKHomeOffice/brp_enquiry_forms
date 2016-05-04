'use strict';

var express = require('express');
var app = express();
var path = require('path');
var logger = require('./lib/logger');
var churchill = require('churchill');
var session = require('client-sessions');
var config = require('./config');
require('moment-business');

if (config.env !== 'ci') {
  app.use(churchill(logger));
}

if (config.env === 'development' || config.env === 'ci' || config.env === 'docker-compose') {
  app.use('/public', express.static(path.resolve(__dirname, './public')));
}

app.use(function setLocals(req, res, next) {
  if (config.gaTag) {
    res.locals.gaTag = config.gaTag;
  }
  res.locals.assetPath = '/public';
  next();
});

require('hof').template.setup(app);
app.set('view engine', 'html');
app.set('views', path.resolve(__dirname, './apps/common/views'));
app.enable('view cache');
app.use(require('express-partial-templates')(app));
app.engine('html', require('hogan-express-strict'));

app.use(require('body-parser').urlencoded({extended: true}));
app.use(require('body-parser').json());

app.use(function setBaseUrl(req, res, next) {
  res.locals.baseUrl = req.baseUrl;
  next();
});


function secureCookies(req, res, next) {
  var cookie = res.cookie.bind(res);
  res.cookie = function cookieHandler(name, value, options) {
    options = options || {};
    options.secure = (req.protocol === 'https');
    options.httpOnly = true;
    options.path = '/';
    cookie(name, value, options);
  };
  next();
}

app.use(require('cookie-parser')(config.session.secret));
app.use(secureCookies);
app.use(session({
  cookieName: 'session',
  secret: config.session.secret,
  duration: config.session.ttl * 1000,
  activeDuration: config.session.ttl * 1000,
  cookie: {
    path: '/',
    ephemeral: false,
    httpOnly: true
  }
}));

app.get('/cookies', function renderCookies(req, res) {
  res.render('cookies');
});

app.get('/terms-and-conditions', function renderTerms(req, res) {
  res.render('terms');
});


// use the hof middleware
app.use(require('hof').middleware());

// apps
app.use(require('./apps/correct-mistakes/'));
app.use(require('./apps/collection/'));
app.use(require('./apps/someone-else/'));
app.use(require('./apps/not-arrived/'));
app.use(require('./apps/lost-stolen-damaged/'));
app.use(require('./middleware/not-found')());

// errors
app.use(require('./errors/'));

/*eslint camelcase: 0*/
app.listen(config.port, config.listen_host);
/*eslint camelcase: 1*/
logger.info('App listening on port', config.port);
