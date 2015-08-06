'use strict';

var helpers = require('hmpo-frontend-toolkit').helpers;
var progressiveReveal = require('hmpo-frontend-toolkit').progressiveReveal;

helpers.documentReady(progressiveReveal);

var $ = require('jquery');
var typeahead = require('typeahead.js-browserify');
var Bloodhound = require('typeahead.js-browserify').Bloodhound;

typeahead.loadjQueryPlugin();

var nonEuCountries = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: require('./countries').nonEuCountries
});

var allCountries = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: require('./countries').allCountries
});


$('#nationality, #nationality-error').typeahead({
  minLength: 1,
  hint: false,
  limit: 5
}, {
  name: 'nonEuCountries',
  source: nonEuCountries
});

$('#country').typeahead({
  minLength: 1,
  hint: false,
  limit: 5
}, {
  name: 'allCountries',
  source: allCountries
});
