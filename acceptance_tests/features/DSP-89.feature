@Lost/Stolen @Validation @StepOne

Feature: DSP-89 - Lost or stolen - user location 

	Background: 
		When I go to Step One of the Lost/Stolen form

	Scenario: Going to Step One of the Lost/Stolen form and asserting the content
		Then I am on Step One of the Lost/Stolen form

	Scenario: Attempting to proceed to the next step without checking any radio buttons
		When I click "Continue"
		Then I see the "This is a required field and must be completed" link
		And I see "This is a required field and must be completed"

	Scenario: Attempting to proceed to the next step after checking Outside UK without filling the in the Country field
		When I click the "Outside UK" radio button
		When I click "Continue"
		Then I see the "This is a required field and must be completed" link
		And I see "This is a required field and must be completed"
		
	Scenario: Attempting to proceed to the next step after checking Outside UK and filling the Country field
		When I click the "Outside UK" radio button
		And I type something valid into the Country field
		When I click "Continue"
		Then I am on Step Two of the Lost/Stolen form

	Scenario: Attempting to proceed to the next step after checking the UK radio button
		When I click the "UK" radio button
		When I click "Continue"
		Then I am on Step Two of the Lost/Stolen form