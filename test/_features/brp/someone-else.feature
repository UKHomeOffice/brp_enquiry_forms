@feature @someone_else
Feature: I want someone else to collect my BRP

  Scenario: I want someone else to collect my BRP because I have a medical condition
    Given I start the 'someone-else' application journey
    Then I should be on the 'arrange' page showing 'Who would you like to nominate?'
    Then I fill 'someone-else-fullname' with 'Donald Testman'
    Then I fill the date 'someone-else-date' with '24-5-1990'
    Then I fill 'someone-else-nationality' with 'British Overseas Citizen'
    Then I check 'someone-else-id-type-eu-national-id'
    Then I fill 'someone-else-id-number' with '1234JA2345'
    Then I select 'Continue'
    Then I should be on the 'reason' page showing 'Why do you need someone else to collect your BRP?'
    Then I check 'someone-else-reason-radio-incapable'
    Then I fill 'incapable-details' text area with 'test input'
    Then I select 'Continue'
    Then I should be on the 'personal-details' page showing 'What are your personal details?'
    Then I fill 'fullname' with 'Ronald Testman'
    Then I fill the date 'date-of-birth' with '24-5-1990'
    Then I fill 'nationality' with 'British Overseas Citizen'
    Then I fill 'passport' with '1234JA2345'
    Then I select 'Continue'
    Then I should be on the 'contact-details' page showing 'How should we contact you about your BRP?'
    Then I fill 'email' with 'test@test.test'
    Then I select 'Continue'
    Then I should be on the 'confirm' page showing 'Check the details you have provided'
    Then I should see 'Details of person nominated to collect BRP' on the page
    Then I should see 'Your details' on the page
    Then I should see 'Are you completing this form on behalf of the BRP holder?' on the page

    Scenario: I need someone else to collect my BRP because I am under 18
      Given I start the 'someone-else' application journey
      Then I should be on the 'arrange' page showing 'Who would you like to nominate?'
      Then I fill 'someone-else-fullname' with 'Donald Testman'
      Then I fill the date 'someone-else-date' with '24-5-1990'
      Then I fill 'someone-else-nationality' with 'British Overseas Citizen'
      Then I check 'someone-else-id-type-eu-national-id'
      Then I fill 'someone-else-id-number' with '1234JA2345'
      Then I select 'Continue'
      Then I should be on the 'reason' page showing 'Why do you need someone else to collect your BRP?'
      Then I check 'someone-else-reason-radio-under-age'
      Then I select 'Continue'
      Then I should be on the 'personal-details' page showing 'What are your personal details?'
      Then I fill 'fullname' with 'Ronald Testman'
      Then I enter a date of birth for a 17 year old
      Then I fill 'nationality' with 'British Overseas Citizen'
      Then I fill 'passport' with '1234JA2345'
      Then I select 'Continue'
      Then I should be on the 'contact-details' page showing 'How should we contact you about your BRP?'
      Then I fill 'email' with 'test@test.test'
      Then I select 'Continue'
      Then I should be on the 'confirm' page showing 'Check the details you have provided'
      Then I should see 'Details of person nominated to collect BRP' on the page
      Then I should see 'Your details' on the page
      Then I should see 'Are you completing this form on behalf of the BRP holder?' on the page

  @validation
  Scenario: I need someone else to collect my BRP because I am under 18 but I enter an age over 18
    Given I start the 'someone-else' application journey
    Then I should be on the 'arrange' page showing 'Who would you like to nominate?'
    Then I fill 'someone-else-fullname' with 'Donald Testman'
    Then I fill the date 'someone-else-date' with '24-5-1990'
    Then I fill 'someone-else-nationality' with 'British Overseas Citizen'
    Then I check 'someone-else-id-type-eu-national-id'
    Then I fill 'someone-else-id-number' with '1234JA2345'
    Then I select 'Continue'
    Then I should be on the 'reason' page showing 'Why do you need someone else to collect your BRP?'
    Then I check 'someone-else-reason-radio-under-age'
    Then I select 'Continue'
    Then I should be on the 'personal-details' page showing 'What are your personal details?'
    Then I fill 'fullname' with 'Ronald Testman'
    Then I enter a date of birth for a 18 year old
    Then I fill 'nationality' with 'British Overseas Citizen'
    Then I fill 'passport' with '1234JA2345'
    Then I select 'Continue'
    Then I should see the 'If you are over 18 years old you can collect your own BRP' error


