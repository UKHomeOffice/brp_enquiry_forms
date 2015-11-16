@DeliveryForm @StepOne @DSP-15
Feature: Step 01 of the Delivery Form

	Scenario: Go to Step 01 and assert content
		When I go to Step One of the delivery form
		When I check the "Yes" radio button
		Then I am on Step One of the delivery form