@Lost/Stolen @Validation @StepFive

Feature: DSP-95 - Check your details

	Background: 
		When I go to Step Five of the Lost/Stolen form

	Scenario: Going to Step Five of the Lost/Stolen form and asserting the content
		Then I am on Step Five of the Lost/Stolen form

	Scenario: Attempting to proceed to Step Six without selecting a radio button
		When I click Send
		Then I see the "This is a required field and must be completed" link
		And I see "This is a required field and must be completed"

	# Scenario: Attempting to proceed to Step Six with just Yes selected
	# 	When I check the "Yes" radio button
	# 	And I click Send
	# 	And I see "1. This is a required field and must be completed"
	# 	And I see "1. This is a required field and must be completed"
	# 	And I see "2. This is a required field and must be completed"
	# 	And I see "2. This is a required field and must be completed"
		
	Scenario: Attempting to proceed to Step Six with Yes selected and only Full name completed
		When I check the "Yes" radio button
		When I enter something valid in the Full name field
		And I click Send
		Then I see the "This is a required field and must be completed" link
		And I see "This is a required field and must be completed"

	Scenario: Attempting to proceed to Step Six with Yes selected and only Organisation completed
		When I check the "Yes" radio button
		When I enter something in the Organisation field
		And I click Send
		Then I see the "This is a required field and must be completed" link
		And I see "This is a required field and must be completed"

	# Scenario: Filling the Full name field with numbers
	# 	When I check the "Yes" radio button
	# 	When I enter numbers into the Full name field
	# 	When I click Send
	# 	And I see "1. Invalid Entry"
	# 	And I see "1. Invalid Entry"

	# Scenario: Filling the Full name field with numbers
	# 	When I check the "Yes" radio button
	# 	When I enter numbers into the Full name field
	# 	When I click Send
	# 	And I see "1. Invalid Entry"
	# 	And I see "1. Invalid Entry"