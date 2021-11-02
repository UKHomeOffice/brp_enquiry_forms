"use strict";
const moment = require("moment");

//Today's date
const dateToday = moment().format("YYYY[-]MM[-]DD");

//Validate DOB so no user can enter today's date.
module.exports = (superclass) =>
  class DateValidator extends superclass {
    saveValues(req, res, next) {
      if (req.form.values["date-of-birth"] === dateToday) {
        return next({
          "date-of-birth": new this.ValidationError("date-of-birth", {
            type: "today",
          }),
        });
      } else {
        super.saveValues(req, res, next);
      }
    }
  };
