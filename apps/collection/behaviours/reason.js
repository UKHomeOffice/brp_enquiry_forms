'use strict';

const _ = require('lodash');

const sponsorOptions = [
  'non-identity',
  'passport-lost',
  'no-brp'
];

module.exports = superclass => class Reason extends superclass {
  configure(req, res, next) {
    if (req.sessionModel.get('collection-where-radio') === 'Sponsor') {
      let options = req.form.options.fields['reason-radio'].options;
      options = options.filter(obj => _.includes(sponsorOptions, obj.value));
      req.form.options.fields['reason-radio'].options = options;
    }
    next();
  }
};
