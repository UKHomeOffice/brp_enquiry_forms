
const SetContinueLink = require('./behaviours/set-continue-link');

module.exports = {
  name: 'common',
  steps: {
    '/accessibility': {
      behaviours: [SetContinueLink]
    },
    '/cookies': {
      behaviours: [SetContinueLink]
    },
    '/terms-and-conditions': {
      behaviours: [SetContinueLink]
    },
    '/session-timeout': {},
    '/exit': {}
  }
};
