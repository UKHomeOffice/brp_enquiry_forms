@Lost/Stolen @Validation @StepSix

Feature: DSP-96 - Confirmation

	Scenario: Go to Step Six of the Lost/Stolen form from inside the UK
		Given that on step one I had selected that I am inside the UK
		Then I am on the inside the UK confirmation page

	Scenario: Go to Step Six of the Lost/Stolen form from outside the UK
		Given that on step one I had selected that I am outside the UK
		Then I am on the outside the UK confirmation page