@CollectionForm @StepFour @Validation
Feature: Validation for Step 04 of the Collection Form

	Background:
		When I go to Step Four of the collection form

	Scenario: Selecting "Continue" without filling in the required fields
		When I click "Continue"
		Then I see the "Enter your full name" link in the "/html/body/main/div[2]/div/div/ul/li[1]/a" xpath
		Then I see the "Enter your date of birth" link in the "/html/body/main/div[2]/div/div/ul/li[2]/a" xpath 
		Then I see the "Tell us your nationality" link in the "/html/body/main/div[2]/div/div/ul/li[3]/a" xpath 
		Then I see "Enter your full name" in the "/html/body/main/div[2]/div/form/div[1]/label/span[1]" xpath
		Then I see "Enter your date of birth" in the "/html/body/main/div[2]/div/form/fieldset/span" xpath 
		Then I see "Tell us your nationality" in the "/html/body/main/div[2]/div/form/div[2]/label/span[1]" xpath 