# @DeliveryForm @ErrorPageTwo @StepOne
# Feature: DSP-56 Entering a Date less than 10 days from today's date

# Background: 
# 	When I go to Step One
# 	When I check the "Yes" radio button

# Scenario: Entering a date Nine days before today's date
# 	When I enter a date nine days before today's date
# 	And I click "Continue"
# 	Then I am on the error page
