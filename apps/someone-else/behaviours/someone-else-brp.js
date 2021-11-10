'use strict';


module.exports = superclass =>
  class BrpValidator extends superclass {
    validate(req, res, next) {
      const brpRegex = new RegExp(/^[a-z][a-z](\d|X)\d{6}$/i);
      if (
        req.form.values['someone-else-id-type'] === 'brp-card' &&
        brpRegex.test(req.form.values['someone-else-id-number']) !== true
      ) {
        return next({
          'someone-else-id-number': new this.ValidationError(
            'someone-else-id-number',
            {
              type: 'brp-valid'
            }
          )
        });
      } super.validate(req, res, next);
      return next;
    }
  };
