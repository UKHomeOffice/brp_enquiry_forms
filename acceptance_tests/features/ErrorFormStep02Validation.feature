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
		  |error                         |link                                 |content                              |
		  |first-name-error-checkbox     |What is your correct first name?     |What is your correct first name?     |
		  |last-name-error-checkbox      |What is your correct last name?      |What is your correct last name?      |
		  |date-of-birth-error-checkbox  |Enter your date of birth             |Enter your date of birth             |
		  |birth-place-error-checkbox    |What is your correct place of birth? |What is your correct place of birth? |
		  |gender-error-checkbox         |What is your correct gender?         |What is your correct gender?         |
		  |sponsor-details-error-checkbox|What are the correct sponsor details?|What are the correct sponsor details?|
		  |nationality-error-checkbox    |What is your correct nationality?    |What is your correct nationality?    |
		  |signature-error-checkbox      |What is wrong with your signature?   |What is wrong with your signature?   |
		  |photograph-error-checkbox     |What is wrong with your photograph?  |What is wrong with your photograph?  |
		  |damaged-error-checkbox        |What is wrong with your BRP?         |What is wrong with your BRP?         |

	Scenario: Go to Step Six and clear the cookies
		When I expire the cookies
