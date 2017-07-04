'use strict';

Feature('Lost or Stolen - Happy path');

const values = {
  'inside-uk': 'yes',
  'use-address': 'true',
  'org-help': 'yes'
};

Before((
  I
) => {
  I.amOnPage('/lost-stolen/where');
});

Scenario('An applicaton can be completed end-to-end', (
  I
) => {
  I.completeToStep('/lost-stolen/confirmation', values);
});

