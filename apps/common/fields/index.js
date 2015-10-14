'use strict';

var _ = require('underscore');

module.exports = _.extend(
  require('./buttons'),
  require('./contact-details'),
  require('./personal-details'),
  require('./organisation-details')
);

