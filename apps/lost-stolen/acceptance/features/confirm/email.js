/* eslint-disable */
'use strict';

const baseUrl = require('../../../').baseUrl || '';

Feature('Lost or Stolen: Given I go to the confirm page');

const values = {
  'inside-uk': 'yes',
  'date-lost-day': '1',
  'date-lost-month': '1',
  'date-lost-year': '2017',
  fullname: 'Saad Khan',
  nationality: 'United Arab Emirates',
  'brp-card': '123'
};

Before(I => {
  I.amOnPage(`${baseUrl}`);
  I.completeToStep(`${baseUrl}/contact-details`, values);
});

Scenario('I can edit the email', I => {
  I.fillField('email', 's@email.com');
  I.click('input[type="submit"]');
  I.click('#email-change');
  I.seeInCurrentUrl('/contact-details/edit#email');
  I.fillField('email', 'b@email.com');
  I.click('input[type="submit"]');
  I.seeInCurrentUrl('/confirm');
  I.see('b@email.com');
});
