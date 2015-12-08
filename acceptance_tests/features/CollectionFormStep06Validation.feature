@CollectionForm @StepSix @Validation @NotLive
Feature: Validation for Step 06 of the Collection Form

	Background:
		When I go to Step Six of the collection form

	Scenario: Attempting to proceed to Step 06 of the Delivery Form without selecting a radio button
		When I click Send
		Then I see the "Did you have help completing this form?" link
		And I see "Did you have help completing this form?"

	Scenario: Attempting to proceed to Step 06 of the Delivery Form with Yes selected and only Organisation completed
		When I check the "Yes" radio button
		And I click Send
		Then I see the "What is the name of the person who helped you complete this form?" link
		And I see "What is the name of the person who helped you complete this form?"

	Scenario: Attempting to proceed to Step 06 of the Delivery Form with an invalid representative email address
		When I check the "Yes" radio button
		And I enter a representative email address without an @
		And I click Send
		Then I see the "Enter the email in the correct format for example, name@domain.com" link
		And I see "Enter the email in the correct format for example, name@domain.com"
