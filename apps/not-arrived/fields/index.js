'use strict';

var _ = require('underscore');

module.exports = _.extend(
  require('./letter-received'),
  require('./address-match')
);
