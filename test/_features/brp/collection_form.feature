@feature @collection_form
Feature: A user should access the collection problem service and be able to log a collection issue

  @unprovenIdentity
  Scenario: collection application to be contacted via email
    Given I start the 'collection' application journey
    Then I should be on the 'previous-submission' page showing 'Have you previously submitted this request?' 
    Then I check 'previous-submission-no'
    Then I select 'Continue'
    Then I should be on the 'where' page showing 'From where were you asked to collect your BRP?'
    Then I check 'collection-where-radio-Sponsor'
    Then I fill the date 'collection-date' with '30-5-2021'
    Then I select 'Continue'
    Then I should be on the 'reasons' page showing 'Why couldn\'t you collect your BRP?'
    Then I check 'reason-radio-non-identity'
    Then I fill 'non-identity' with 'Out of date passport'
    Then I select 'Continue'
    Then I should be on the 'personal-details' page showing 'What are your personal details?'
    Then I fill 'fullname' with 'Ronald Testman'
    Then I fill the date 'date-of-birth' with '24-5-1990'
    Then I fill 'nationality' with 'British Overseas Citizen'
    Then I fill 'passport' with '1234JA2345'
    Then I select 'Continue'
    Then I should be on the 'application-type' page showing 'What type of application have you made?'
    Then I check 'application-type-work'
    Then I select 'Continue'
    Then I should be on the 'contact-details' page showing 'How should we contact you about your BRP?'
    Then I fill 'email' with 'test@test.test'
    Then I select 'Continue'
    Then I should be on the 'confirm' page showing 'Check the details you have provided'

  @unprovenIdentity
  Scenario: collection application to be contacted via post
    Given I start the 'collection' application journey
    Then I should be on the 'previous-submission' page showing 'Have you previously submitted this request?' 
    Then I check 'previous-submission-no'
    Then I select 'Continue'
    Then I should be on the 'where' page showing 'From where were you asked to collect your BRP?'
    Then I check 'collection-where-radio-Post\ Office'
    Then I fill the date 'collection-date' with '30-5-2021'
    Then I select 'Continue'
    Then I should be on the 'reasons' page showing 'Why couldn\'t you collect your BRP?'
    Then I check 'reason-radio-non-identity'
    Then I fill 'non-identity' with 'Out of date passport'
    Then I select 'Continue'
    Then I should be on the 'personal-details' page showing 'What are your personal details?'
    Then I fill 'fullname' with 'Ronald Testman'
    Then I fill the date 'date-of-birth' with '24-5-1990'
    Then I fill 'nationality' with 'British Overseas Citizen'
    Then I fill 'passport' with '1234JA2345'
    Then I select 'Continue'
    Then I should be on the 'application-type' page showing 'What type of application have you made?'
    Then I check 'application-type-work'
    Then I select 'Continue'
    Then I should be on the 'contact-details' page showing 'How should we contact you about your BRP?'
    Then I check 'use-address'
    Then I fill 'contact-address-house-number' with '17'
    Then I fill 'contact-address-street' with 'test avenue'
    Then I fill 'contact-address-town' with 'Rotherham'
    Then I fill 'contact-address-county' with 'South Yorkshire'
    Then I fill 'contact-address-postcode' with 'RH17 5BE'
    Then I fill 'phone' with '071234567890'
    Then I select 'Continue'
    Then I should be on the 'confirm' page showing 'Check the details you have provided'

  @lostPassport
  Scenario: collection application to be contacted via post
    Given I start the 'collection' application journey
    Then I should be on the 'previous-submission' page showing 'Have you previously submitted this request?' 
    Then I check 'previous-submission-no'
    Then I select 'Continue'
    Then I should be on the 'where' page showing 'From where were you asked to collect your BRP?'
    Then I check 'collection-where-radio-Post\ Office'
    Then I fill the date 'collection-date' with '30-5-2021'
    Then I select 'Continue'
    Then I should be on the 'reasons' page showing 'Why couldn\'t you collect your BRP?'
    Then I check 'reason-radio-passport-lost'
    Then I fill 'passport-lost' with 'Stolen'
    Then I select 'Continue'
    Then I should be on the 'personal-details' page showing 'What are your personal details?'
    Then I fill 'fullname' with 'Ronald Testman'
    Then I fill the date 'date-of-birth' with '24-5-1990'
    Then I fill 'nationality' with 'British Overseas Citizen'
    Then I fill 'passport' with '1234JA2345'
    Then I select 'Continue'
    Then I should be on the 'application-type' page showing 'What type of application have you made?'
    Then I check 'application-type-work'
    Then I select 'Continue'
    Then I should be on the 'contact-details' page showing 'How should we contact you about your BRP?'
    Then I check 'use-address'
    Then I fill 'contact-address-house-number' with '17'
    Then I fill 'contact-address-street' with 'test avenue'
    Then I fill 'contact-address-town' with 'Rotherham'
    Then I fill 'contact-address-county' with 'South Yorkshire'
    Then I fill 'contact-address-postcode' with 'RH17 5BE'
    Then I fill 'phone' with '071234567890'
    Then I select 'Continue'
    Then I should be on the 'confirm' page showing 'Check the details you have provided'

  @lostPassport
  Scenario: collection application to be contacted via email
    Given I start the 'collection' application journey
    Then I should be on the 'previous-submission' page showing 'Have you previously submitted this request?' 
    Then I check 'previous-submission-no'
    Then I select 'Continue'
    Then I should be on the 'where' page showing 'From where were you asked to collect your BRP?'
    Then I check 'collection-where-radio-Sponsor'
    Then I fill the date 'collection-date' with '30-5-2021'
    Then I select 'Continue'
    Then I should be on the 'reasons' page showing 'Why couldn\'t you collect your BRP?'
    Then I check 'reason-radio-passport-lost'
    Then I fill 'passport-lost' with 'Stolen'
    Then I select 'Continue'
    Then I should be on the 'personal-details' page showing 'What are your personal details?'
    Then I fill 'fullname' with 'Ronald Testman'
    Then I fill the date 'date-of-birth' with '24-5-1990'
    Then I fill 'nationality' with 'British Overseas Citizen'
    Then I fill 'passport' with '1234JA2345'
    Then I select 'Continue'
    Then I should be on the 'application-type' page showing 'What type of application have you made?'
    Then I check 'application-type-work'
    Then I select 'Continue'
    Then I should be on the 'contact-details' page showing 'How should we contact you about your BRP?'
    Then I fill 'email' with 'test@test.test'
    Then I select 'Continue'
    Then I should be on the 'confirm' page showing 'Check the details you have provided'

  @noBrp
  Scenario: collection application to be contacted via post
    Given I start the 'collection' application journey
    Then I should be on the 'previous-submission' page showing 'Have you previously submitted this request?' 
    Then I check 'previous-submission-no'
    Then I select 'Continue'
    Then I should be on the 'where' page showing 'From where were you asked to collect your BRP?'
    Then I check 'collection-where-radio-Post\ Office'
    Then I fill the date 'collection-date' with '30-5-2021'
    Then I select 'Continue'
    Then I should be on the 'reasons' page showing 'Why couldn\'t you collect your BRP?'
    Then I check 'reason-radio-no-brp'
    Then I select 'Continue'
    Then I should be on the 'personal-details' page showing 'What are your personal details?'
    Then I fill 'fullname' with 'Ronald Testman'
    Then I fill the date 'date-of-birth' with '24-5-1990'
    Then I fill 'nationality' with 'British Overseas Citizen'
    Then I fill 'passport' with '1234JA2345'
    Then I select 'Continue'
    Then I should be on the 'application-type' page showing 'What type of application have you made?'
    Then I check 'application-type-work'
    Then I select 'Continue'
    Then I should be on the 'contact-details' page showing 'How should we contact you about your BRP?'
    Then I check 'use-address'
    Then I fill 'contact-address-house-number' with '17'
    Then I fill 'contact-address-street' with 'test avenue'
    Then I fill 'contact-address-town' with 'Rotherham'
    Then I fill 'contact-address-county' with 'South Yorkshire'
    Then I fill 'contact-address-postcode' with 'RH17 5BE'
    Then I fill 'phone' with '071234567890'
    Then I select 'Continue'
    Then I should be on the 'confirm' page showing 'Check the details you have provided'

  @noBrp
  Scenario: collection application to be contacted via email
    Given I start the 'collection' application journey
    Then I should be on the 'previous-submission' page showing 'Have you previously submitted this request?' 
    Then I check 'previous-submission-no'
    Then I select 'Continue'
    Then I should be on the 'where' page showing 'From where were you asked to collect your BRP?'
    Then I check 'collection-where-radio-Sponsor'
    Then I fill the date 'collection-date' with '30-5-2021'
    Then I select 'Continue'
    Then I should be on the 'reasons' page showing 'Why couldn\'t you collect your BRP?'
    Then I check 'reason-radio-no-brp'
    Then I select 'Continue'
    Then I should be on the 'personal-details' page showing 'What are your personal details?'
    Then I fill 'fullname' with 'Ronald Testman'
    Then I fill the date 'date-of-birth' with '24-5-1990'
    Then I fill 'nationality' with 'British Overseas Citizen'
    Then I fill 'passport' with '1234JA2345'
    Then I select 'Continue'
    Then I should be on the 'application-type' page showing 'What type of application have you made?'
    Then I check 'application-type-work'
    Then I select 'Continue'
    Then I should be on the 'contact-details' page showing 'How should we contact you about your BRP?'
    Then I fill 'email' with 'test@test.test'
    Then I select 'Continue'
    Then I should be on the 'confirm' page showing 'Check the details you have provided'


  @noBrp
  Scenario: collection application to be contacted via email
    Given I start the 'collection' application journey
    Then I should be on the 'previous-submission' page showing 'Have you previously submitted this request?' 
    Then I check 'previous-submission-no'
    Then I select 'Continue'
    Then I should be on the 'where' page showing 'From where were you asked to collect your BRP?'
    Then I check 'collection-where-radio-Sponsor'
    Then I fill the date 'collection-date' with '30-5-2021'
    Then I select 'Continue'
    Then I should be on the 'reasons' page showing 'Why couldn\'t you collect your BRP?'
    Then I check 'reason-radio-no-brp'
    Then I select 'Continue'
    Then I should be on the 'personal-details' page showing 'What are your personal details?'
    Then I fill 'fullname' with 'Ronald Testman'
    Then I fill the date 'date-of-birth' with '24-5-1990'
    Then I fill 'nationality' with 'British Overseas Citizen'
    Then I fill 'passport' with '1234JA2345'
    Then I select 'Continue'
    Then I should be on the 'application-type' page showing 'What type of application have you made?'
    Then I check 'application-type-work'
    Then I select 'Continue'
    Then I should be on the 'contact-details' page showing 'How should we contact you about your BRP?'
    Then I fill 'email' with 'test@test.test'
    Then I select 'Continue'
    Then I should be on the 'confirm' page showing 'Check the details you have provided'

  @validation
  Scenario: Collection application Personal Details not a URL validation
    Given I start the 'collection' application journey
    Then I should be on the 'previous-submission' page showing 'Have you previously submitted this request?' 
    Then I check 'previous-submission-no'
    Then I select 'Continue'
    Then I should be on the 'where' page showing 'From where were you asked to collect your BRP?'
    Then I check 'collection-where-radio-Sponsor'
    Then I fill the date 'collection-date' with '30-5-2021'
    Then I select 'Continue'
    Then I should be on the 'reasons' page showing 'Why couldn\'t you collect your BRP?'
    Then I check 'reason-radio-no-brp'
    Then I select 'Continue'
    Then I should be on the 'personal-details' page showing 'What are your personal details?'
    Then I fill 'fullname' with 'www.google.com'
    Then I fill the date 'date-of-birth' with '24-5-1990'
    Then I fill 'nationality' with 'British Overseas Citizen'
    Then I fill 'passport' with 'www.google.com'
    Then I select 'Continue'
    Then I should see 'Full name must not be a URL' on the page
    And I should see 'Passport Number must not be a URL' on the page