@LostStolenDamagedForm @Validation @StepTwo @DSP-92
Feature: Validation for Step 02 of the Lost Stolen Damaged Form

	Background:
		When I go to Step Two of the lost stolen damaged form

	Scenario: Attempting to proceed to Step 03 of the Lost Stolen Damaged Form without entering anything into the date lost fields
		When I click "Continue"
		Then I see the "When did you lose or have your BRP stolen?" link
		And I see "When did you lose or have your BRP stolen?"

	Scenario: Attempting to proceed to Step 03 of the Lost Stolen Damaged Form with text values in the date lost fields
		When I enter text values into the date lost field
		And I click "Continue"
		Then I see the "Date must only contain numbers" link
		And I see "Date must only contain numbers"

	Scenario: Attempting to proceed to Step 03 of the Lost Stolen Damaged Form with special character values in the date lost fields
		When I enter special character values into the date lost field
		And I click "Continue"
		Then I see the "Date must only contain numbers" link
		And I see "Date must only contain numbers"

	Scenario: Attempting to proceed to Step 03 of the Lost Stolen Damaged Form with Yes and the correct values in the date lost fields
		When I enter a future date into the date lost field
		And I click "Continue"
		Then I see the "The date is in the future" link
		And I see "The date is in the future"