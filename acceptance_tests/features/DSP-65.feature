@DeliveryForm @StepTwo @Validation
Feature: DSP-65 Validation for Step Two

	Background:
		When I go to Step Two

	Scenario: Attempting to proceed to the next step without doing anything
		When I click Continue
		Then I am on Step Two
		And I see "1. This is a required field and must be completed"
		And I see "1. This is a required field and must be completed"

	Scenario: Attempting to proceed to the next step have selecting the No radio button having not completed the address fields
		When I check the "No" radio button
		When I click Continue
		And I see "1. This is a required field and must be completed"
		And I see "1. This is a required field and must be completed"
		And I see "2. This is a required field and must be completed"
		And I see "2. This is a required field and must be completed"
		And I see "3. This is a required field and must be completed"
		And I see "3. This is a required field and must be completed"
		And I see "4. This is a required field and must be completed"
		And I see "4. This is a required field and must be completed"

	Scenario: Attempting to proceed to the next step without filling in the first address field
		When I check the "No" radio button
		And I fill in the second address field
		And I fill in the postcode field
		When I click Continue
		And I see "1. This is a required field and must be completed"
		And I see "1. This is a required field and must be completed"

	Scenario: Attempting to proceed to the next step without filling in the second address field
		When I check the "No" radio button
		And I fill in the first address field
		And I fill in the postcode field
		When I click Continue
		And I see "1. This is a required field and must be completed"
		And I see "1. This is a required field and must be completed"
	
	Scenario: Attempting to proceed to the next step without filling in the postcode field
		When I check the "No" radio button
		And I fill in the first address field
		And I fill in the second address field
		When I click Continue
		And I see "1. This is a required field and must be completed"
		And I see "1. This is a required field and must be completed"

	Scenario: Attempting to proceed having selected the No radio button and completing the required address fields
		When I check the "No" radio button
		And I fill in the first address field
		And I fill in the second address field
		And I fill in the postcode field
		When I click Continue
		Then I am on Step Three

	Scenario: Attempting to proceed having selected the Yes radio button
		When I check the "Yes" radio button
		When I click Continue
		And I see "1. This is a required field and must be completed"
		And I see "1. This is a required field and must be completed"
		And I see "2. This is a required field and must be completed"
		And I see "2. This is a required field and must be completed"
		And I see "3. This is a required field and must be completed"
		And I see "3. This is a required field and must be completed"

	Scenario: Filling the county field with invalid characters
		When fill in the postcode field with numbers
		When I click Continue
		And I see "1. Invalid Entry"
		And I see "1. Invalid Entry"

	Scenario: Filling in the postcode field with invalid characters
		And I fill in the postcode field with special characters
		When I click Continue
		And I see "1. Invalid Entry"
		And I see "1. Invalid Entry"