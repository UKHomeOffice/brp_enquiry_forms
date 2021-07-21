'use strict';

module.exports = {
  name: 'collection',
  baseUrl: '/collection',
  params: '/:action?',
  steps: require('./steps')
};
