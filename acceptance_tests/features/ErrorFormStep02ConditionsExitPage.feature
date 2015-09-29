@ErrorForm @StepTwo @ExitPage @Conditions @DSP-104
Feature: Conditions Exit Page for Step 02 of the Error Form

	Background:
		When I go to Step Two of the error form

	Scenario: Selecting Conditions or length of stay
		When I check the Conditions or lenth of stay checkbox
		And I type something into the Conditions or length of the stay field
		And I click "Continue"		
		Then I see the "Close" link
		And I am on the Error Conditons or Length of stay exit page