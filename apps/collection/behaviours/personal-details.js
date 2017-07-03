'use strict';

module.exports = superclass => class PersonalDetails extends superclass {

  configure(req, res, next) {
    if (req.sessionModel.get('reason-radio') === 'under-age') {
      req.form.options.fields['date-of-birth'].validate = req.form.options.fields['date-of-birth'].validate || [];
      req.form.options.fields['date-of-birth'].validate.push({
        type: 'after',
        arguments: [18, 'years']
      });
    }
    next();
  }

};
