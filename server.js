'use strict';

const path = require('path');
const hof = require('hof');

let settings = require('./hof.settings');

settings = Object.assign({}, settings, {
  behaviours: settings.behaviours.map(require),
  routes: settings.routes.map(require),
  views: settings.views.map(view => path.resolve(__dirname, view)),
  getTerms: false,
  getCookies: false
});

const app = hof(settings);

// Terms & Cookies added to have visibility on accessibility statement
// in the footer. Once HOF has updated with that we can remove these
// including the getTerms: false, getCookies: false config
app.use('/terms-and-conditions', (req, res, next) => {
  res.locals = Object.assign({}, res.locals, req.translate('terms'));
  next();
});

app.use('/cookies', (req, res, next) => {
  res.locals = Object.assign({}, res.locals, req.translate('cookies'));
  next();
});

app.use((req, res, next) => {
  res.locals.htmlLang = 'en';
  res.locals.footerSupportLinks = [
    { path: '/cookies', property: 'base.cookies' },
    { path: '/terms-and-conditions', property: 'base.terms' },
    { path: '/accessibility', property: 'base.accessibility' }
  ];
  next();
});

app.use(require('./redirects.js')());

module.exports = app;
