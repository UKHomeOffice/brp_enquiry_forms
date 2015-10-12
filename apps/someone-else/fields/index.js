'use strict';

var _ = require('underscore');

module.exports = _.extend(
  require('./arrange'),
  require('./reason')
);
