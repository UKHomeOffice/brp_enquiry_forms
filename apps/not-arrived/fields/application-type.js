'use strict';

module.exports = {
  'application-type-other': {
    validate: ['required', {type: 'maxlength', arguments: 50}],
    dependent: {
      field: 'application-type',
      value: 'application-type-other'
    }
  }
};
