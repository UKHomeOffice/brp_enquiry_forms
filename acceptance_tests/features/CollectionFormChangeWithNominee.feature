@CollectionForm @StepThree @NomineeDetails @NotLive
Feature: Change details of Nominee

  Scenario Outline: Changing the values from Step 03 of the collection form
    When I go to Step Six of the collection form for reason-radio-others-identity
    And I click the "Change" link in the "<xpath>"
    Then I see the details I entered on the Step Three of the collection form
    And I change the details entered in Step Three of the collection form
    And I click "Continue"
    Then I see all the changes I made on Step 3 of the collection form

    Examples:
      |xpath                             |
      |/html/body/main/div[2]/div/form/table[2]/tbody/tr[1]/td[3]/a|
      |/html/body/main/div[2]/div/form/table[2]/tbody/tr[2]/td[3]/a|
      |/html/body/main/div[2]/div/form/table[2]/tbody/tr[3]/td[3]/a|
      |/html/body/main/div[2]/div/form/table[2]/tbody/tr[4]/td[3]/a|
