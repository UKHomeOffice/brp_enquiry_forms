'use strict';

Feature('Someone Else - Happy path');

const yearString = () => ((new Date()).getFullYear() - 1).toString();

const values = {
  'date-of-birth-day': '1',
  'date-of-birth-month': '1',
  'date-of-birth-year': yearString(),
  'use-address': 'true',
  'org-help': 'yes'
};

Before((
  I
) => {
  I.amOnPage('/someone-else/');
});

Scenario('An applicaton can be completed end-to-end', (
  I
) => {
  I.completeToStep('/someone-else/confirmation', values);
});

