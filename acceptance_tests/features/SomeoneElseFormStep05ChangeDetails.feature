@SomeoneElseForm @ChangeDetails @NotLive
Feature: Changing Someone Else Form details

	Scenario Outline: Changing the values from Step 01 of the Someone Else form
		When I go to Step Five of the someone else form
		And I click the "Change" link in the "<xpath>"
		Then I see the personal details I entered on Step One of the Someone Else form
		When I change the nominated person values
		And I click "Continue"
		Then I see the changes I made in Step one of the Someone Else form

		Examples:
			|xpath													  	 |
			|/html/body/main/div/div/form/table[1]/tbody/tr[2]/td[3]/a|
			|/html/body/main/div/div/form/table[1]/tbody/tr[3]/td[3]/a|
			|/html/body/main/div/div/form/table[1]/tbody/tr[4]/td[3]/a|
			|/html/body/main/div/div/form/table[1]/tbody/tr[5]/td[3]/a|

	Scenario Outline: Changing the values from Step 03 of the Someone Else form
		When I go to Step Five of the someone else form
		And I click the "Change" link in the "<xpath>"
		Then I see the details I entered on the Step Three of the Someone Else form
		And I change the details entered in Step Three of the Someone Else form
		And I click "Continue"
		Then I see all the changes I made on Step Three of the Someone Else form

	Examples:
		|xpath 														 |
		|/html/body/main/div/div/form/table[2]/tbody/tr[1]/td[3]/a|
		|/html/body/main/div/div/form/table[2]/tbody/tr[2]/td[3]/a|
		|/html/body/main/div/div/form/table[2]/tbody/tr[3]/td[3]/a|
		|/html/body/main/div/div/form/table[2]/tbody/tr[3]/td[3]/a|

	Scenario Outline: Changing the email value from Step 05 of the Someone Else form
		When I go to Step Five of the someone else form
		And I click the "Change" link in the "<xpath>"
		Then I see email address and phone number I entered on Step Four of the Someone Else form
		When I change the value in the Email field
		And I change the value in the Phone field
		And I click "Continue"
		Then I can see the changed email address and phone number from Step Five of the Someone Else form

		Examples:
			|xpath													 	 |
			|/html/body/main/div/div/form/table[2]/tbody/tr[5]/td[3]/a|
			|/html/body/main/div/div/form/table[2]/tbody/tr[6]/td[3]/a|