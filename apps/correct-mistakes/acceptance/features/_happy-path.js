/* eslint-disable */
'use strict';

Feature('Correct Mistakes - Happy path');

const values = {
  'first-name-error-checkbox': 'false',
  'last-name-error-checkbox': 'false',
  'date-of-birth-error-checkbox': 'false',
  'birth-place-error-checkbox': 'false',
  'gender-error-checkbox': 'true',
  'gender-error': 'unspecified',
  'sponsor-details-error-checkbox': 'false',
  'nationality-error-checkbox': 'false',
  'signature-error-checkbox': 'false',
  'photograph-error-checkbox': 'false',
  'national-insurance-error-checkbox': 'false',
  'damaged-error-checkbox': 'false',
  'conditions-error-checkbox': 'false',
  'letter-error-checkbox': 'false',
  'use-address': 'true',
  'org-help': 'yes'
};

Before(I => {
  I.amOnPage('/correct-mistakes/location');
});

Scenario('An applicaton can be completed end-to-end', I => {
  I.completeToStep('/correct-mistakes/confirmation', values);
});
