/* eslint-disable consistent-return */
'use strict';

const _ = require('underscore');
const StatsD = require('hot-shots');
const client = new StatsD();
const Model = require('../models/email');

const {customAlphabet} = require('nanoid');
const alphabet = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
const nanoid = customAlphabet(alphabet, 9);

function errorChecked(key, data) {
  if (data[key + '-checkbox']) {
    return key;
  }
}

function setSubmissionReference(data) {
  // This function is responsible for storing a submission referene if one is required

  // Did the user say this is a resubmission?
  if (data['previous-submission'] === 'yes') {
    // Yes they did - Mark this as a resubmission for easier assessment when sending the email to caseworkers
    data['is-resubmission'] = true;
    // Did the user provide a reference for their previous submission?
    // If they did, we should keep it the same
    // If they did not, we should not populate the reference in
    // the emails that are sent out so ensure this remains undefined
    data['submission-reference'] = (data['submission-reference'] ? data['submission-reference'] : undefined);
  } else {
    data['is-resubmission'] = false;
    // It's a new submission so generate a reference
    data['submission-reference'] = nanoid();
  }
}

function addSubmissionReference(data) {
  // If we do not already have a submission reference, create one and store it in our data object
  // We may want to re-use this later
  setSubmissionReference(data);
  // Ensure there's a space in front of it, since this is being appended to the end of the email subject
  return !!data['submission-reference'] ? ` Ref: ${data['submission-reference']}` : '';
}

function checkedErrors(data) {
  const checked = _.filter(_.keys(data), valueKey => {
    return errorChecked(valueKey, data);
  });
  return checked;
}

const serviceMap = {
  '/not-arrived': data => {
    return {
      template: 'delivery',
      subject: `Form submitted: Your BRP hasn\'t arrived.${addSubmissionReference(data)}`
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
      subject: `Form submitted: Report a problem with your new BRP (${subjectErrors}).${addSubmissionReference(data)}`
    };
  },
  '/lost-stolen': data => {
    const suffix = (data['inside-uk'] === 'yes') ? '-uk' : '-abroad';
    return {
      template: 'lost-or-stolen' + suffix,
      subject: `Form submitted: Report a lost or stolen BRP.${addSubmissionReference(data)}`
    };
  },
  '/collection': data => {
    return {
      template: 'collection',
      subject: `Form submitted: Report a collection problem.${addSubmissionReference(data)}`
    };
  },
  '/someone-else': data => {
    return {
      template: 'someone-else',
      subject: `Form submitted: Report someone else collecting your BRP.${addSubmissionReference(data)}`
    };
  }
};

module.exports = superclass => class Emailer extends superclass {
  saveValues(req, res, callback) {
    super.saveValues(req, res, () => {
      const data = _.pick(req.sessionModel.toJSON(), _.identity);

      // Generate a reference for this submission
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
