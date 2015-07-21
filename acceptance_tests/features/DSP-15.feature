@DeliveryForm @StepOne
Feature: DSP-15

	Scenario: Go to Step One and assert content
		When I go to Step One
		And I check the "Yes" radio button
		Then I am on Step One