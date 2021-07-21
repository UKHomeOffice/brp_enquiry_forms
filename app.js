'use strict';

const path = require('path');
const hof = require('hof');
const config = require('./config.js');

const options = {
  views: path.resolve(__dirname, './apps/common/views'),
  fields: path.resolve(__dirname, './apps/common/fields'),
  routes: [
    require('./apps/correct-mistakes/'),
    require('./apps/collection/'),
    require('./apps/someone-else/'),
    require('./apps/not-arrived/'),
    require('./apps/lost-stolen/')
  ],
  getCookies: false,
  start: false,
  redis: config.redis
};

const addGenericLocals = (req, res, next) => {
  // Set HTML Language
  res.locals.htmlLang = 'en';
  // Set feedback and footer links
  res.locals.feedbackUrl = '/feedback';
  res.locals.footerSupportLinks = [
    { path: '/cookies', property: 'base.cookies' },
    { path: '/terms-and-conditions', property: 'base.terms' },
    { path: '/accessibility', property: 'accessibility' },
  ];
  // Set service name for cookie-banner
  res.locals.serviceName = 'Biometric Residency Permit Enquiry Forms';
  next();
};

const app = hof(options);

app.use((req, res, next) => addGenericLocals(req, res, next));

app.use('/cookies', (req, res) => {
  res.locals = Object.assign({}, res.locals, req.translate('cookies'));
  res.render('cookies');
});

app.use(require('./redirects.js')());

app.start();
