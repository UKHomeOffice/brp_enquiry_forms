@ErrorForm @StepThree @Validation
Feature: Validation for Step 03 of the Error Form

	Background:
		When I go to Step Three of the error form

	Scenario: Attempting to proceed to Step 04 of the Error Form without doing anything
		When I click Continue
		Then I see the "Is your address the same as the address on the delivery letter?" link
		And I see "Is your address the same as the address on the delivery letter?"

	Scenario: Attempting to proceed to Step 04 of the Error Form have selected the No radio button having not completed the address fields
		When I check the "No" radio button
		When I click Continue
		Then I see the "Enter your street" link
		Then I see the "Enter the town or city" link
		Then I see the "Enter the postcode" link

	Scenario: Attempting to proceed to Step 04 of the Error Form having selected the No radio button and completing the required address fields
		When I check the "No" radio button
    And I fill in the address fields on the Error form
		When I click Continue
		Then I am on Step Four of the error form

	Scenario: Attempting to proceed to Step 04 of the Error Form having selected the Yes radio button
		When I check the "Yes" radio button
		When I click Continue
		Then I am on Step Four of the error form
