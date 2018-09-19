'use strict';

const _ = require('underscore');
const StatsD = require('hot-shots');
const client = new StatsD();
const Model = require('../models/email');

const serviceMap = {
  '/not-arrived': function notArrived() {
    return {
      template: 'delivery',
      subject: 'Form submitted: Your BRP hasn\'t arrived'
    };
  },
  '/correct-mistakes': function correctMistakes(data) {
    var suffix = data.triage ? '-triage' : '';
    return {
      template: 'error' + suffix,
      subject: 'Form submitted: Report a problem with your new BRP'
    };
  },
  '/lost-stolen': function lostStolenDamaged(data) {
    var suffix = (data['inside-uk'] === 'yes') ? '-uk' : '-abroad';
    return {
      template: 'lost-or-stolen' + suffix,
      subject: 'Form submitted: Report a lost or stolen BRP'
    };
  },
  '/collection': function collection() {
    return {
      template: 'collection',
      subject: 'Form submitted: Report a collection problem'
    };
  },
  '/someone-else': function someoneElse() {
    return {
      template: 'someone-else',
      subject: 'Form submitted: Report someone else collecting your BRP'
    };
  }
};

module.exports = superclass => class Emailer extends superclass {

  saveValues(req, res, callback) {

    super.saveValues(req, res, function saveModel() {
      const data = _.pick(req.sessionModel.toJSON(), _.identity);
      const service = serviceMap[req.baseUrl] && serviceMap[req.baseUrl](data);

      if (!service) {
        return callback(new Error('no service found'));
      }

      const model = new Model(data);
      model.set('template', service.template);
      model.set('subject', service.subject);
      client.increment('brp.' + service.template + '.submission');
      model.save(callback);
    });

  }

};
