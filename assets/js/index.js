/* eslint-disable */
'use strict';

require('hof/frontend/themes/gov-uk/client-js');
const govuk = require('govuk-frontend');
const $ = require('jquery');
const typeahead = require('typeahead-aria');
const Bloodhound = require('typeahead-aria').Bloodhound;
const inlineRadioToggle = require('./inline-radio-toggle');
typeahead.loadjQueryPlugin();

$('.typeahead').each(function applyTypeahead() {
  var $el = $(this);
  var $parent = $el.parent();
  var attributes = $el.prop('attributes');
  var $input = $('<input/>');
  var selectedValue = $el.val();
  var typeaheadList = $el.find('option').map(function mapOptions() {
    if (this.value === '') {
      // remove any empty values from typeahead
      // eslint-disable-next-line consistent-return
      return;
    }
    return this.value;
  }).get();

  // remove the selectbox
  $el.remove();

  $.each(attributes, function applyAttributes() {
    $input.attr(this.name, this.value);
  });

  $input.removeClass('js-hidden');
  $input.addClass('form-control');
  $input.val(selectedValue);

  $parent.append($input);

  $input.typeahead({
    hint: false
  }, {
    source: new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.whitespace,
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      local: typeaheadList,
      sorter: function sorter(a, b) {
        var input = $input.val();
        var startsWithInput = function startsWithInput(x) {
          return (x.toLowerCase().substr(0, input.length) === input.toLowerCase()) ? -1 : 1;
        };

        var compareAlpha = function compareAlpha(x, y) {
          var less = (x < y) ? -1 : 1;
          return (x === y) ? 0 : less;
        };

        var compareStartsWithInput = function compareStartsWithInput(x, y) {
          var startsWithFirst = startsWithInput(x);
          var startsWithSecond = startsWithInput(y);

          return (startsWithFirst === startsWithSecond) ? 0 : startsWithFirst;
        };

        var first = compareStartsWithInput(a, b);

        return (first === 0) ? compareAlpha(a, b) : first;
      }
    }),
    limit: 100
  });
});

$('h2.section-header:contains(Lost/stolen details)').css('display', 'none')
$('a[href^="#error-selection"]').prop('href', '#last-name-error-checkbox');

$('input[type=submit].govuk-button').attr('data-module', 'govuk-button');

// Stop users from accidentally sending information more than once by adding
// the data-prevent-double-click attribute to the form submission button
if ($('input[type=submit].govuk-button').attr('value') === 'Send') {
  const sendButton = $('input[type=submit].govuk-button')
  sendButton.attr('data-prevent-double-click', 'true');
};

govuk.initAll();
inlineRadioToggle.init();
