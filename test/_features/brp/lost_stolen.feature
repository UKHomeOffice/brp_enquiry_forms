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
    Then I fill 'brp-card' with 'ZRX000123'
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
    Then I fill 'brp-card' with 'ZRX000123'
    Then I select 'Continue'
    Then I should be on the 'contact-details' page showing 'How should we contact you to tell you what to do next?'
    Then I fill 'email' with 'test@dtest.testemail'
    Then I select 'Continue'
    Then I should be on the 'confirm' page showing 'Check the details you have provided'
