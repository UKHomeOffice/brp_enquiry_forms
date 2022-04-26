'use strict';

module.exports = {
    'application-type-other': {
        validate: ['required'],
        dependent: {
          field: 'application-type',
          value: 'other'
        }
      }
};