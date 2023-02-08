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
    Then I check 'has-email-radio-true'
    Then I fill 'contact-details-email' with 'test@test.test'
    Then I select 'Continue'
    Then I should be on the 'confirm' page showing 'Check the details you have provided'
    Then I should see 'Details of person nominated to collect BRP' on the page
    Then I should see 'Your details' on the page
    Then I should see 'Are you completing this form on behalf of the BRP holder?' on the page
    And I should see 'test@test.test' on the page

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
    Then I check 'has-email-radio-true'
    Then I fill 'contact-details-email' with 'test@test.test'
    Then I select 'Continue'
    Then I should be on the 'confirm' page showing 'Check the details you have provided'
    Then I should see 'Details of person nominated to collect BRP' on the page
    Then I should see 'Your details' on the page
    Then I should see 'Are you completing this form on behalf of the BRP holder?' on the page
    And I should see 'test@test.test' on the page

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

  @validation
  Scenario: Someone Else Application Nominated Persons Personal Details not a URL validation
    Given I start the 'someone-else' application journey
    Then I should be on the 'arrange' page showing 'Who would you like to nominate?'
    Then I fill 'someone-else-fullname' with 'www.google.com'
    Then I fill 'someone-else-id-number' with 'www.google.com'
    Then I select 'Continue'
    Then I should see 'The nominatated person\'s identity document number must not be a URL' on the page
    And I should see 'The nominated person\'s name must not be a URL' on the page

  @validation
  Scenario: Someone Else Application Personal Details not a URL validation
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
    Then I fill 'fullname' with 'www.google.com'
    Then I fill 'passport' with 'www.google.com'
    Then I select 'Continue'
    Then I should see 'Full name must not be a URL' on the page
    And I should see 'Passport number must not be a URL' on the page

  @validation
  Scenario: Someone Else Application Representative Personal Details not a URL validation
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
    Then I check 'has-email-radio-true'
    Then I fill 'contact-details-email' with 'test@test.test'
    Then I select 'Continue'
    Then I should be on the 'confirm' page showing 'Check the details you have provided'
    Then I should see 'Details of person nominated to collect BRP' on the page
    Then I should see 'Your details' on the page
    Then I should see 'Are you completing this form on behalf of the BRP holder?' on the page
    Then I check 'org-help-yes'
    Then I should see 'We will attempt to contact the BRP holder directly. We will only use these details to contact you if needed.' on the page
    Then I fill 'rep-name' with 'www.google.com'
    Then I submit the application
    Then I should see 'Full name must not be a URL' on the page