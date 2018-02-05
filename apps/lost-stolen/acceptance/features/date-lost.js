'use strict';

const baseUrl = require('../../').baseUrl || '';

Feature('Lost or Stolen: Given I go to the confirm page');

const values = {
  'inside-uk': 'yes',
  'date-lost-day': '1',
  'date-lost-month': '1',
  'date-lost-year': '2017',
  'use-address': 'true',
  'org-help': 'yes'
};

Scenario('Then I see the date lost I entered previously', (
  I
) => {
  I.amOnPage(`${baseUrl}`);
  I.completeToStep(`${baseUrl}/confirm`, values);
  I.see('2017-01-01', 'tr[data-id=\'date-lost\']');
});

