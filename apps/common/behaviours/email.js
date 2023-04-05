/* eslint-disable consistent-return */
'use strict';

const _ = require('underscore');
const StatsD = require('hot-shots');
const client = new StatsD();
const Model = require('../models/email');
const config = require('../../../config');
const logger = require('../../../lib/logger');

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
      const service = serviceMap[req.baseUrl] && serviceMap[req.baseUrl](data);

      if (!service) {
        return callback(new Error('no service found'));
      }

      const model = new Model(data);
      model.set('template', service.template);
      model.set('subject', service.subject);
      client.increment('brp.' + service.template + '.submission');
      model.save(() => {
        // And also send to the integrations inbox
        // Its the same email, so just update the email address and "save" again
        // This should only be done in UAT/Staging
        // Since this is only configured in the hof-services-config for these environments
        // This ensures it only sends in these environments
        if (config.email['integration-email-recipient']) {
          logger.info('Integrations inbox found, forwarding confirmation to integrations inbox');
          model.set('email', config.email['integration-email-recipient']);
          model.save(callback);
        }
      });
    });
  }
  errorChecked;
  checkedErrors;
};
