'use strict';

var _ = require('underscore');

module.exports = _.extend(
  require('./where'),
  require('./reasons'),
  require('./nominee')
);
