'use strict';

var util = require('util');
var BaseController = require('hof').controllers.base;
var ErrorClass = require('hof').controllers.error;
var _ = require('underscore');
var moment = require('moment');

var AboutErrorController = function AboutErrorController() {
  this.dateKey = 'date-of-birth-error';
  BaseController.apply(this, arguments);
};

util.inherits(AboutErrorController, BaseController);

var prettyDate = 'D MMMM YYYY';

var truncateConfigs = [
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

function isDatePart(key) {
  return key.indexOf('date') !== -1;
}

function isChecked(key, req) {
  if (isDatePart(key)) {
    key = this.dateKey;
  }
  if (req.form.values[key + '-checkbox']) {
    return req.form.values[key + '-checkbox'] === 'true';
  }
  return req.form.values[key] === 'true';
}

function isTooLong(key, max, req) {
  return isChecked.call(this, key, req) && req.form.values[key].length > max;
}

function getTruncatedItems(req) {
  var items;

  truncateConfigs.forEach(function eachConfig(config) {
    if (isTooLong.call(this, config.id, config.max, req)) {
      if (!items) {
        items = [];
      }
      items.unshift({id: config.id});
    }
  });
  return items;
}

function anyChecked(req) {
  return _.filter(_.keys(req.form.values), function filterChecked(valueKey) {
    return isChecked.call(this, valueKey, req);
  }.bind(this));
}

AboutErrorController.prototype.processDate = function processDate(key, values) {
  var pureProcessDate = function pureProcessDate(k, v) {
    var pad = function pad(n) {
      return (n.length < 2) ? '0' + n : n;
    };

    var year = v[k + '-year'];
    var month = v[k + '-month'];
    var day = v[k + '-day'];

    return (year !== '' && month !== '' && day !== '') ? year + '-' + pad(month) + '-' + pad(day) : '';
  };

  var date = pureProcessDate(key, values);

  values[key] = date;
  values[key + '-formatted'] = date === '' ? '' : moment(date).format(prettyDate);
};

AboutErrorController.prototype.getNextStep = function getNextStep(req) {
  var next = BaseController.prototype.getNextStep.apply(this, arguments);
  var truncatedItems = getTruncatedItems(req);
  req.sessionModel.unset('triage');

  if (isChecked.call(this, 'conditions-error-checkbox', req) && req.sessionModel.get('location-applied') === 'yes') {
    req.sessionModel.set('triage', true);
  } else if (truncatedItems) {
    next = req.baseUrl + '/truncated';
    req.sessionModel.set('truncated-items', truncatedItems);
  } else if (this.referrer && this.referrer.indexOf('/check-details') !== -1) {
    next = req.baseUrl + '/check-details';
  }
  return next;
};

AboutErrorController.prototype.saveValues = function saveValues(req, res, callback) {
  var formData = _.clone(req.form.values);
  var diff;

  req.form.values = _.pick(formData, function pickCheckedData(value, key) {
    return isChecked.call(this, key, req);
  }.bind(this));

  diff = _.filter(_.keys(formData), function filterDiff(key) {
    return !_.has(req.form.values, key);
  });

  req.sessionModel.unset(diff);

  BaseController.prototype.saveValues.call(this, req, res, callback);
};

AboutErrorController.prototype.validateField = function validateField(key, req) {
  if (anyChecked.call(this, req).length === 0) {
    return new ErrorClass('error-selection', {
      key: 'error-selection',
      type: 'required',
      redirect: undefined
    });
  }

  if (isDatePart(key) === false || isChecked.apply(this, arguments)) {
    return BaseController.prototype.validateField.apply(this, arguments);
  }
};

AboutErrorController.prototype.process = function process(req) {
  this.processDate(this.dateKey, req.form.values);

  BaseController.prototype.process.apply(this, arguments);
};

module.exports = AboutErrorController;
