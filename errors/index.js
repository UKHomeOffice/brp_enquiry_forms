'use strict';

var i18n = require('i18n-future')();
var config = require('../config');

/*eslint no-unused-vars: 0*/
module.exports = function errorHandler(err, req, res, next) {
  /*eslint no-unused-vars: 1*/
  var content = {};

  if (err.code === 'SESSION_TIMEOUT') {
    content.title = i18n.translate('errors.session.title');
    content.message = i18n.translate('errors.session.message');
  }

  err.template = 'errors/error';
  content.title = content.title || i18n.translate('errors.default.title');
  content.message = content.message || i18n.translate('errors.default.message');

  res.statusCode = err.status || 500;

  res.render(err.template, {
    error: err,
    content: content,
    showStack: config.env === 'development',
    startLink: req.path.replace(/^\/([^\/]*).*$/, '$1')
  });
};
