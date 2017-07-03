'use strict';

module.exports = {
  name: 'correct-mistakes',
  baseUrl: '/correct-mistakes',
  params: '/:action?',
  behaviours: [require('../common/behaviours/location')],
  steps: require('./steps')
};
