@CollectionForm @ChangeDetails @NotLive
Feature: Changing Delivery Form details

	Scenario: Changing the values from Step 01 of the collection form
		When I go to Step Six of the collection form
		And I click the Change link for Step One of the collection form
		Then I see the details I entered on Step One of the collection form
		When I check the "Sponsor" radio button
		And I change the values in the Date of Collection fields
		And I click "Continue"
		Then I can see all the changed personal details from Step One of the collection form

	Scenario Outline: Changing the values from Step 02 of the collection form
		When I go to Step Six of the collection form
		And I click the Change link for Step Two of the collection form
		Then I see the details I entered on the Step Two - PO of the collection form
		When I select "<another reason radio button>" on the Step Two - PO of the collection form
		And I fill in the "<fields>" with "<another collection value>" on the Step Two - PO of the collection form
		And I click "Continue"
		Then I can see "<another reason>" and "<another collection value>" on Step Six on the collection form

		Examples:
			|another reason radio button |fields 				    |another collection value|another reason    													|
			|reason-radio-non-identity	 |reason-non-identity	    |1234					 |I could not prove my identity 									|
			|reason-radio-others-identity|reason-others-identity    |5678					 |Someone attempted to collect my BRP on my behalf, but was unable to|
			|reason-radio-others-auth	 |reason-others-auth	    |1212					 |The Home Office did not authorise someone else to collect on my behalf|
			|reason-radio-passport-family|reason-passport-family    |3131					 |The vignette (sticker) in my passport is not linked to my family 				|
			|reason-radio-passport-lost  |reason-passport-lost      |8989					 |I have lost my passport 												|

	Scenario Outline: Changing the values from Step 04 of the collection form
		When I go to Step Six of the collection form
		And I click the "Change" link in the "<xpath>"
		Then I see the personal details I entered on Step Four of the collection form
		When I change the value in the Full name field
		And I change the values in the Date of birth fields
		And I change the value in the Nationality field
		And I change the value in the Passport number field
		And I click "Continue"
		Then I can see all the changed personal details from step three of the collection form

		Examples:
			|xpath													 	 |
			|/html/body/main/div[2]/div/form/table[3]/tbody/tr[1]/td[3]/a|
			|/html/body/main/div[2]/div/form/table[3]/tbody/tr[2]/td[3]/a|
			|/html/body/main/div[2]/div/form/table[3]/tbody/tr[3]/td[3]/a|

	Scenario Outline: Changing the email value from Step 05 of the collection form
		When I go to Step Six of the collection form
		And I click the "Change" link in the "<xpath>"
		Then I see email address and phone number I entered on Step Five of the collection form
		When I change the value in the Email field
		And I change the value in the Phone field
		And I click "Continue"
		Then I can see the changed email address and phone number from Step Five of the collection form

		Examples:
			|xpath													 	 |
			|/html/body/main/div[2]/div/form/table[3]/tbody/tr[4]/td[3]/a|
			|/html/body/main/div[2]/div/form/table[3]/tbody/tr[5]/td[3]/a|

	Scenario: Go to Step Six and clear the cookies
		When I go to Step Six of the collection form
		And I delete the "hmbrp.sid" cookie
