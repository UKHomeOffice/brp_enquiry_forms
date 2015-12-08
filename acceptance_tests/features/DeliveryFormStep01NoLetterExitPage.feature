@DeliveryForm @ExitPage @StepOne @DSP-103
Feature:  No Letter Exit Page for Step 01 of the Delivery Form

  Background:
    When I go to Step One of the delivery form

  Scenario: Selecting the I don't have the letter checkbox on Step One
    When I check the "Yes" radio button
    And I check the "I don't have the letter" checkbox
    And I click "Continue"
    Then I am on the Delivery No Letter exit page
    And I see the "Close" link
