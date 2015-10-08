'use strict';

var _ = require('underscore');

module.exports = _.extend(
  require('./about-error'),
  require('./truncated'),
  require('./uk-address')
);
