@DeliveryForm @StepFive @Validation
Feature: DSP-68 Validation for Step Five

	Background:
		Given I go to Step Five

	Scenario: Attempting to proceed to Step Six without selecting a radio button
		When I click Submit
		Then I see the "Please tell us if you've had help from an organisation" link
		And I see "Please tell us if you've had help from an organisation"

	Scenario: Attempting to proceed to Step Six with just Yes selected
		When I check the "Yes" radio button
		And I click Submit
		And I see "Please tell us the full name of the representative"
		And I see "Please tell us the full name of the representative"
		And I see "Please tell us the name of the organisation"
		And I see "Please tell us the name of the organisation"

	Scenario: Attempting to proceed to Step Six with Yes selected and only Full name completed
		When I check the "Yes" radio button
		When I enter something valid in the rep name field field
		And I click Submit
		Then I see the "Please tell us the name of the organisation" link
		And I see "Please tell us the name of the organisation"

	Scenario: Attempting to proceed to Step Six with Yes selected and only Organisation completed
		When I check the "Yes" radio button
		When I enter something in the Organisation field
		And I click Submit
		Then I see the "Please tell us the full name of the representative" link
		And I see "Please tell us the full name of the representative"

	# Scenario: Filling the Full name field with numbers
	# 	When I check the "Yes" radio button
	# 	When I enter numbers into the Full name field
	# 	When I click Submit
	# 	And I see "1. Invalid Entry"
	# 	And I see "1. Invalid Entry"