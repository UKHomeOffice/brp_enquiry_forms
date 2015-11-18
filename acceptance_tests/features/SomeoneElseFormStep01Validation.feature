@SomeoneElseForm @StepOne @Validation @NotLive
Feature: Validation for Step 01 of the Someone Else Form

	Scenario: Attempt to proceed to Step 02 after selecting the Allow someone else to collect my BRP radio button but not filling in the fields
		When I go to Step One of the someone else form
		And I check the "arrange-collection-radio-someone-else" radio button
		And I click "Continue"
		Then I see the "Tell us the nominees full name" link in the "/html/body/main/div[2]/div/div/ul/li[1]/a" xpath
		And I see the "Enter the nominees date of birth" link in the "/html/body/main/div[2]/div/div/ul/li[2]/a" xpath 
		And I see the "Tell us the nominees nationality" link in the "/html/body/main/div[2]/div/div/ul/li[3]/a" xpath 
		And I see the "Tell us the nominees identity document number" link in the "/html/body/main/div[2]/div/div/ul/li[4]/a" xpath
		And I see "Tell us the nominees full name" in the "/html/body/main/div[2]/div/form/div[1]/div[1]/label/span[2]" xpath
		And I see "Enter the nominees date of birth" in the "/html/body/main/div[2]/div/form/div[1]/fieldset/div/span" xpath
		And I see "Tell us the nominees nationality" in the "/html/body/main/div[2]/div/form/div[1]/div[2]/label/span[2]" xpath
		And I see "Tell us the nominees identity document number" in the "/html/body/main/div[2]/div/form/div[1]/div[3]/label/span[2]" xpath

	Scenario: Attempt to proceed to Step 02 after selecting the Change the person I requested to collect my BRP radio button but not filling in the fields
		When I go to Step One of the someone else form
		And I check the "arrange-collection-radio-change-person" radio button
		And I click "Continue"
		Then I see the "Tell us the nominees full name" link in the "/html/body/main/div[2]/div/div/ul/li[1]/a" xpath
		And I see the "Enter the nominees date of birth" link in the "/html/body/main/div[2]/div/div/ul/li[2]/a" xpath 
		And I see the "Tell us the nominees nationality" link in the "/html/body/main/div[2]/div/div/ul/li[3]/a" xpath 
		And I see the "Tell us the nominees identity document number" link in the "/html/body/main/div[2]/div/div/ul/li[4]/a" xpath
		And I see "Tell us the nominees full name" in the "/html/body/main/div[2]/div/form/div[2]/div[1]/label/span[2]" xpath
		And I see "Enter the nominees date of birth" in the "/html/body/main/div[2]/div/form/div[2]/fieldset/div/span" xpath
		And I see "Tell us the nominees nationality" in the "/html/body/main/div[2]/div/form/div[2]/div[2]/label/span[2]" xpath
		And I see "Tell us the nominees identity document number" in the "/html/body/main/div[2]/div/form/div[2]/div[3]/label/span[2]" xpath