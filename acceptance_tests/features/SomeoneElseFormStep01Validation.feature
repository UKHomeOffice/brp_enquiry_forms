@SomeoneElseForm @StepOne @Validation @NotLive
Feature: Validation for Step 01 of the Someone Else Form

	Scenario: Attempt to proceed to Step 02 but not filling in the fields
		When I go to Step One of the someone else form
		And I click "Continue"
		Then I see the "What is the nominated person's full name?" link
		And I see the "What is the nominated person's date of birth?" link
		And I see the "What is the nominated person's nationality?" link
		And I see the "What is the nominated person's identity document number?" link
		And I see "What is the nominated person's full name?"
		And I see "What is the nominated person's date of birth?"
		And I see "What is the nominated person's nationality?"
		And I see "What is the nominated person's identity type?"

	Scenario: Attempt to proceed to Step 02 and nominating a child to collect the BRP
		When I go to Step One of the someone else form
		And I enter "17" years old into the Someone else DOB field
		And I click "Continue"
		Then I see "The person nominated to collect your BRP must be over 18 years old"
