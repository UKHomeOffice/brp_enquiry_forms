'use strict';

var helpers = require('hmpo-frontend-toolkit').helpers;
var progressiveReveal = require('hmpo-frontend-toolkit').progressiveReveal;

helpers.documentReady(progressiveReveal);

var $ = require('jquery');
var listOfCountries = require('./countries');
var typeahead = require('typeahead.js-browserify');
var Bloodhound = require('typeahead.js-browserify').Bloodhound;

typeahead.loadjQueryPlugin();

var countries = new Bloodhound({
  datumTokenizer: Bloodhound.tokenizers.whitespace,
  queryTokenizer: Bloodhound.tokenizers.whitespace,
  local: listOfCountries
});

$('#nationality').typeahead({
  minLength: 1,
  hint: false,
  limit: 5
}, {
  name: 'countries',
  source: countries
});
