"use strict";


module.exports = (superclass) =>
  class BrpValidator extends superclass {
    saveValues(req, res, next) {
        // TODO = USE .MATCH TO MATCH REGEX. SEE STRING.PROTOTYPE.MATCH() ON MOZILLA
      if (req.form.values['someone-else-id-type'] === 'brp-card' && req.form.values['someone-else-id-number'] != /^[a-z][a-z](\d|X)\d{6}$/gi ) {
        return next({
          'someone-else-id-number': new this.ValidationError('someone-else-id-number', {
            type: "brp-valid",
          }),
        });
      } else {
        super.saveValues(req, res, next);
      }
    }
  };