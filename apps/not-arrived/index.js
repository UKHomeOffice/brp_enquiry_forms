'use strict';

module.exports = {
  name: 'not-arrived',
  baseUrl: '/not-arrived',
  params: '/:action?',
  steps: require('./steps'),
  pages: {
    '/cookies': 'cookies',
    '/terms-and-conditions': 'terms',
    '/accessibility': 'accessibility'
  }
};
