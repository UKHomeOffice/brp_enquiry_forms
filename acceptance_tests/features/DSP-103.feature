@DeliveryForm @UnhappyPath @StepOne

Feature: DSP-103 - Selecting "No" on Step One

	Background: 
		When I go to Step One

	Scenario: Selecting the No radio button on Step One
		When I check the "No" radio button
		And I click "Continue"
		Then I am on the Delivery no decision page 