/* eslint-disable consistent-return */
'use strict';

const _ = require('underscore');
const StatsD = require('hot-shots');
const client = new StatsD();
const Model = require('../models/email');
const applicationTypeOptions = require('../fields/application-type.js')['application-type'].options;

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
function appType(data) {
  const apptype = data['application-type'];
  const otherFreetext = data['application-type-other'];
  let applicationType = _.get( _.find(applicationTypeOptions, a => a.value === apptype), 'label', '');
  if (apptype === 'application-type-other') {
    applicationType = _.get( _.find(applicationTypeOptions, a => a.value === apptype), 'label', '') +
    ' - ' + otherFreetext;
  }
  return applicationType;
}

const serviceMap = {
  '/not-arrived': data => {
    return {
      template: 'delivery',
      subject: 'Form submitted: Your BRP hasn\'t arrived. Application Type: ' + appType(data)
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
      subject: 'Form submitted: Report a problem with your new BRP (' + subjectErrors + ') Application Type: '
      + appType(data)
    };
  },
  '/lost-stolen': data => {
    const suffix = (data['inside-uk'] === 'yes') ? '-uk' : '-abroad';
    return {
      template: 'lost-or-stolen' + suffix,
      subject: 'Form submitted: Report a lost or stolen BRP. Application Type: ' + appType(data)
    };
  },
  '/collection': data => {
    return {
      template: 'collection',
      subject: 'Form submitted: Report a collection problem. Application Type: ' + appType(data)
    };
  },
  '/someone-else': data => {
    return {
      template: 'someone-else',
      subject: 'Form submitted: Report someone else collecting your BRP. Application Type: ' + appType(data)
    };
  }
};

module.exports = superclass => class Emailer extends superclass {
  saveValues(req, res, callback) {
    super.saveValues(req, res, () => {
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
  errorChecked;
  checkedErrors;
};
