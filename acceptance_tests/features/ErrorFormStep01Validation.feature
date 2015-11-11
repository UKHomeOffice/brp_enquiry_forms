@ErrorForm @Validation @StepOne
Feature: Validation for Step 01 of the Error Form

	Background: 
		When I go to Step One of the error form

	Scenario: Attempting to proceed to Step 02 of the Error Form without checking any radio buttons
		When I click "Continue"
		Then I see the "Where did you made your application from?" link
		And I see "Where did you made your application from?"