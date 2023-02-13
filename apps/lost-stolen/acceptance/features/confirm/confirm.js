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
  'brp-card': '123',
  'phone:': '0123',
  'org-help': 'yes'
};

Before(I => {
  I.amOnPage(`${baseUrl}`);
  I.completeToStep(`${baseUrl}/confirm`, values);
});

Scenario('Then I see the date lost I entered previously', I => {
  I.see('2017-01-01', 'tr[data-id=\'date-lost\']');
});

Scenario('I can edit the full name field', I => {
  I.click('#fullname-change');
  I.seeInCurrentUrl('/personal-details/edit#fullname');
  I.fillField('fullname', 'Mo Salah');
  I.click('input[type="submit"]');
  I.seeInCurrentUrl('/confirm');
  I.see('Mo Salah', 'tr[data-id=\'fullname\']');
});

Scenario('I can edit the date of birth field', I => {
  I.click('#date-of-birth-change');
  I.seeInCurrentUrl('/personal-details/edit#date-of-birth-day');
  I.fillField('date-of-birth-day', '1');
  I.fillField('date-of-birth-month', '1');
  I.fillField('date-of-birth-year', '1980');
  I.click('input[type="submit"]');
  I.seeInCurrentUrl('/confirm');
  I.see('1980-01-01', 'tr[data-id=\'date-of-birth\']');
});

Scenario('I can edit the nationality field', I => {
  I.click('#nationality-change');
  I.seeInCurrentUrl('/personal-details/edit#nationality');
  I.fillField('nationality', 'Bangladesh');
  I.click('input[type="submit"]');
  I.seeInCurrentUrl('/confirm');
  I.see('Bangladesh', 'tr[data-id=\'nationality\']');
});

Scenario('I can edit the brp-card number field', I => {
  I.click('#brp-card-change');
  I.seeInCurrentUrl('/personal-details/edit#brp-card');
  I.fillField('brp-card', '456');
  I.click('input[type="submit"]');
  I.seeInCurrentUrl('/confirm');
  I.see('456', 'tr[data-id=\'brp-card\']');
});

Scenario('I can edit the phone number', I => {
  I.click('#phone-change');
  I.seeInCurrentUrl('/contact-details/edit#phone');
  I.fillField('phone', '456');
  I.click('input[type="submit"]');
  I.seeInCurrentUrl('/confirm');
  I.see('456', 'tr[data-id=\'phone\']');
});

Scenario('I can edit the address', I => {
  I.click('#address-change');
  I.seeInCurrentUrl('/contact-details/edit#address-group');
  I.fillField('contact-address-house-number', 'Some house');
  I.click('input[type="submit"]');
  I.seeInCurrentUrl('/confirm');
  I.see('Some house', 'tr[data-id=\'address\']');
});
