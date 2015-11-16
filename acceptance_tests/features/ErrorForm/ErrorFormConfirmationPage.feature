@ErrorForm @ConfirmationPage
Feature: Confirmation page of the Error Form

	Scenario: Go to the Confirmation Page of the Error Form and assert content
		When I go to the Confirmation page of the error form
		Then I am on Confirmation page of the error form


	Scenario Outline: Go to Step 06 via each problem with a singular field
		When I go to Step Two of the error form
		# When I wait for 60 seconds
		When I check the "<error>" checkbox
		And fill the "<field>" with the value "<value>"
		And I go through the rest of the steps
		Then I am on Confirmation page of the error form

		Examples:
		  |error  					        |field                   |value 										|
		  |first-name-error-checkbox        |first-name-error        |Mister										|
		  |last-name-error-checkbox	        |last-name-error         |Resonable									    |
		  |birth-place-error-checkbox       |birth-place-error       |Pyongyang	                                    |
		  |sponsor-details-error-checkbox   |sponsor-details-error   |1234567890                                    |	
		  |nationality-error-checkbox       |nationality-error       |Korea, North (Democratic People's Republic of)|
		  |signature-error-checkbox	        |signature-error         |Its not mine 								    |
		  |national-insurance-error-checkbox|national-insurance-error|1234567890                                    |
		  |photograph-error-checkbox	    |photograph-error        |Its not me                                    |
		  |damaged-error-checkbox		    |damaged-error           |Its not shiny anymore...		                |

	Scenario Outline: Go to Step 06 via each gender selection
		When I go to Step Two of the error form
		When I check the "<error>" checkbox
		And I select the "<radio button>"
		And I go through the rest of the steps
		Then I am on Confirmation page of the error form

		Examples:
		  |error  					        |radio button            |
		  |gender-error-checkbox	        |gender-error-female     |
		  |gender-error-checkbox	        |gender-error-male       |
		  |gender-error-checkbox	        |gender-error-unspecified|

	Scenario: Go to Step 06 with a date of birth selection 
		When I go to Step Two of the error form
		And I check the date of bith checkbox
		And I fill in the date of birth fields
		And I go through the rest of the steps
		Then I am on Confirmation page of the error form

