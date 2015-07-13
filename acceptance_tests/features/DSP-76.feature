@ErrorForm @StepOne @Validation
Feature: Validation for Step One of the Error form

	Background: 
		Given I go to Step One of the error form

	Scenario: Attempting to proceed to Step Two without checking any boxes
		When I click "Continue"
		Then I am on Step One of the error form

	Scenario Outline: Attempting to proceed to the next step without filling in fields related to the checkboxes
		When I check the "<error>" checkbox
		When I click "Continue"
		Then I am on Step One of the error form

		Examples:
		  |error  						 |
		  |first-name-error-checkbox	 |
		  |last-name-error-checkbox		 |
		  |birth-place-error-checkbox	 |
		  |date-of-birth-error-checkbox	 |
		  |gender-error-checkbox		 |
		  |sponsor-details-error-checkbox|
		  |nationality-error-checkbox	 |
		  |signature-error-checkbox	 	 |
		  |photograph-error-checkbox	 |
		  |damaged-error-checkbox		 |
		  |conditions-error-checkbox	 |

  # 	Scenario Outline: Attempting to proceed to Step Two with numbers in the name fields
  # 		When I check the <error> checkbox
  # 		And I type <value> into the <field> field
		# When I click "Continue"
		# Then I am still on Step One of the Error form

		# Examples:
		#   |error  					 |value |field			  |
		#   |first-name-error-checkbox |123456|first-name-error |
		#   |last-name-error-checkbox	 |123456|last-name-error  |
		#   |first-name-error-checkbox |!@£$  |first-name-error |
		#   |last-name-error-checkbox	 |!@£$  |last-name-error  |
		#   |birth-place-error-checkbox|123456|birth-place-error|
