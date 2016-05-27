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

    return (year !== '' && month !== '' && day !== '') ? year + '-' + pad(month) + '-' + pad(day) : '';
  };

  var date = pureProcessDate(key, values);

  values[key] = date;
  values[key + '-formatted'] = date === '' ? '' : moment(date).format(prettyDate);
};

ArrangeController.prototype.process = function process(req) {
  this.processDate('someone-else-date', req.form.values);

  Parent.prototype.process.apply(this, arguments);
};

module.exports = ArrangeController;
