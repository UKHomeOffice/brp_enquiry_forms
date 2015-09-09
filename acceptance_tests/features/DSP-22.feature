@DeliveryForm @Perisistance
Feature: DSP-22 Get Data to Persist
	
	# Scenario: Entering values into Step 2 and asserting that they persist in Step 4
	# 	When I go to Step Two
	# 	And I check the "No" radio button
	# 	And I fill in all the address fields
	# 	And I proceed to Step Four
	# 	And I check the "no-email" checkbox
	# 	Then I see all the values I entered in Step Two

	Scenario: Entering values in all the relevant fields and asserting that they persist in Step 5
		When I go to Step Two
		And I check the "No" radio button
		And I fill in all the address fields
		And I click "Continue"
		And I fill in all the fields
		And I click Continue
		And I add an email address
		And I proceed to Step Five
		Then I see all the values I have entered in the previous steps 

