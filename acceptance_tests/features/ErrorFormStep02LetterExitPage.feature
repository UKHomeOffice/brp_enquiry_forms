@ErrorForm @StepTwo @ExitPage @Conditions @DSP-104
Feature: Conditions Exit Page for Step 02 of the Error Form

	Background:
		When I go to Step Two of the error form

	Scenario: Selecting Enrolment letter
		When I check the Enrolment letter checkbox
		And I click "Continue"
		Then I see the "Close" link
		And I am on the Enrolment letter exit page
