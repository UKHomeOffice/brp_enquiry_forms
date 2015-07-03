@StepOne @Validation
Feature: DSP-54 Validation for Step One

	Scenario: Selecting "Continue" without doing anything else
		Given I go to Step One
		When I click "Continue"
		Then I am on Step One
		And I see "1. This is a required field and must be completed"
		And I see "1. This is a required field and must be completed"

	Scenario: Selecting "Continue" having checked "Yes" but without filling in the date fields or checking the "I dont have the letter" checkbox
		Given I go to Step One
		When I check the "Yes" radio button
		And I click "Continue"
		Then I am on Step One
		And I see "1. This is a required field and must be completed"
		And I see "1. This is a required field and must be completed"
		And I see "2. This is a required field and must be completed"
		And I see "2. This is a required field and must be completed"

	Scenario: Selecting Continue with text values in the date fields
		Given I go to Step One
		When I enter text values into the date field
		And I click "Continue"
		Then I am on Step One
		Then I see "1. Please enter the date as day, month and year."
		And I see "1. Please enter the date as day, month and year."

	Scenario: Selecting Continue with special character values in the date fields
		Given I go to Step One
		When I enter special character values into the date field
		And I click "Continue"
		Then I am on Step One
		Then I see "1. Please enter the date as day, month and year."
		And I see "1. Please enter the date as day, month and year."

	Scenario: Selecting Continue with Yes and the correct values in the date fields
		Given I go to Step One
		When I enter the correct values into the date field
		And I click "Continue"
		Then I am on Step Two

	Scenario: Selecting Continue with Yes and the "I dont have the letter" checkbox checked
		Given I go to Step One
		When I check the "Yes" radio button
		When I check the "I don't have the letter anymore" checkbox
		Then I am on Step Two