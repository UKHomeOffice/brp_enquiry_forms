/* eslint-disable consistent-return */
'use strict';

const _ = require('underscore');
const StatsD = require('hot-shots');
const client = new StatsD();
const Model = require('../models/email');
const config = require('../../../config');

const { customAlphabet } = require('nanoid');
const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const nanoid = customAlphabet(alphabet, 15);


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
function setRef(data) {
  const submissionRef = (data['submission-reference'] ? data['submission-reference'] : nanoid());
  if (data['submission-reference']) {
    config.email.duplicate = true;
  }
  return submissionRef;
}

const serviceMap = {
  '/not-arrived': data => {
    return {
      template: 'delivery',
      subject: 'Form submitted: Your BRP hasn\'t arrived. Ref: ' + setRef(data)
    };
  },
  '/correct-mistakes': data => {
    let subjectErrors = '';
    checkedErrors(data).forEach(element => {
      (subjectErrors.length === 0 ? subjectErrors += element : subjectErrors += ' ' + element);
    });
    const suffix = data.triage ? '-triage' : '';
    return {
      template: 'error' + suffix,
      subject: 'Form submitted: Report a problem with your new BRP (' + subjectErrors + ') Ref: ' + setRef(data)
    };
  },
  '/lost-stolen': data => {
    const suffix = (data['inside-uk'] === 'yes') ? '-uk' : '-abroad';
    return {
      template: 'lost-or-stolen' + suffix,
      subject: 'Form submitted: Report a lost or stolen BRP. Ref: ' + setRef(data)
    };
  },
  '/collection': data => {
    return {
      template: 'collection',
      subject: 'Form submitted: Report a collection problem. Ref: ' + setRef(data)
    };
  },
  '/someone-else': data => {
    return {
      template: 'someone-else',
      subject: 'Form submitted: Report someone else collecting your BRP. Ref: ' + setRef(data)
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
