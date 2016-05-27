@SomeoneElseForm @StepOne @Validation @NotLive
Feature: Validation for Step 01 of the Someone Else Form

	Scenario: Attempt to proceed to Step 02 but not filling in the fields
		When I go to Step One of the someone else form
		And I click "Continue"
		Then I see the "What is the nominated person's full name?" link in the "/html/body/main/div[2]/div/div/ul/li[1]/a" xpath
		And I see the "What is the nominated person's date of birth?" link in the "/html/body/main/div[2]/div/div/ul/li[2]/a" xpath
		And I see the "What is the nominated person's nationality?" link in the "/html/body/main/div[2]/div/div/ul/li[3]/a" xpath
		And I see the "What is the nominated person's identity document number?" link in the "/html/body/main/div[2]/div/div/ul/li[5]/a" xpath
		And I see "What is the nominated person's full name?" in the "/html/body/main/div[2]/div/form/div[1]/div[1]/label/span[2]" xpath
		And I see "What is the nominated person's date of birth?" in the "/html/body/main/div[2]/div/form/div[1]/fieldset/div/span" xpath
		And I see "What is the nominated person's nationality?" in the "/html/body/main/div[2]/div/form/div[1]/div[2]/label/span[2]" xpath
		And I see "What is the nominated person's identity type?"

	Scenario: Attempt to proceed to Step 02 and nominating a child to collect the BRP
		When I go to Step One of the someone else form
		And I enter "17" years old into the Someone else DOB field
		And I click "Continue"
		Then I see "The person nominated to collect your BRP must be over 18 years old"
