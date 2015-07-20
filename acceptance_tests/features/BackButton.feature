@BackButton
Feature: Back Button

	Scenario: Going back to Step One from Step Six
		When I go to Step Five
		And I click Back
		When I click Back	
		When I click Back
		When I click Back
		And I do not see Back