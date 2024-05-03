/* eslint-disable consistent-return */
'use strict';

const truncateConfigs = [
  {
    id: 'first-name-error',
    max: 30
  },
  {
    id: 'last-name-error',
    max: 30
  },
  {
    id: 'birth-place-error',
    max: 16
  }
];

function isChecked(key, req) {
  if (req.form.values[key + '-checkbox']) {
    return req.form.values[key + '-checkbox'] === 'true';
  }
  return req.form.values[key] === 'true';
}

function isTooLong(key, max, req) {
  return isChecked(key, req) && req.form.values[key].length > max;
}

function getTruncatedItems(req) {
  const items = [];

  truncateConfigs.forEach(config => {
    if (isTooLong.call(this, config.id, config.max, req)) {
      items.unshift({id: config.id});
    }
  });
  return items;
}

module.exports = superclass => class AboutError extends superclass {
  getNextStep(req, res) {
    let next = super.getNextStep(req, res);
    const truncatedItems = getTruncatedItems(req);
    req.sessionModel.unset('triage');

    if (isChecked.call(this, 'conditions-error-checkbox', req) && req.sessionModel.get('location-applied') === 'yes') {
      req.sessionModel.set('triage', true);
    } else if (truncatedItems.length) {
      next = req.baseUrl + '/truncated';
      req.sessionModel.set('truncated-items', truncatedItems);
    } else if (this.referrer && this.referrer.indexOf('/check-details') !== -1) {
      next = req.baseUrl + '/check-details';
    }
    return next;
  }
  locals(req, res) {
    const locals = super.locals(req, res);

    // set gender options
    if (req.form.values['gender-error'] && req.form.values['gender-error'] === 'female') {
      locals.femaleChecked = true;
    }
    if (req.form.values['gender-error'] && req.form.values['gender-error'] === 'male') {
      locals.maleChecked = true;
    }
    if (req.form.values['gender-error'] && req.form.values['gender-error'] === 'unspecified') {
      locals.unspecifiedChecked = true;
    }
    return locals;
  }
};
