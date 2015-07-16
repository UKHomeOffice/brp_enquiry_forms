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
		  |error  					     |link                                                   |content                                                |
		  |first-name-error-checkbox     |First name is a required field and must be complete    |First name is a required field and must be complete    |
		  |last-name-error-checkbox	     |Last name is a required field and must be complete     |Last name is a required field and must be complete     |
		  |date-of-birth-error-checkbox  |Date of birth is a required field and must be completed|Date of birth is a required field and must be completed|
		  |birth-place-error-checkbox    |Place of birth is a required field and must be complete|Place of birth is a required field and must be complete|
		  |gender-error-checkbox         |Gender is a required field and must be complete   	 |Gender is a required field and must be complete        |
		  |sponsor-details-error-checkbox|Sponsor details is required field and must be complete |Sponsor details is required field and must be complete |
		  |nationality-error-checkbox    |Nationality is a required field and must be complete   |Nationality is a required field and must be complete   |
		  |signature-error-checkbox	     |Signature is a required field and must be complete     |Signature is a required field and must be complete     |
		  |photograph-error-checkbox	 |Photograph is a required field and must be complete    |Photograph is a required field and must be complete    |
		  |damaged-error-checkbox		 |Damaged is a required field and must be complete 	     |Damaged is a required field and must be complete       |