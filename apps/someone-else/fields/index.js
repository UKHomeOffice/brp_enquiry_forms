'use strict';

const _ = require('underscore');

module.exports = _.extend(
  require('./arrange'),
  require('./reason')
);
