'use strict';

var util = require('util');
var DateController = require('../../../lib/date-controller');
var ErrorClass = require('../../../lib/base-error');
var moment = require('moment');

var ArrangeController = function ArrangeController() {
  DateController.apply(this, arguments);
};

util.inherits(ArrangeController, DateController);

var dateFormat = 'DD-MM-YYYY';

function isDateKey(key) {
  return key === this.dateKey;
}

function isUnder18(value) {
  return moment(value, dateFormat).isAfter(moment().subtract({years: 18}));
}

ArrangeController.prototype.process = function process(req) {
  if (req.form.values['arrange-collection-radio'] === 'someone-else') {
    this.dateKey = 'someone-else-date';
    delete req.form.values['no-reason'];
    req.form.values.nominating = 'Nominate';
    this.options.next = '/reason';
  }

  if (req.form.values['arrange-collection-radio'] === 'change-person') {
    this.dateKey = 'change-person-date';
    req.form.values['no-reason'] = true;
    req.form.values.nominating = 'Change';
    this.options.next = '/personal-details-no-reason';
  }

  if (req.form.values['arrange-collection-radio'] === 'cancel-request') {
    this.dateKey = '';
    this.options.next = '/exit-cancel-request';
  }

  DateController.prototype.process.apply(this, arguments);
};

ArrangeController.prototype.validateField = function validateField(key, req) {
  var required = false;
  var error;

  if (key.indexOf('someone-else') !== -1 && this.dateKey === 'someone-else-date') {
    required = true;
  }
  if (key.indexOf('change-person') !== -1 && this.dateKey === 'change-person-date') {
    required = true;
  }

  if (required && isDateKey.call(this, key) && isUnder18(req.form.values[key])) {
    error = new ErrorClass(this.dateKey, {
      key: this.dateKey,
      type: 'over-18',
      redirect: undefined
    });
  }

  return error ? error : DateController.prototype.validateField.call(this, key, req, required);
};

module.exports = ArrangeController;
