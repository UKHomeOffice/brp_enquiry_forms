@CollectionForm @StepThree @Validation @NotLive
Feature: Validation for Step 03 of the Collection Form

	Background:
		When I go to Step Three of the collection form

	Scenario: Selecting "Continue" without filling in the required fields
		When I click "Continue"
		Then I see the "What is the nominee's full name?" link in the "/html/body/main/div[2]/div/div/ul/li[1]/a" xpath
		Then I see the "What is the nominee's date of birth?" link in the "/html/body/main/div[2]/div/div/ul/li[2]/a" xpath
		Then I see the "What is the nominee's nationality?" link in the "/html/body/main/div[2]/div/div/ul/li[3]/a" xpath
		Then I see the "What is the nominee's identity document number?" link in the "/html/body/main/div[2]/div/div/ul/li[4]/a" xpath
		Then I see "What is the nominee's full name?" in the "/html/body/main/div[2]/div/form/div[1]/label/span[1]" xpath
		Then I see "What is the nominee's date of birth?" in the "/html/body/main/div[2]/div/form/fieldset/div/span" xpath
		Then I see "What is the nominee's nationality?" in the "/html/body/main/div[2]/div/form/div[2]/label/span[2]" xpath
		Then I see "What is the nominee's identity document number?" in the "/html/body/main/div[2]/div/form/div[3]/label/span[2]" xpath