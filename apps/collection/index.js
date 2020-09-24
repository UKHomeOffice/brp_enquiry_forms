'use strict';

module.exports = {
  name: 'collection',
  baseUrl: '/collection',
  params: '/:action?',
  steps: require('./steps'),
  pages: {
    '/cookies': 'cookies',
    '/terms-and-conditions': 'terms',
    '/accessibility': 'accessibility'
  }
};
