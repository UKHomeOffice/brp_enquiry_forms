@Lost/Stolen @Validation @StepTwo

Feature: DSP-92 Date the card became lost or stolen Personal details

	Background: 
		When I go to Step Two of the Lost/Stolen form

	Scenario: Going to Step Two of the Lost/Stolen form and asserting the content
		Then I am on Step Two of the Lost/Stolen form

	Scenario: Attempting to proceed to Step Three without entering anything into the date lost fields
		When I click "Continue"
		Then I see the "This is a required field and must be completed" link
		And I see "This is a required field and must be completed"

	Scenario: Selecting Continue with text values in the date lost fields
		When I enter text values into the date lost field
		And I click "Continue"
		Then I see the "Date must only contain numbers" link
		And I see "Date must only contain numbers"

	Scenario: Selecting Continue with special character values in the date lost fields
		When I enter special character values into the date lost field
		And I click "Continue"
		Then I see the "Date must only contain numbers" link
		And I see "Date must only contain numbers"

	Scenario: Selecting Continue with Yes and the correct values in the date lost fields
		When I enter a future date into the date lost field
		And I click "Continue"
		Then I see the "Date cannot be in the future" link
		And I see "Date cannot be in the future"

	Scenario: Attempting to proceed to Step Three with valid values in the lost fields
		When I enter valid values into the date lost fields
		And I click "Continue"
		Then I am on Step Three of the Lost/Stolen form