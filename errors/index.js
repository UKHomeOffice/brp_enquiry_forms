'use strict';

var i18n = require('i18n-future')();

module.exports = function errorHandler(err, req, res) {
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
    showStack: req.app.get('env') === 'development'
  });
};
