'use strict';

module.exports = {
  name: 'correct-mistakes',
  baseUrl: '/correct-mistakes',
  params: '/:action?',
  steps: require('./steps')
};
