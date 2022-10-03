'use strict';

module.exports = {
  'post-office-collect-radio': {
    isPageHeading: true,
    mixin: 'radio-group',
    className: ['govuk-radios--inline', 'form-group'],
    options: [{
      value: 'yes'
    }, {
      value: 'no'
    }]
  }
};
