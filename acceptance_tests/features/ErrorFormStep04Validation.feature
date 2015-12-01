@ErrorForm @StepFour @Validation
Feature: Validation for Step 04 of the Error Form

	Background:
		When I go to Step Four of the error form and have not entered my address details in Step Two

	Scenario: Attempting to proceed to Step 05 of the Error Form witout entering anything
		When I click Continue
		Then I am on Step Four of the error form
		Then I see the "Enter your full name" link in the "/html/body/main/div[2]/div/div/ul/li[1]/a" xpath
		Then I see the "Enter your date of birth" link in the "/html/body/main/div[2]/div/div/ul/li[2]/a" xpath
		Then I see the "What is your nationality?" link in the "/html/body/main/div[2]/div/div/ul/li[3]/a" xpath
		Then I see the "Enter your full name" link in the "/html/body/main/div[2]/div/form/div[1]/label/span[1]" xpath
		Then I see the "Enter your date of birth" link in the "/html/body/main/div[2]/div/form/fieldset/span" xpath
		Then I see the "What is your nationality" link in the "/html/body/main/div[2]/div/form/div[2]/label/span[1]" xpath
		Then I see the "What is your BRP card number" link in the "/html/body/main/div[2]/div/form/div[3]/label/span[1]" xpath

	Scenario: Attempting to proceed to Step 05 the Error Form without entering something in the name field
		When I enter a valid date of birth
		And I type fill in the nationality field with something valid
		And I enter something valid in the BRP card number field
		When I click Continue
		Then I am on Step Four of the error form
		Then I see the "Enter your full name" link
		And I see "Enter your full name"

	Scenario: Attempting to proceed to Step 05 the Error Form without entering anything in the date of birth fields
		When I enter something valid in the Full name field
		And I type fill in the nationality field with something valid
		And I enter something valid in the BRP card number field
		When I click Continue
		Then I am on Step Four of the error form
		Then I see the "Enter your date of birth" link
		And I see "Enter your date of birth"

	Scenario: Attempting to proceed to Step 05 the Error Form witout selecting a nationality
		When I enter something valid in the Full name field
		When I enter a valid date of birth
		When I enter something valid in the BRP card number field
		When I click Continue
		Then I am on Step Four of the error form
		Then I see the "What is your nationality?" link
		And I see "What is your nationality"

	Scenario: Attempting to proceed to Step 05 the Error Form without entering a BRP card number
		When I enter something valid in the Full name field
		When I enter a valid date of birth
		When I type fill in the nationality field with something valid
		When I click Continue
		Then I am on Step Four of the error form
		Then I see the "What is your BRP card number?" link
		And I see "What is your BRP card number"

	Scenario: Attempting to proceed to Step 05 the Error Form with text values in the Date of birth fields
		When I enter text values into the Date of birth field
		And I click "Continue"
		Then I am on Step Four of the error form
		And I see the "Date must only contain numbers" link
		And I see "Date must only contain numbers"

	Scenario: Attempting to proceed to Step 05 the Error Form with special character values in the Date of birth fields
		When I enter special character values into the Date of birth field
		And I click "Continue"
		Then I am on Step Four of the error form
		And I see the "Date must only contain numbers" link
		And I see "Date must only contain numbers"
