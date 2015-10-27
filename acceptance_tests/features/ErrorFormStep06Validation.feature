@ErrorForm @StepSix @Validation
Feature: Validation for Step 06 of the Error Form

	Background:
		When I go to Step Six of the error form

	Scenario: Attempting to submit the form without selecting a radio button
		When I click Send
		Then I see the "Tell us if you had help to complete this form" link
		And I see "Tell us if you had help to complete this form"

	Scenario: Attempting to submit the from with Yes selected and only Organisation completed
		When I check the "Yes" radio button
		And I click Send
		Then I see the "Tell us the name of the person that helped you to complete this form" link
		And I see "Tell us the name of the person that helped you to complete this form"