@ErrorForm @StepTwo @ExitPage @FirstNameLength
Feature: Length of First Name Exit Page for Step 02 of the Error Form

	Background:
		When I go to Step Two of the error form

	Scenario: Selecting Conditions or length of stay and selecting Yes on the first exit page
		When I check the First name checkbox
		And I type thirty one characters into the First name field
		And I click "Continue"		
		And I am on the first First name exit page	
		When I check the "Yes" radio button
		And I click "Continue"
		Then I am on the second First name exit page

	Scenario: Selecting Conditions or length of stay and selecting Yes on the first exit page
		When I check the First name checkbox
		And I type thirty one characters into the First name field
		And I click "Continue"		
		And I am on the first First name exit page	
		When I check the "No" radio button
		And I click "Continue"
		Then I am on Step Three of the error form