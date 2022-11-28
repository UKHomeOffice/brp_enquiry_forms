/* eslint-disable consistent-return */
'use strict';

const moment = require('moment');
const _ = require('underscore');
const StatsD = require('hot-shots');
const client = new StatsD();
const Model = require('../models/email');


function errorChecked(key, data) {
  if (data[key + '-checkbox']) {
    return key;
  }
}

function checkedErrors(data) {
  const checked = _.filter(_.keys(data), valueKey => {
    return errorChecked(valueKey, data);
  });
  return checked;
}

const serviceMap = {
  '/not-arrived': () => {
    return {
      template: 'delivery',
      subject: 'Form submitted: Your BRP hasn\'t arrived.'
    };
  },
  '/correct-mistakes': data => {
    let subjectErrors = '';
    checkedErrors(data).forEach(element => {
      (subjectErrors.length === 0 ? subjectErrors += element : subjectErrors += ', ' + element);
    });
    const suffix = data.triage ? '-triage' : '';
    return {
      template: 'error' + suffix,
      subject: 'Form submitted: Report a problem with your new BRP (' + subjectErrors + ')'
    };
  },
  '/lost-stolen': data => {
    const suffix = (data['inside-uk'] === 'yes') ? '-uk' : '-abroad';
    return {
      template: 'lost-or-stolen' + suffix,
      subject: 'Form submitted: Report a lost or stolen BRP.'
    };
  },
  '/collection': () => {
    return {
      template: 'collection',
      subject: 'Form submitted: Report a collection problem.'
    };
  },
  '/someone-else': () => {
    return {
      template: 'someone-else',
      subject: 'Form submitted: Report someone else collecting your BRP.'
    };
  }
};

module.exports = superclass => class Emailer extends superclass {
  saveValues(req, res, callback) {
    super.saveValues(req, res, () => {
      const data = _.pick(req.sessionModel.toJSON(), _.identity);
      data['date-lost'] = moment(data['date-lost']).format('DD MMMM YYYY');
      data['date-of-birth'] = moment(data['date-of-birth']).format('DD MMMM YYYY');
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
  errorChecked;
  checkedErrors;
};
