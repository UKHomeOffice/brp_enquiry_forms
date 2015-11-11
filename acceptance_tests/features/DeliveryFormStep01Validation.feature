@DeliveryForm @StepOne @Validation @DSP-54
Feature: Validation for Step 01 of the Delivery Form

	Background:
		When I go to Step One of the delivery form

	Scenario: Selecting "Continue" without doing anything else
		When I click "Continue"
		Then I see the "Have you received a letter from the Home Office?" link
		And I see "Have you received a letter from the Home Office?"

	Scenario: Selecting "Continue" having checked "Yes" but without filling in the date fields or checking the "I dont have the letter" checkbox
		When I check the "Yes" radio button
		And I click "Continue"
		Then I see the "Enter the date of the letter from the Home Office" link
		And I see "Enter the date of the letter from the Home Office"

	Scenario: Selecting Continue with text values in the date fields
		When I check the "Yes" radio button
		When I enter text values into the date field
		And I click "Continue"
		Then I see the "Date must only contain numbers" link
		And I see "Date must only contain numbers"

	Scenario: Selecting Continue with special character values in the date fields
		When I check the "Yes" radio button
		When I enter special character values into the date field
		And I click "Continue"
		Then I see the "Date must only contain numbers" link
		And I see "Date must only contain numbers"

	Scenario: Entering a future date into the date fields
		When I check the "Yes" radio button
		When I enter a future date into the date field
		And I click "Continue"
		Then I see "The date is in the future"

	Scenario: Selecting Continue with Yes and the "I dont have the letter" checkbox checked
		When I check the "Yes" radio button
		When I check the "I don't have the letter anymore" checkbox
		And I click "Continue"
		Then I am on Step Two of the delivery form