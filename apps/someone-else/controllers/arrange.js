'use strict';

var util = require('util');
var Parent = require('hof').controllers.base;
var moment = require('moment');

var ArrangeController = function ArrangeController() {
  Parent.apply(this, arguments);
};

util.inherits(ArrangeController, Parent);

var prettyDate = 'D MMMM YYYY';

ArrangeController.prototype.processDate = function processDate(key, values) {
  var pureProcessDate = function pureProcessDate(k, v) {
    var pad = function pad(n) {
      return (n.length < 2) ? '0' + n : n;
    };

    var year = v[k + '-year'];
    var month = v[k + '-month'];
    var day = v[k + '-day'];

    return (year !== '' && month !== '' && day !== '') ? year + '-' + pad(month) + '-' + pad(day) : undefined;
  };

  var date = pureProcessDate(key, values);

  values[key] = date;
  values[key + '-formatted'] = moment(date).format(prettyDate);
};

ArrangeController.prototype.process = function process(req) {
  if (req.form.values['arrange-collection-radio'] === 'someone-else') {
    delete req.form.values['no-reason'];
    req.form.values.nominating = 'Nominate';
    this.options.next = '/reason';
  }

  if (req.form.values['arrange-collection-radio'] === 'change-person') {
    req.form.values['no-reason'] = true;
    req.form.values.nominating = 'Change';
    this.options.next = '/personal-details-no-reason';
  }

  if (req.form.values['arrange-collection-radio'] === 'cancel-request') {
    this.options.next = '/exit-cancel-request';
  }

  this.processDate('someone-else-date', req.form.values);
  this.processDate('change-person-date', req.form.values);

  Parent.prototype.process.apply(this, arguments);
};

module.exports = ArrangeController;
