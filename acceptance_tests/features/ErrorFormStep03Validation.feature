@ErrorForm @StepThree @Validation
Feature: Validation for Step 03 of the Error Form

	Background:
		When I go to Step Three of the error form

	Scenario: Attempting to proceed to Step 04 of the Error Form without doing anything
		When I click Continue
		Then I see the "Do you have a UK address?" link
		And I see "Do you have a UK address?"

	Scenario: Attempting to proceed to Step 04 of the Error Form have selecting the Yes radio button having not completed the address fields
		When I check the "Yes" radio button
		When I click Continue
		Then I see the "Enter your house name or number and street" link in the "/html/body/main/div[2]/div/div/ul/li[1]/a" xpath
		Then I see the "Enter the Town or City" link in the "/html/body/main/div[2]/div/div/ul/li[2]/a" xpath
		Then I see the "Enter the postcode" link in the "/html/body/main/div[2]/div/div/ul/li[3]/a" xpath

	# Scenario: Attempting to proceed to Step 04 of the Error Form without filling in the first address field
	# 	When I check the "Yes" radio button
	# 	And I fill in the second address field on Step Four of the Error form 
	# 	And I fill in the postcode field on Step Four of the Error form 
	# 	When I click Continue
	# 	# And I wait for 30 seconds
	# 	Then I see the "Enter your house name or number and street" link
	# 	And I see "Enter your house name or number and street"

	# Scenario: Attempting to proceed to Step 04 of the Error Form without filling in the second address field
	# 	When I check the "Yes" radio button
	# 	And I fill in the first address field on Step Four of the Error form 
	# 	And I fill in the postcode field on Step Four of the Error form 
	# 	When I click Continue
	# 	Then I see the "Enter the Town or City" link in the "/html/body/main/div[2]/div/div/ul/li/a" xpath 
	# 	And I see "Enter the Town or City"
	
	# Scenario: Attempting to proceed to Step 04 of the Error Form without filling in the postcode field
	# 	When I check the "Yes" radio button
	# 	And I fill in the first address field on Step Four of the Error form 
	# 	And I fill in the second address field on Step Four of the Error form 
	# 	When I click Continue
	# 	Then I see the "Enter the postcode" link in the "/html/body/main/div[2]/div/div/ul/li/a" xpath
	# 	And I see "Enter the postcode"

	Scenario: Attempting to proceed to Step 04 of the Error Form having selected the Yes radio button and completing the required address fields
		When I check the "Yes" radio button
		And I fill in the first address field on Step Four of the Error form 
		And I fill in the second address field on Step Four of the Error form 
		And I fill in the postcode field on Step Four of the Error form 
		When I click Continue
		Then I am on Step Four of the error form

	Scenario: Attempting to proceed to Step 04 of the Error Form having selected the Yes radio button
		When I check the "No" radio button
		When I click Continue
		Then I am on Step Four of the error form