@SomeoneElseForm @StepOne @Validation @NotLive
Feature: Validation for Step 01 of the Someone Else Form

	Scenario: Attempt to proceed to Step 02 after selecting the Allow someone else to collect my BRP radio button but not filling in the fields
		When I go to Step One of the someone else form
		And I check the "arrange-collection-radio-someone-else" radio button
		And I click "Continue"
		Then I see the "What is the nominee's full name?" link in the "/html/body/main/div[2]/div/div/ul/li[1]/a" xpath
		And I see the "What is the nominee's date of birth?" link in the "/html/body/main/div[2]/div/div/ul/li[2]/a" xpath
		And I see the "What is the nominee's nationality?" link in the "/html/body/main/div[2]/div/div/ul/li[3]/a" xpath
		And I see the "What is the nominee's identity document number?" link in the "/html/body/main/div[2]/div/div/ul/li[5]/a" xpath
		And I see "What is the nominee's full name?" in the "/html/body/main/div[2]/div/form/div[1]/div[1]/label/span[2]" xpath
		And I see "What is the nominee's date of birth?" in the "/html/body/main/div[2]/div/form/div[1]/fieldset/div/span" xpath
		And I see "What is the nominee's nationality?" in the "/html/body/main/div[2]/div/form/div[1]/div[2]/label/span[2]" xpath
		And I see "What is the nominee's identity document number?" in the "//*[@id="someone-else-id-number-group"]" xpath

	Scenario: Attempt to proceed to Step 02 after selecting the Change the person I requested to collect my BRP radio button but not filling in the fields
		When I go to Step One of the someone else form
		And I check the "arrange-collection-radio-change-person" radio button
		And I click "Continue"
		Then I see the "What is the nominee's full name?" link in the "/html/body/main/div[2]/div/div/ul/li[1]/a" xpath
		And I see the "What is the nominee's date of birth?" link in the "/html/body/main/div[2]/div/div/ul/li[2]/a" xpath
		And I see the "What is the nominee's nationality?" link in the "/html/body/main/div[2]/div/div/ul/li[3]/a" xpath
		And I see the "What is the nominee's identity document number?" link in the "/html/body/main/div[2]/div/div/ul/li[5]/a" xpath
		And I see "What is the nominee's full name?" in the "/html/body/main/div[2]/div/form/div[2]/div[1]/label/span[2]" xpath
		And I see "What is the nominee's date of birth?" in the "/html/body/main/div[2]/div/form/div[2]/fieldset/div/span" xpath
		And I see "What is the nominee's nationality?" in the "/html/body/main/div[2]/div/form/div[2]/div[2]/label/span[2]" xpath
		And I see "What is the nominee's identity document number?" in the "//*[@id="someone-else-id-number-group"]" xpath