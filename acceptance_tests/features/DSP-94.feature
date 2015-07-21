@Lost/Stolen @Validation @StepFour

Feature: DSP-94 - Contact details

	Background: 
		When I go to Step Four of the Lost/Stolen form

	Scenario: Going to Step Four of the Lost/Stolen form and asserting the content
		Then I am on Step Four of the Lost/Stolen form

	Scenario: Attempting to proceed to Step Five with entering an email address or ticking the checkbox
		When I click Continue
		Then I see the "This is a required field and must be completed" link
		And I see "This is a required field and must be completed"

	Scenario: Attempting to proceed to Step Five without filling in the first address field
		When I check the I do not have an email address checkbox
		And I fill in the second address field
		And I fill in the postcode field
		When I click Continue
		Then I see the "This is a required field and must be completed" link
		And I see "This is a required field and must be completed"

	Scenario: Attempting to proceed to Step Five without filling in the second address field
		When I check the I do not have an email address checkbox
		And I fill in the first address field
		And I fill in the postcode field
		When I click Continue
		Then I see the "This is a required field and must be completed" link
		And I see "This is a required field and must be completed"

	Scenario: Attempting to proceed to Step Five without filling in the postcode field
		When I check the I do not have an email address checkbox
		And I fill in the first address field
		And I fill in the second address field
		When I click Continue
		Then I see the "This is a required field and must be completed" link
		And I see "This is a required field and must be completed"

	Scenario: Entering a email address without a @
		When I enter an email address without an @
		When I click Continue
		Then I see the "Must be a valid email address" link
		And I see "Must be a valid email address"