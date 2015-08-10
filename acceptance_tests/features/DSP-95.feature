@Lost/Stolen @Validation @StepFive

Feature: DSP-95 - Is the information you gave us correct?

	Background: 
		When I go to Step Five of the Lost/Stolen form

	Scenario: Attempting to proceed to Step Six without selecting a radio button
		When I click Submit
		Then I see the "Tell us if you had help to complete this form" link
		And I see "Tell us if you had help to complete this form"

	Scenario: Attempting to proceed to Step Six with Yes selected and only Organisation completed
		When I check the "Yes" radio button
		And I click Submit
		Then I see the "Tell us the name of the person that helped you to complete this form" link
		And I see "Tell us the name of the person that helped you to complete this form"