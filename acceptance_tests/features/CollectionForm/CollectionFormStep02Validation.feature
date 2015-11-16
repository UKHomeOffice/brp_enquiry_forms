@CollectionForm @StepTwo @Validation
Feature: Validation for Step 02 of the Collection Form

	Scenario: Selecting "Continue" without doing anything else on the Post Office page
		When I go to Step Two - PO of the collection form
		When I click "Continue"
		Then I see the "Select a reason why you couldn't collect your BRP" link
		And I see "Select a reason why you couldn't collect your BRP"

	Scenario: Selecting "Continue" without doing anything else on the Sponsor page
		When I go to Step Two - Sponsor of the collection form
		When I click "Continue"
		Then I see the "Select a reason why you couldn't collect your BRP" link
		And I see "Select a reason why you couldn't collect your BRP"