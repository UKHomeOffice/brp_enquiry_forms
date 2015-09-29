@LostStolenDamagedForm @StepSix @ConfirmationPage @DSP-96
Feature: Confirmation page of the Lost Stolen Damaged Form

	Scenario: Go to Confirmation Page of the Lost Stolen Damaged Form from inside the UK and assert content
		Given that on step one I had selected that I am inside the UK
		Then I am on the inside the UK confirmation page

	Scenario: Go to Confirmation Page of the Lost Stolen Damaged Form from outside the UK and assert content
		Given that on step one I had selected that I am outside the UK
		Then I am on the outside the UK confirmation page