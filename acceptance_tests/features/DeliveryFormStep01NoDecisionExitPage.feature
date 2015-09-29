@DeliveryForm @ExitPage @StepOne @DSP-103
Feature:  No Decision Exit Page for Step 01 of the Delivery Form

	Background: 
		When I go to Step One of the delivery form

	Scenario: Selecting the No radio button on Step One
		When I check the "No" radio button
		And I click "Continue"
		Then I am on the Delivery No Decision exit page
		And I see the "Close" link