'use strict';

var router = require('express').Router();
var wizard = require('hmpo-form-wizard');
var mixins = require('hmpo-template-mixins');
var _ = require('underscore');
var path = require('path');
var fields = _.extend({}, require('../common/fields/'), require('./fields/'));
var i18n = require('i18n-future')({
  path: path.resolve(__dirname, './translations/__lng__/__ns__.json')
});

router.use(mixins(i18n.translate.bind(i18n), fields));

router.use('/not-arrived/', wizard(require('./steps'), fields, {
  controller: require('../../lib/base-controller'),
  templatePath: path.resolve(__dirname, 'views'),
  translate: i18n.translate.bind(i18n),
  params: '/:action?'
}));

module.exports = router;
