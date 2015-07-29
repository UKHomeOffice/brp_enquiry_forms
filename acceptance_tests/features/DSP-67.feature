@DeliveryForm @StepFour @Validation
Feature: DSP-67 Validation for Step Four

	Background:
		Given I go to Step Four and have not entered my address details in Step Two

	Scenario: Attempting to proceed to Step Five with entering an email address or ticking the checkbox
		When I click Continue
		Then I see the "Enter your email address" link
		And I see "Enter your email address"

	Scenario: Attempting to proceed to Step Five without filling in the first address field
		When I check the I do not have an email address checkbox
		And I fill in the second address field
		And I fill in the postcode field
		When I click Continue
		Then I see the "Enter your new house name or number and street" link
		And I see "Enter your new house name or number and street"

	Scenario: Attempting to proceed to Step Five without filling in the second address field
		When I check the I do not have an email address checkbox
		And I fill in the first address field
		And I fill in the postcode field
		When I click Continue
		Then I see the "Enter the Town or City" link
		And I see "Enter the Town or City"

	Scenario: Attempting to proceed to Step Five without filling in the postcode field
		When I check the I do not have an email address checkbox
		And I fill in the first address field
		And I fill in the second address field
		When I click Continue
		Then I see the "Enter the postcode" link
		And I see "Enter the postcode"

	Scenario: Entering a email address without a @
		When I enter an email address without an @
		When I click Continue
		Then I see the "Enter your email in the correct format for example, name@domain.com" link
		And I see "Enter your email in the correct format for example, name@domain.com"

	# Scenario: Filling in the postcode field with invalid characters
	# 	When I check the I do not have an email address checkbox
	# 	And I fill in the postcode field with special characters
	# 	When I click Continue
	# 	And I see "1. Invalid Entry"
	# 	And I see "1. Invalid Entry"