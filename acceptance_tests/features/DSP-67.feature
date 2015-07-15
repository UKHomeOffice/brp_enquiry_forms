@DeliveryForm @StepFour @Validation
Feature: DSP-67 Validation for Step Four

	Background:
		Given I go to Step Four

	Scenario: Attempting to proceed to Step Five with entering an email address or ticking the checkbox
		When I click Continue
		And I see "1. This is a required field and must be completed"
		And I see "1. This is a required field and must be completed"

	Scenario: Attempting to proceed to Step Five without filling in the first address field
		When I check the I do not have an email address checkbox
		And I fill in the second address field
		And I fill in the postcode field
		When I click Continue
		And I see "1. This is a required field and must be completed"
		And I see "1. This is a required field and must be completed"

	Scenario: Attempting to proceed to Step Five without filling in the second address field
		When I check the I do not have an email address checkbox
		And I fill in the first address field
		And I fill in the postcode field
		When I click Continue
		And I see "1. This is a required field and must be completed"
		And I see "1. This is a required field and must be completed"

	Scenario: Attempting to proceed to Step Five without filling in the postcode field
		When I check the I do not have an email address checkbox
		And I fill in the first address field
		And I fill in the second address field
		When I click Continue
		And I see "1. This is a required field and must be completed"
		And I see "1. This is a required field and must be completed"

	Scenario: Entering a email address without a @
		When I enter an email address without an @
		When I click Continue
		And I see "1. Invalid Entry"
		And I see "1. Invalid Entry"

	Scenario: Filling the county field with invalid characters
		When I check the I do not have an email address checkbox
		When fill in the postcode field with numbers
		When I click Continue
		And I see "1. Invalid Entry"
		And I see "1. Invalid Entry"

	Scenario: Filling in the postcode field with invalid characters
		When I check the I do not have an email address checkbox
		And I fill in the postcode field with special characters
		When I click Continue
		And I see "1. Invalid Entry"
		And I see "1. Invalid Entry"

	Scenario: Filling the Phone number field with special characters
		When I check the I do not have an email address checkbox
		And I fill the Phone number field with special characters
		When I click Continue
		And I see "1. Invalid Entry"
		And I see "1. Invalid Entry"

	Scenario: Filling the Phone number field with text
		When I check the I do not have an email address checkbox
		And I fill the Phone number field with text
		When I click Continue
		And I see "1. Invalid Entry"
		And I see "1. Invalid Entry"