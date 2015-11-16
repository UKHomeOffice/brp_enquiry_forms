@LostStolenDamaged @Validation @StepOne @DSP-89
Feature: Validation for Step 01 of the Lost Stolen Damaged Form

	Background: 
		When I go to Step One of the lost stolen damaged form

	Scenario: Attempting to proceed to Step 02 of the Lost Stolen Damaged Form without checking any radio buttons
		When I click "Continue"
		Then I see the "Tell us where you are" link
		And I see "Tell us where you are"

	Scenario: Attempting to proceed to Step 02 of the Lost Stolen Damaged Form after checking Outside UK without filling the in the Country field
		When I click the "Outside UK" radio button
		When I click "Continue"
		Then I see the "Tell us where you are" link
		And I see "Tell us where you are"
		
	Scenario: Attempting to proceed to Step 02 of the Lost Stolen Damaged Form after checking Outside UK and filling the Country field
		When I click the "Outside UK" radio button
		And I type something valid into the Country field
		When I click "Continue"
		Then I am on Step Two of the lost stolen damaged form

	Scenario: Attempting to proceed to Step 02 after checking the UK radio button
		When I click the "UK" radio button
		When I click "Continue"
		Then I am on Step Two of the lost stolen damaged form