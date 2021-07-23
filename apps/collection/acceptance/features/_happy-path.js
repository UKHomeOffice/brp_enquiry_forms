/* eslint-disable */
'use strict';

Feature('Collection - Happy path');

Before(I => {
  I.amOnPage('/collection/where');
});

Scenario('An applicaton can be completed end-to-end', I => {
  I.completeToStep('/collection/confirmation', {'org-help': 'yes'});
});
