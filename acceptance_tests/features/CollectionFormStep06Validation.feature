@CollectionForm @StepSix @Validation @NotLive
Feature: Validation for Step 06 of the Collection Form

	Background:
		When I go to Step Six of the collection form

	Scenario: Attempting to proceed to Step 06 of the Delivery Form without selecting a radio button
		When I click Send
		Then I see the "Tell us if you had help to complete this form" link
		And I see "Tell us if you had help to complete this form"

	Scenario: Attempting to proceed to Step 06 of the Delivery Form with Yes selected and only Organisation completed
		When I check the "Yes" radio button
		And I click Send
		Then I see the "Tell us the name of the person that helped you to complete this form" link
		And I see "Tell us the name of the person that helped you to complete this form"