'use strict';

const _ = require('underscore');
const moment = require('moment');

const prettyDate = 'D MMMM YYYY';

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

  truncateConfigs.forEach(function eachConfig(config) {
    if (isTooLong.call(this, config.id, config.max, req)) {
      items.unshift({id: config.id});
    }
  });
  return items;
}

function anyChecked(req) {
  const checked = _.filter(_.keys(req.form.values), function filterChecked(valueKey) {
    return isChecked(valueKey, req);
  });
  return checked.length > 0;
}

module.exports = superclass => class AboutError extends superclass {

  getNextStep(req, res) {
    var next = super.getNextStep(req, res);
    var truncatedItems = getTruncatedItems(req);
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

  saveValues(req, res, callback) {
    var formData = _.clone(req.form.values);
    var diff;

    req.form.values = _.pick(formData, function pickCheckedData(value, key) {
      return isChecked.call(this, key, req);
    }.bind(this));

    diff = _.filter(_.keys(formData), function filterDiff(key) {
      return !_.has(req.form.values, key);
    });

    req.sessionModel.unset(diff);

    if (req.form.values['date-of-birth-error']) {
      req.form.values['date-of-birth-error-formatted'] = moment(req.form.values['date-of-birth-error']).format(prettyDate);
    } else {
      req.form.values['date-of-birth-error-formatted'] = null;
    }

    super.saveValues(req, res, callback);
  }

  validate(req, res, next) {
    if (!anyChecked(req)) {
      return next({
        'error-selection': new this.ValidationError('error-selection', { type: 'required' })
      });
    }
    super.validate(req, res, next);
  }

}
