@ErrorForm @StepOne @Validation
Feature: DSP-76 Validation for Step One of the Error form

	Background: 
		Given I go to Step One of the error form

	Scenario: Attempting to proceed to Step Two without checking any boxes
		When I click "Continue"
		Then I am on Step One of the error form

	Scenario Outline: Attempting to proceed to the next step without filling in fields related to the checkboxes
		When I check the "<error>" checkbox
		When I click "Continue"
		Then I am on Step One of the error form
        And I see the "<link>" link
        And I see "<content>"

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