@DeliveryForm @StepThree @Validation
Feature: DSP-66 Validation for Step Three

	Background:
		Given I go to Step Three

	Scenario: Attempting to proceed to Step Four witout entering anything
		When I click Continue
		And I see "1. This is a required field and must be completed"
		And I see "1. This is a required field and must be completed"
		And I see "2. This is a required field and must be completed"
		And I see "2. This is a required field and must be completed"
		And I see "3. This is a required field and must be completed"
		And I see "3. This is a required field and must be completed"

	Scenario: Attempting to proceed to Step Four without entering something in the name field
		When I enter a valid date of birth
		And I type fill in the nationality field with something valid
		When I click Continue
		And I see "1. This is a required field and must be completed"
		And I see "1. This is a required field and must be completed"

	Scenario: Attempting to proceed to Step Four without entering anything in the date of birth fields
		When I enter something valid in the Full name field
		And I type fill in the nationality field with something valid
		When I click Continue
		And I see "1. This is a required field and must be completed"
		And I see "1. This is a required field and must be completed"

	Scenario: Attempting to proceed to Step Four witout selecting a nationality
		When I enter something valid in the Full name field
		When I enter a valid date of birth
		When I click Continue
		And I see "1. This is a required field and must be completed"
		And I see "1. This is a required field and must be completed"

	Scenario: Filling the Full name field with numbers
		When I enter numbers into the Full name field
		When I click Continue
		And I see "1. Invalid Entry"
		And I see "1. Invalid Entry"

	Scenario: Filling the Passport number field with numbers
		When I enter special character values into the Passport number field
		When I click Continue
		And I see "1. Invalid Entry"
		And I see "1. Invalid Entry"

	Scenario: Selecting Continue with text values in the Date of birth fields
		When I enter text values into the Date of birth field
		And I click "Continue"
		Then I am on Step One
		Then I see "1. Please enter the date as day, month and year."
		And I see "1. Please enter the date as day, month and year."

	Scenario: Selecting Continue with special character values in the Date of birth fields
		When I enter special character values into the Date of birth field
		And I click "Continue"
		Then I am on Step One
		Then I see "1. Please enter the date as day, month and year."
		And I see "1. Please enter the date as day, month and year."