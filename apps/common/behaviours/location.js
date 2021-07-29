'use strict';

function getLocation(req) {
  if (req.form.values['inside-uk'] === 'yes') {
    return {
      'inside-uk': true
    };
  }
  if (req.form.values['inside-uk'] === 'no') {
    return {
      'outside-uk': true
    };
  }
  return {
    'not-specified': true
  };
}

module.exports = superclass => class Confirmation extends superclass {
  locals(req, res) {
    return Object.assign({}, super.locals(req, res), {
      location: getLocation(req)
    });
  }
};
