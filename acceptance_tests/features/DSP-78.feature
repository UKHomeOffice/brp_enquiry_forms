@ErrorForm @Validation @StepTwo

Feature: DSP-78 Validation for Step Two of the Error form

	Background:
		When I go to Step Two of the error form

	Scenario: Attempting to proceed to the next step without doing anything
		When I click Continue
		Then I am on Step Two
		Then I see the "This is a required field and must be completed" link
		And I see "This is a required field and must be completed"

	Scenario: Attempting to proceed to the next step have selecting the No radio button having not completed the address fields
		When I check the "No" radio button
		When I click Continue
		Then I see the "This is a required field and must be completed" link in the "/html/body/main/div[2]/div/div/ul/li[1]/a" xpath
		Then I see the "This is a required field and must be completed" link in the "/html/body/main/div[2]/div/div/ul/li[2]/a" xpath 
		Then I see the "This is a required field and must be completed" link in the "/html/body/main/div[2]/div/div/ul/li[3]/a" xpath
		Then I see the "This is a required field and must be completed" link in the "/html/body/main/div[2]/div/form/fieldset[2]/div[1]/label/span[1]" xpath
		Then I see the "This is a required field and must be completed" link in the "/html/body/main/div[2]/div/form/fieldset[2]/div[2]/label/span[1]" xpath 
		Then I see the "This is a required field and must be completed" link in the "/html/body/main/div[2]/div/form/fieldset[2]/div[4]/label/span[1]" xpath

	Scenario: Attempting to proceed to the next step without filling in the first address field
		When I check the "No" radio button
		And I fill in the second address field
		And I fill in the postcode field
		When I click Continue
		Then I see the "This is a required field and must be completed" link
		And I see "This is a required field and must be completed"

	Scenario: Attempting to proceed to the next step without filling in the second address field
		When I check the "No" radio button
		And I fill in the first address field
		And I fill in the postcode field
		When I click Continue
		Then I see the "This is a required field and must be completed" link
		And I see "This is a required field and must be completed"
	
	Scenario: Attempting to proceed to the next step without filling in the postcode field
		When I check the "No" radio button
		And I fill in the first address field
		And I fill in the second address field
		When I click Continue
		Then I see the "This is a required field and must be completed" link
		And I see "This is a required field and must be completed"

	Scenario: Attempting to proceed having selected the No radio button and completing the required address fields
		When I check the "No" radio button
		And I fill in the first address field
		And I fill in the second address field
		And I fill in the postcode field
		When I click Continue
		Then I am on Step Three of the error form

	Scenario: Attempting to proceed having selected the Yes radio button
		When I check the "Yes" radio button
		When I click Continue
		Then I am on Step Three of the error form

	# Scenario: Filling in the postcode field with invalid characters
	# 	And I fill in the postcode field with special characters
	# 	When I click Continue
	# 	And I see "1. Invalid Entry"
	# 	And I see "1. Invalid Entry"