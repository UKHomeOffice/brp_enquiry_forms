@ErrorForm @ChangeDetails
Feature: Changing Error Form details

	Scenario Outline: Changing the values from Step 02 of the Error form
		When I go to Step Two of the error form
		When I check the "<error>" checkbox
		And fill the "<field>" with the value "<value>"
		And I go through to Step Six of the error form
		And I click the "Change" link in the "/html/body/main/div/div/form/table[1]/tbody/tr/td[3]/a"
		When I fill the "<field>" with "<another value>"
		And I click "Continue"
		Then I see "<another value>" on Step Six of the error form

	Examples:
		|error  					        |field                   |value 										|another value|
		|first-name-error-checkbox          |first-name-error        |Mister										|something    |
		|last-name-error-checkbox	        |last-name-error         |Resonable									    |something2   |
		|birth-place-error-checkbox         |birth-place-error       |Pyongyang	                                    |something3   |
		|sponsor-details-error-checkbox     |sponsor-details-error   |1234567890                                    |something4   |
		|nationality-error-checkbox         |nationality-error       |Korea, North (Democratic People's Republic of)|Korea, South (Republic of Korea)|
		|signature-error-checkbox	        |signature-error         |Its not mine 								    |something6   |
	# 	# |national-insurance-error-checkbox  |national-insurance-error|1234567890                                    |something7   |
		|photograph-error-checkbox	        |photograph-error        |Its not me                                    |something8   |
		|damaged-error-checkbox		        |damaged-error           |Its not shiny anymore...		                |something8   |

	Scenario Outline: Changing the values from Step 03 of the Error form
		When I go to Step Six of the error form
		And I click the "Change" link in the "<xpath>"
		Then I see the personal details I entered on Step Four of the error form
		When I change the value in the Full name field
		And I change the values in the Date of birth fields
		And I change the value in the Nationality field
		And I change the value in the BRP card number field
		And I click "Continue"
		Then I can see all the changed personal details from Step Four of the error form

		Examples:
			|xpath													  	 |
			|/html/body/main/div/div/form/table[3]/tbody/tr[1]/td[3]/a|
			|/html/body/main/div/div/form/table[3]/tbody/tr[2]/td[3]/a|
			|/html/body/main/div/div/form/table[3]/tbody/tr[3]/td[3]/a|
			|/html/body/main/div/div/form/table[3]/tbody/tr[4]/td[3]/a|

	Scenario Outline: Changing the email value from Step 04 of the Error form
		When I go to Step Six of the error form
		And I click the "Change" link in the "<xpath>"
		Then I see email address and phone number I entered on Step Five of the error form
		When I change the value in the Email field
		And I change the value in the Phone field
		And I click "Continue"
		Then I can see the changed email address and phone number from Step Five of the error form

		Examples:
			|xpath													  	 |
			|/html/body/main/div/div/form/table[3]/tbody/tr[5]/td[3]/a|
			|/html/body/main/div/div/form/table[3]/tbody/tr[6]/td[3]/a|

	Scenario: Changing the address values from Step 05 of the Error form
		Given I have provided a contact address and I am on Step Five of the error form
		And I click the "Change" link in the "/html/body/main/div/div/form/table/tbody/tr[4]/td[3]/a"
		Then I see the contact address I entered on Step Five of the error form
		When I change the value in the House name field of Step Four of the error form
		And I change the value in the Town/City field of Step Four of the error form
		And I change the value in the County field of Step Four of the error form
		And I change the value in the Postcode field of Step Four of the error form
		And I click "Continue"
		And I can see all the changed address from step four of the error form
