const $ = require('jquery');

const init = function init() {
  $('.govuk-radios__input[name="address-match"]')
    .on("change", function () {
      if ($('.govuk-radios__input').attr('aria-expanded') !== 'false') {
        $('.govuk-form-group').removeClass('govuk-radios--inline');
      }
      else if ($('.govuk-radios__input').attr('aria-expanded') !== "true" && !$('.govuk-radios__input').hasClass('govuk-radios--inline')) {
        $(this).parents('.govuk-form-group').addClass('govuk-radios--inline');
      }
    })
}

module.exports = {
  init: init
};
