'use strict';

const moment = require('moment');

function isOver18(value) {
  return moment(value).isBefore(moment().subtract({years: 18}));
}

module.exports = superclass => class PersonalDetails extends superclass {

  validate(req, res, next) {

    const declaredUnder18 = req.sessionModel.get('someone-else-reason-radio') === 'under-age';
    const isOver18 = moment(req.form.values['date-of-birth']).isBefore(moment().subtract({years: 18}));

    if (declaredUnder18 && isOver18) {
      const error = new this.ValidationError('date-of-birth', {
        type: 'under-18'
      });
      return next({
        'date-of-birth': error
      });
    }

    super.validate(req, res, next);
  };

}
