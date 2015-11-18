@SomeoneElseForm @StepTwo @NotLive
Feature: Step 02 of the Someone Else Form

	Scenario: Go to Step 02 and assert content
		When I go to Step Two of the someone else form
		Then I am on Step Two of the somone else form

	Scenario: Go to Step 02 select the I am physically or mentally incapable radio button and assert content
		When I go to Step Two of the someone else form
		And I click the "someone-else-reason-radio-incapable" radio button
		Then I see the related content