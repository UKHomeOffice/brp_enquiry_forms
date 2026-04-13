/* eslint-disable */
'use strict';

require('hof/frontend/themes/gov-uk/client-js');
const govuk = require('govuk-frontend');
const $ = require('jquery');

const accessibleAutocomplete = require('accessible-autocomplete');

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.typeahead').forEach(function applyTypeahead(element) {
    accessibleAutocomplete.enhanceSelectElement({
      defaultValue: '',
      selectElement: element
    });
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
}

govuk.initAll();
