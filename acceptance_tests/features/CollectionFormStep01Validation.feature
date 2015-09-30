@CollectionForm @StepOne @Validation
Feature: Validation for Step 01 of the Collection Form

	Background:
		When I go to Step One of the collection form

	Scenario: Selecting "Continue" without doing anything else
		When I click "Continue"
		Then I see the "Tell us where you were asked to collect your BRP from" link
		And I see "Tell us where you were asked to collect your BRP from"