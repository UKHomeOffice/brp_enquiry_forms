'use strict';

const _ = require('underscore');

module.exports = _.extend(
  require('./letter-received'),
  require('./address-match'),
  require('./tracking-number'),
  require('./personal-details')
);
