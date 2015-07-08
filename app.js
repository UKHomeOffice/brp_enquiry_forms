'use strict';

var express = require('express');
var app = express();
var path = require('path');
var debug = require('debug')('index');

var session = require('express-session');
var redis = require('redis');
var RedisStore = require('connect-redis')(session);

var config = require('./config');

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

/*************************************/
/******* Redis session storage *******/
/*************************************/
var client = redis.createClient(config.redis.port, config.redis.host);

client.on('error', function clientErrorHandler(e) {
  throw e;
});

var redisStore = new RedisStore({
  client: client,
  ttl: config.session.ttl
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
function initSession(req, res, next) {
  session({
    store: redisStore,
    cookie: {
      secure: (req.protocol === 'https')
    },
    key: 'hmbrp.sid',
    secret: config.session.secret,
    resave: true,
    saveUninitialized: true
  })(req, res, next);
}

module.exports = [
  require('cookie-parser')(config.session.secret),
  secureCookies,
  initSession
];

app.use(require('./routes'));

app.listen(require('./config').port);
debug('App listening on port %o', require('./config').port);
