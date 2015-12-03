@CollectionForm @StepFive @Validation @NotLive
Feature: Validation for Step 05 of the Collection Form

	Background:
		When I go to Step Five of the collection form

	Scenario: Attempting to proceed to Step 05 of the Delivery Form with entering an email address or ticking the checkbox
		When I click Continue
		Then I see the "Enter your email address" link

	Scenario: Attempting to proceed to Step 05 of the Delivery Form without filling in the first address field
		When I check the I do not have an email address checkbox
		And I fill in the second contact address field
		And I fill in the contact postcode field
		When I click Continue
		Then I see the "Enter your street" link

	Scenario: Attempting to proceed to Step 05 of the Delivery Form without filling in the second address field
		When I check the I do not have an email address checkbox
		And I fill in the first contact address field
		And I fill in the contact postcode field
		When I click Continue
		Then I see the "Enter the Town or City" link

	Scenario: Attempting to proceed to Step 05 of the Delivery Form without filling in the postcode field
		When I check the I do not have an email address checkbox
		And I fill in the first contact address field
		And I fill in the second contact address field
		When I click Continue
		Then I see the "Enter the postcode" link

	Scenario: Attempting to proceed to Step 06 the Delivery Form without filling in the postcode field having entered a email address without a @
		When I enter an email address without an @
		When I click Continue
		Then I see the "Enter your email in the correct format for example, name@domain.com" link
