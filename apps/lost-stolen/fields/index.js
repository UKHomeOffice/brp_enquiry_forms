'use strict';

const _ = require('underscore');

module.exports = _.extend(
  require('./inside-uk'),
  require('./date-lost'),
  require('./personal-details'),
  require('./application-type')
);
