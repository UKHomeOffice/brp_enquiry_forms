@LostStolenDamagedForm @Validation @StepFour @DSP-94
Feature: Validation for Step 04 of the Lost Stolen Damaged Form

	Background:
		When I go to Step Four of the lost stolen damaged form

	Scenario: Attempting to proceed to Step 05 of the Lost Stolen Damaged Form without entering an email address or ticking the checkbox
		When I click Continue
		Then I see the "Enter your email address" link
		And I see "Enter your email address"

	Scenario: Attempting to proceed to Step 05 of the Lost Stolen Damaged Form without filling in the first address field
		When I check the I want to be contacted by post checkbox
		And I fill in the second contact address field
		And I fill in the contact postcode field
		When I click Continue
		Then I see the "Enter your street" link
		And I see "Enter your street"

	Scenario: Attempting to proceed to Step 05 of the Lost Stolen Damaged Form without filling in the second address field
		When I check the I want to be contacted by post checkbox
		And I fill in the first contact address field
		And I fill in the contact postcode field
		When I click Continue
		Then I see the "Enter the town or city" link
		And I see "Enter the town or city"

	Scenario: Attempting to proceed to Step 05 of the Lost Stolen Damaged Form without filling in the postcode field
		When I check the I want to be contacted by post checkbox
		And I fill in the first contact address field
		And I fill in the second contact address field
		When I click Continue
		Then I see the "Enter the postcode" link
		And I see "Enter the postcode"

	Scenario: Attempting to proceed to Step 05 of the Lost Stolen Damaged Form with an a email address without a @
		When I enter an email address without an @
		When I click Continue
		Then I see the "Enter your email in the correct format for example, name@domain.com" link
		And I see "Enter your email in the correct format for example, name@domain.com"
