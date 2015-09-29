@SomeoneElseForm @StepOne
Feature: Step 01 of the Someone Else Form

	Scenario: Go to Step 01 and assert content
		When I go to Step One of the someone else form
		Then I am on Step One of the somone else form

	Scenario: Go to Step 01 select the Allow someone else to collect my BRP radio button and assert content
		When I go to Step One of the someone else form
		And I check the "arrange-collection-radio-someone-else" radio button
		Then I see all the related content related to the Allow someone else to collect my BRP selection

	Scenario: Go to Step 01 select the Allow someone else to collect my BRP radio button and assert content
		When I go to Step One of the someone else form
		And I check the "arrange-collection-radio-change-person" radio button
		Then I see all the related content related to the Change the person I requested to collect my BRP selection