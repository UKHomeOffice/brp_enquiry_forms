'use strict';

var _ = require('underscore');

module.exports = _.extend(
  require('./inside-uk'),
  require('./date-lost')
);
