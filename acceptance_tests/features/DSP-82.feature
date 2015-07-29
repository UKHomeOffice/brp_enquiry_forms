@ErrorForm @StepFive @Validation

Feature: DSP-82 Validation for Step Five of the Error form

	Background:
		When I go to Step Five of the error form

	Scenario: Attempting to proceed to Step Six without selecting a radio button
		When I click Submit
		Then I see the "Tell us if you had help to complete this form" link
		And I see "Tell us if you had help to complete this form"

	Scenario: Attempting to proceed to Step Six with just Yes selected
		When I check the "Yes" radio button
		And I click Submit
		And I see "Tell us the name of the person that helped you to complete this form"
		And I see "Tell us the name of the person that helped you to complete this form"
		And I see "Tell us the name of the organisation that helped you to complete this form"
		And I see "Tell us the name of the organisation that helped you to complete this form"

	Scenario: Attempting to proceed to Step Six with Yes selected and only Full name completed
		When I check the "Yes" radio button
		When I enter something valid in the rep name field field
		And I click Submit
		Then I see the "Tell us the name of the organisation that helped you to complete this form" link
		And I see "Tell us the name of the organisation that helped you to complete this form"

	Scenario: Attempting to proceed to Step Six with Yes selected and only Organisation completed
		When I check the "Yes" radio button
		When I enter something in the Organisation field
		And I click Submit
		Then I see the "Tell us the name of the person that helped you to complete this form" link
		And I see "Tell us the name of the person that helped you to complete this form"

	# Scenario: Filling the Full name field with numbers
	# 	When I check the "Yes" radio button
	# 	When I enter numbers into the Full name field
	# 	When I click Submit
	# 	And I see "1. Invalid Entry"
	# 	And I see "1. Invalid Entry"