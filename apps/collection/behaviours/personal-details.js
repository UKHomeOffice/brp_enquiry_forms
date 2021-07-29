'use strict';

module.exports = superclass => class PersonalDetails extends superclass {
  configure(req, res, next) {
    const isUnderAge = req.sessionModel.get('reason-radio') === 'under-age';

    if (isUnderAge) {
      req.form.options.fields['date-of-birth'].validate = req.form.options.fields['date-of-birth'].validate || [];
      req.form.options.fields['date-of-birth'].validate.push({
        // TODO confirm with BA on over18 check 'over18' validation
        // type: isUnderAge ? 'after' : 'over18'
        type: 'after',
        arguments: [18, 'years']
      });
    }
    next();
  }
};
