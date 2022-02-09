@feature @correct_mistakes
Feature: A user should access the correct mistakes service and be able to log an issue

  @in_uk
  Scenario: correct mistakes on brp form within the uk
    Given I start the 'correct-mistakes' application journey
    Then I should be on the 'location' page showing 'Where did you apply for your visa?'
    Then I check 'location-applied-yes'
    Then I select 'Continue'
    Then I should be on the 'about-error' page showing 'What’s the problem with your BRP?'
    Then I check 'last-name-error-checkbox'
    Then I fill 'last-name-error' with 'Testman'
    Then I select 'Continue'
    Then I should be on the 'same-address' page showing 'Is your address the same as the address on the delivery letter?'
    Then I check 'same-address-radio-yes'
    Then I select 'Continue'
    Then I should be on the 'personal-details' page showing 'How do your personal details appear on your BRP?'
    Then I fill 'fullname' with 'Ronald Testman'
    Then I fill the date 'date-of-birth' with '30-05-1990'
    Then I fill 'nationality' with 'Namibia'
    Then I fill 'brp-card' with 'XR1000123'
    Then I select 'Continue'
    Then I should be on the 'contact-details' page showing 'How should we contact you about your BRP?'
    Then I fill 'email' with 'test@dtest.testemail'
    Then I select 'Continue'
    Then I should be on the 'confirm' page showing 'Check the details you have provided'

  @out_uk
  Scenario: correct mistakes on brp form outside the uk
    Given I start the 'correct-mistakes' application journey
    Then I should be on the 'location' page showing 'Where did you apply for your visa?'
    Then I check 'location-applied-no'
    Then I select 'Continue'
    Then I should be on the 'about-error' page showing 'What’s the problem with your BRP?'
    Then I check 'first-name-error-checkbox'
    Then I fill 'first-name-error' with 'Ronald'
    Then I select 'Continue'
    Then I should be on the 'uk-address' page showing 'Is there a suitable UK address we can deliver your BRP to?'
    Then I check 'uk-address-radio-yes'
    Then I fill 'uk-address-house-number' with '17'
    Then I fill 'uk-address-street' with 'test avenue'
    Then I fill 'uk-address-town' with 'Rotherham'
    Then I fill 'uk-address-county' with 'South Yorkshire'
    Then I fill 'uk-address-postcode' with 'RH17 5BE'
    Then I select 'Continue'
    Then I should be on the 'personal-details' page showing 'How do your personal details appear on your BRP?'
    Then I fill 'fullname' with 'Ronald Testman'
    Then I fill the date 'date-of-birth' with '30-05-1990'
    Then I fill 'nationality' with 'Namibia'
    Then I fill 'brp-card' with 'ZRX000123'
    Then I select 'Continue'
    Then I should be on the 'contact-details' page showing 'How should we contact you about your BRP?'
    Then I fill 'email' with 'christopher.medland@digital.homeoffice.gov.uk'
    Then I select 'Continue'
    Then I should be on the 'confirm' page showing 'Check the details you have provided'

  @validation
  Scenario: validation of about-error page
    Given I start the 'correct-mistakes' application journey
    Then I should be on the 'location' page showing 'Where did you apply for your visa?'
    Then I check 'location-applied-yes'
    Then I select 'Continue'
    Then I should be on the 'about-error' page showing 'What’s the problem with your BRP?'
    Then I check 'last-name-error-checkbox'
    Then I check 'first-name-error-checkbox'
    Then I check 'birth-place-error-checkbox'
    Then I check 'date-of-birth-error-checkbox'
    Then I check 'gender-error-checkbox'
    Then I check 'sponsor-details-error-checkbox'
    Then I check 'nationality-error-checkbox'
    Then I check 'signature-error-checkbox'
    Then I check 'photograph-error-checkbox'
    Then I check 'national-insurance-error-checkbox'
    Then I check 'damaged-error-checkbox'
    Then I check 'conditions-error-checkbox'
    Then I select 'Continue'
    Then I should be on the 'about-error' page showing 'What’s the problem with your BRP?'
    Then I should see 'What is your correct family name?' on the page
    Then I should see 'What are your correct given name(s)?' on the page
    Then I should see 'What is your correct place of birth?' on the page
    Then I should see 'Enter your date of birth' on the page
    Then I should see 'What is your correct gender?' on the page
    Then I should see 'What are the correct sponsor details?' on the page
    Then I should see 'What is wrong with your signature?' on the page
    Then I should see 'What is wrong with your photograph?' on the page
    Then I should see 'What is your correct National Insurance number?' on the page
    Then I should see 'What is wrong with your BRP?' on the page
    Then I should see 'Tell us about the problem' on the page

    @validation
    Scenario: BRP number validation
      Given I start the 'correct-mistakes' application journey
      Then I should be on the 'location' page showing 'Where did you apply for your visa?'
      Then I check 'location-applied-no'
      Then I select 'Continue'
      Then I should be on the 'about-error' page showing 'What’s the problem with your BRP?'
      Then I check 'first-name-error-checkbox'
      Then I fill 'first-name-error' with 'Ronald'
      Then I select 'Continue'
      Then I should be on the 'uk-address' page showing 'Is there a suitable UK address we can deliver your BRP to?'
      Then I check 'uk-address-radio-yes'
      Then I fill 'uk-address-house-number' with '17'
      Then I fill 'uk-address-street' with 'test avenue'
      Then I fill 'uk-address-town' with 'Rotherham'
      Then I fill 'uk-address-county' with 'South Yorkshire'
      Then I fill 'uk-address-postcode' with 'RH17 5BE'
      Then I select 'Continue'
      Then I should be on the 'personal-details' page showing 'How do your personal details appear on your BRP?'
      Then I fill 'fullname' with 'Ronald Testman'
      Then I fill the date 'date-of-birth' with '30-05-1990'
      Then I fill 'nationality' with 'Namibia'
      Then I fill 'brp-card' with 'ZR000123'
      Then I select 'Continue'
      Then I should see 'Enter your BRP number in the correct format; for example, ‘ZUX123456 or ZU1234567’' on the page

    @validation
    Scenario: Correct Mistakes Personal Details not a URL validation
      Given I start the 'correct-mistakes' application journey
      Then I should be on the 'location' page showing 'Where did you apply for your visa?'
      Then I check 'location-applied-no'
      Then I select 'Continue'
      Then I should be on the 'about-error' page showing 'What’s the problem with your BRP?'
      Then I check 'first-name-error-checkbox'
      Then I fill 'first-name-error' with 'Ronald'
      Then I select 'Continue'
      Then I should be on the 'uk-address' page showing 'Is there a suitable UK address we can deliver your BRP to?'
      Then I check 'uk-address-radio-yes'
      Then I fill 'uk-address-house-number' with '17'
      Then I fill 'uk-address-street' with 'test avenue'
      Then I fill 'uk-address-town' with 'Rotherham'
      Then I fill 'uk-address-county' with 'South Yorkshire'
      Then I fill 'uk-address-postcode' with 'RH17 5BE'
      Then I select 'Continue'
      Then I should be on the 'personal-details' page showing 'How do your personal details appear on your BRP?'
      Then I fill 'fullname' with 'www.google.com'
      Then I fill the date 'date-of-birth' with '30-05-1990'
      Then I fill 'nationality' with 'Namibia'
      Then I fill 'brp-card' with 'ZR000123'
      Then I select 'Continue'
      Then I should see 'Full name must not be a URL' on the page

    @validation
    Scenario: Correct Mistakes Representative Personal Details not a URL validation
      Given I start the 'correct-mistakes' application journey
      Then I should be on the 'location' page showing 'Where did you apply for your visa?'
      Then I check 'location-applied-yes'
      Then I select 'Continue'
      Then I should be on the 'about-error' page showing 'What’s the problem with your BRP?'
      Then I check 'last-name-error-checkbox'
      Then I fill 'last-name-error' with 'Testman'
      Then I select 'Continue'
      Then I should be on the 'same-address' page showing 'Is your address the same as the address on the delivery letter?'
      Then I check 'same-address-radio-yes'
      Then I select 'Continue'
      Then I should be on the 'personal-details' page showing 'How do your personal details appear on your BRP?'
      Then I fill 'fullname' with 'Ronald Testman'
      Then I fill the date 'date-of-birth' with '30-05-1990'
      Then I fill 'nationality' with 'Namibia'
      Then I fill 'brp-card' with 'XR1000123'
      Then I select 'Continue'
      Then I should be on the 'contact-details' page showing 'How should we contact you about your BRP?'
      Then I fill 'email' with 'test@dtest.testemail'
      Then I select 'Continue'
      Then I should be on the 'confirm' page showing 'Check the details you have provided'
      Then I check 'org-help-yes'
      Then I should see 'We will attempt to contact the BRP holder directly. We will only use these details to contact you if needed.' on the page
      Then I fill 'rep-name' with 'www.google.com'
      Then I submit the application
      Then I should see 'Full name must not be a URL' on the page
