@DeliveryForm @StepTwo @Validation @DSP-65
Feature: Validation for Step 02 of the Delivery Form

	Background:
		When I go to Step Two of the delivery form

	Scenario: Attempting to proceed to Step 03 of the Delivery Form without doing anything
		When I click Continue
		Then I see the "Is your address the same as on the letter from the Home Office?" link
		And I see "Is your address the same as on the letter from the Home Office?"

	Scenario: Attempting to proceed to Step 03 of the Delivery Form have selecting the No radio button having not completed the address fields
		When I check the "No" radio button
		When I click Continue
		Then I see the "Enter your house name or number and street" link in the "/html/body/main/div[2]/div/div/ul/li[1]/a" xpath
		Then I see the "Enter the Town or City" link in the "/html/body/main/div[2]/div/div/ul/li[2]/a" xpath 
		Then I see the "Enter the postcode" link in the "/html/body/main/div[2]/div/div/ul/li[3]/a" xpath 

	Scenario: Attempting to proceed to Step 03 of the Delivery Form without filling in the first address field
		When I check the "No" radio button
		And I fill in the second address field
		And I fill in the postcode field
		When I click Continue
		Then I see the "Enter your house name or number and street" link
		And I see "Enter your house name or number and street"

	Scenario: Attempting to proceed to Step 03 of the Delivery Form without filling in the second address field
		When I check the "No" radio button
		And I fill in the first address field
		And I fill in the postcode field
		When I click Continue
		Then I see the "Enter the Town or City" link
		And I see "Enter the Town or City"
	
	Scenario: Attempting to proceed to Step 03 of the Delivery Form without filling in the postcode field
		When I check the "No" radio button
		And I fill in the first address field
		And I fill in the second address field
		When I click Continue
		Then I see the "Enter the postcode" link
		And I see "Enter the postcode"

	Scenario: Attempting to proceed to Step 03 of the Delivery Form having selected the No radio button and completing the required address fields
		When I check the "No" radio button
		And I fill in the first address field
		And I fill in the second address field
		And I fill in the postcode field
		When I click Continue
		Then I am on Step Three of the delivery form