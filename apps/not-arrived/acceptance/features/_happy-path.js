'use strict';

Feature('Not Arrived - Happy path');

const yearString = () => ((new Date()).getFullYear() - 1).toString();

const values = {
  'received': 'yes',
  'no-letter': 'false',
  'delivery-date-month': '6',
  'delivery-date-year': yearString(),
  'use-address': 'true',
  'org-help': 'yes'
};

Before((
  I
) => {
  I.amOnPage('/not-arrived/letter-received');
});

Scenario('An applicaton can be completed end-to-end', (
  I
) => {
  I.completeToStep('/not-arrived/confirmation', values);
});

