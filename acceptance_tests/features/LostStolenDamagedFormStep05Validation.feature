@LostStolenDamagedForm @Validation @StepFive @DSP-95
Feature: Validation for Step 05 of the Lost Stolen Damaged Form

	Background: 
		When I go to Step Five of the lost stolen damaged form

	Scenario: Attempting to proceed to Step 06 of the Lost Stolen Damaged Form without selecting a radio button
		When I click send
		Then I see the "Tell us if you had help to complete this form" link
		And I see "Tell us if you had help to complete this form"

	Scenario: Attempting to proceed to Step 06 of the Lost Stolen Damaged Form with Yes selected and only Organisation completed
		When I check the "Yes" radio button
		And I click send
		Then I see the "Tell us the name of the person that helped you to complete this form" link
		And I see "Tell us the name of the person that helped you to complete this form"