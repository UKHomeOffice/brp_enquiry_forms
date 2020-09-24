'use strict';

module.exports = {
  name: 'someone-else',
  baseUrl: '/someone-else',
  params: '/:action?',
  steps: require('./steps'),
  pages: {
    '/cookies': 'cookies',
    '/terms-and-conditions': 'terms',
    '/accessibility': 'accessibility'
  }
};
