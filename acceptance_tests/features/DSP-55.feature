@DeliveryForm @ErrorPageOne @StepOne
Feature: DSP-55 Selecting "No" on Step One

	Background: 
		When I go to Step One

	Scenario: Selecting the No radio button on Step One
		When I check the "No" radio button
		And I click "Continue"
		Then I am on the error page 