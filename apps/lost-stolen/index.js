'use strict';

module.exports = {
  name: 'lost-stolen',
  baseUrl: '/lost-stolen',
  params: '/:action?',
  behaviours: [require('../common/behaviours/location')],
  steps: require('./steps'),
  pages: {
    '/cookies': 'cookies',
    '/terms-and-conditions': 'terms',
    '/accessibility': 'accessibility'
  }
};
