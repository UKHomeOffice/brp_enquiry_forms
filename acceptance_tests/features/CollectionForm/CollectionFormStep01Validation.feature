@CollectionForm @StepOne @Validation
Feature: Validation for Step 01 of the Collection Form

	Background:
		When I go to Step One of the collection form

	Scenario: Selecting "Continue" without doing anything else
		When I click "Continue"
		Then I see the "Where were you asked to collect your BRP from?" link
		And I see "Where were you asked to collect your BRP from?"

	Scenario: Entering a partial date into collection date fields
		When I enter a partial date into the collection date fields
		Then I see the "Enter the collection date" link
		And I see "Enter the collection date"