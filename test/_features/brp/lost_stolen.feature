@feature @lost_stolen
Feature: A user should be able to log a lost or stolen BRP

  Scenario: Lost brp in the UK
    Given I start the 'lost-stolen' application journey
    Then I should be on the 'where' page showing 'Where are you now?'
    Then I check 'inside-uk-yes'
    Then I select 'Continue'
    Then I should be on the 'date-lost' page showing 'When did you realise you no longer had your BRP?'
    Then I fill the date 'date-lost' with '30-05-2021'
    Then I select 'Continue'
    Then I should be on the 'personal-details' page showing 'What are your personal details?'
    Then I fill 'fullname' with 'Ronald Testman'
    Then I fill the date 'date-of-birth' with '30-05-1990'
    Then I fill 'nationality' with 'Namibia'
    Then I check 'reference-number-radio-brp-card'
    Then I fill 'brp-card-number' with 'ZRX000123'
    Then I select 'Continue'
    Then I should be on the 'contact-details' page showing 'How should we contact you to tell you what to do next?'
    Then I fill 'email' with 'test@dtest.testemail'
    Then I select 'Continue'
    Then I should be on the 'confirm' page showing 'Check the details you have provided'

  Scenario: Lost brp outside the UK
    Given I start the 'lost-stolen' application journey
    Then I should be on the 'where' page showing 'Where are you now?'
    Then I check 'inside-uk-no'
    Then I fill 'country' with 'Bahamas'
    Then I select 'Continue'
    Then I should be on the 'date-lost' page showing 'When did you realise you no longer had your BRP?'
    Then I fill the date 'date-lost' with '30-05-2021'
    Then I select 'Continue'
    Then I should be on the 'personal-details' page showing 'What are your personal details?'
    Then I fill 'fullname' with 'Ronald Testman'
    Then I fill the date 'date-of-birth' with '30-05-1990'
    Then I fill 'nationality' with 'Namibia'
    Then I check 'reference-number-radio-gwf'
    Then I fill 'gwf-number' with 'GWF012345678'
    Then I select 'Continue'
    Then I should be on the 'contact-details' page showing 'How should we contact you to tell you what to do next?'
    Then I fill 'email' with 'test@dtest.testemail'
    Then I select 'Continue'
    Then I should be on the 'confirm' page showing 'Check the details you have provided'

  @validation
  Scenario: Lost or Stolen application Personal Details not a URL validation
    Given I start the 'lost-stolen' application journey
    Then I should be on the 'where' page showing 'Where are you now?'
    Then I check 'inside-uk-no'
    Then I fill 'country' with 'Bahamas'
    Then I select 'Continue'
    Then I should be on the 'date-lost' page showing 'When did you realise you no longer had your BRP?'
    Then I fill the date 'date-lost' with '30-05-2021'
    Then I select 'Continue'
    Then I should be on the 'personal-details' page showing 'What are your personal details?'
    Then I fill 'fullname' with 'www.google.com'
    Then I select 'Continue'
    Then I should see 'Full name must not be a URL' on the page

  @validation
    Scenario: Lost or Stolen application Representative Personal Details not a URL validation
      Given I start the 'lost-stolen' application journey
      Then I should be on the 'where' page showing 'Where are you now?'
      Then I check 'inside-uk-yes'
      Then I select 'Continue'
      Then I should be on the 'date-lost' page showing 'When did you realise you no longer had your BRP?'
      Then I fill the date 'date-lost' with '30-05-2021'
      Then I select 'Continue'
      Then I should be on the 'personal-details' page showing 'What are your personal details?'
      Then I fill 'fullname' with 'Ronald Testman'
      Then I fill the date 'date-of-birth' with '30-05-1990'
      Then I fill 'nationality' with 'Namibia'
      Then I check 'reference-number-radio-none'
      Then I fill 'no-reference' with '208219821'
      Then I select 'Continue'
      Then I should be on the 'contact-details' page showing 'How should we contact you to tell you what to do next?'
      Then I fill 'email' with 'test@dtest.testemail'
      Then I select 'Continue'
      Then I should be on the 'confirm' page showing 'Check the details you have provided'
      Then I check 'org-help-yes'
      Then I should see 'We will attempt to contact the BRP holder directly. We will only use these details to contact you if needed.' on the page
      Then I fill 'rep-name' with 'www.google.com'
      Then I submit the application
      Then I should see 'Full name must not be a URL' on the page

  @validation_error
    Scenario: Lost or stolen application - Preventing user from entering a date before 31st July 2015
      Given I start the 'lost-stolen' application journey
      Then I should be on the 'where' page showing 'Where are you now?'
      Then I check 'inside-uk-yes'
      Then I select 'Continue'
      Then I should be on the 'date-lost' page showing 'When did you realise you no longer had your BRP?'
      Then I fill the date 'date-lost' with '30-07-2015'
      Then I select 'Continue'
      Then I should see the 'Enter a date from 31/07/2015' error

  @validation_error
  Scenario: BRP number validation
    Given I start the 'lost-stolen' application journey
    Then I should be on the 'where' page showing 'Where are you now?'
    Then I check 'inside-uk-yes'
    Then I select 'Continue'
    Then I should be on the 'date-lost' page showing 'When did you realise you no longer had your BRP?'
    Then I fill the date 'date-lost' with '30-05-2021'
    Then I select 'Continue'
    Then I should be on the 'personal-details' page showing 'What are your personal details?'
    Then I fill 'fullname' with 'Ronald Testman'
    Then I fill the date 'date-of-birth' with '30-05-1990'
    Then I fill 'nationality' with 'Namibia'
    Then I check 'reference-number-radio-brp-card'
    Then I fill 'brp-card-number' with 'ZR000123'
    Then I select 'Continue'
    Then I should see 'Enter your BRP number in the correct format; for example, ‘RZX123456 or RZ1234567’' on the page

  @validation_error
  Scenario: GWF number validation
    Given I start the 'lost-stolen' application journey
    Then I should be on the 'where' page showing 'Where are you now?'
    Then I check 'inside-uk-yes'
    Then I select 'Continue'
    Then I should be on the 'date-lost' page showing 'When did you realise you no longer had your BRP?'
    Then I fill the date 'date-lost' with '30-05-2021'
    Then I select 'Continue'
    Then I should be on the 'personal-details' page showing 'What are your personal details?'
    Then I fill 'fullname' with 'Ronald Testman'
    Then I fill the date 'date-of-birth' with '30-05-1990'
    Then I fill 'nationality' with 'Namibia'
    Then I check 'reference-number-radio-gwf'
    Then I fill 'gwf-number' with ''
    Then I select 'Continue'
    Then I should see 'What is your GWF number?' on the page
    Then I fill 'gwf-number' with ' 8GWF01234567'
    Then I select 'Continue'
    Then I should see the 'Enter your GWF number in the correct format; for example, ‘GWF012345678’' error

  @validation_error
  Scenario: Passport number validation
    Given I start the 'lost-stolen' application journey
    Then I should be on the 'where' page showing 'Where are you now?'
    Then I check 'inside-uk-yes'
    Then I select 'Continue'
    Then I should be on the 'date-lost' page showing 'When did you realise you no longer had your BRP?'
    Then I fill the date 'date-lost' with '30-05-2021'
    Then I select 'Continue'
    Then I should be on the 'personal-details' page showing 'What are your personal details?'
    Then I fill 'fullname' with 'Ronald Testman'
    Then I fill the date 'date-of-birth' with '30-05-1990'
    Then I fill 'nationality' with 'Namibia'
    Then I check 'reference-number-radio-none'
    Then I fill 'no-reference' with ''
    Then I select 'Continue'
    Then I should see 'What is your passport number?' on the page
