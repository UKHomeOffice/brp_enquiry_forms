@ErrorForm @Validation @StepTwo
Feature: Validation for Step 02 of the Error Form

	Background:
		When I go to Step Two of the error form

	Scenario Outline: Attempting to proceed to Step 03 of the Error Form without filling in fields related to the checkboxes
		When I check the "<error>" checkbox
		When I click "Continue"
		Then I am on Step Two of the error form
        And I see the "<link>" link
        And I see "<content>"
        And I delete the "hmbrp.sid" cookie

		Examples:
		  |error  					     |link                                      |content                                   |
		  |first-name-error-checkbox     |Tell us your correct first name 			|Tell us your correct first name 		   |
		  |last-name-error-checkbox	     |Tell us your correct last name 			|Tell us your correct last name 		   |
		  |date-of-birth-error-checkbox  |Enter your date of birth 					|Enter your date of birth 				   |
		  |birth-place-error-checkbox    |Tell us your correct place of birth 		|Tell us your correct place of birth  	   |
		  |gender-error-checkbox         |Tell us your correct gender 				|Tell us your correct gender 			   |
		  |sponsor-details-error-checkbox|Tell us the correct sponsor details 		|Tell us the correct sponsor details 	   |
		  |nationality-error-checkbox    |Tell us your correct nationality 			|Tell us your correct nationality 		   |
		  |signature-error-checkbox	     |Tell us what is wrong with your signature |Tell us what is wrong with your signature |
		  |photograph-error-checkbox	 |Tell us what is wrong with your photograph|Tell us what is wrong with your photograph|
		  |damaged-error-checkbox		 |Tell us what is wrong with your BRP		|Tell us what is wrong with your BRP 	   |
		  |conditions-error-checkbox     |Tell us about the problem                 |Tell us about the problem                 |