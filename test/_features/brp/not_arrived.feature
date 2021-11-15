@feature @not_arrived
Feature: I should be able to log that my BRP has not arrived

  Scenario: Due to collect the document from the postcode
    Given I start the 'not-arrived' application journey
    Then I should be on the 'collection' page showing 'Were you due to collect your document from the Post Office?'
    Then I check 'collection-yes'
    Then I select 'Continue'
    Then I should be on the 'collection/where' page showing 'From where were you asked to collect your BRP?'

  Scenario: Letter not received from the home office
    Given I start the 'not-arrived' application journey
    Then I should be on the 'collection' page showing 'Were you due to collect your document from the Post Office?'
    Then I check 'collection-no'
    Then I select 'Continue'
    Then I should be on the 'letter-received' page showing 'Have you received a letter from the Home Office?'
    Then I check 'received-no'
    Then I select 'Continue'
    Then I should be on the 'letter-not-received' page showing 'Contact us'

  Scenario: BRP resent to same address
    Given I start the 'not-arrived' application journey
    Then I should be on the 'collection' page showing 'Were you due to collect your document from the Post Office?'
    Then I check 'collection-no'
    Then I select 'Continue'
    Then I should be on the 'letter-received' page showing 'Have you received a letter from the Home Office?'
    Then I check 'received-yes'
    Then I fill the date 'delivery-date' with '24-5-2020'
    Then I select 'Continue'
    Then I should be on the 'same-address' page showing 'Would you like your BRP sent to the address that is on the letter from the Home Office?'
    Then I check 'address-match-yes'
    Then I fill 'delivery-details' text area with 'Watch out for the dog!'
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

  Scenario: BRP resent to different address
    Given I start the 'not-arrived' application journey
    Then I should be on the 'collection' page showing 'Were you due to collect your document from the Post Office?'
    Then I check 'collection-no'
    Then I select 'Continue'
    Then I should be on the 'letter-received' page showing 'Have you received a letter from the Home Office?'
    Then I check 'received-yes'
    Then I fill the date 'delivery-date' with '24-5-2020'
    Then I select 'Continue'
    Then I should be on the 'same-address' page showing 'Would you like your BRP sent to the address that is on the letter from the Home Office?'
    Then I check 'address-match-no'
    Then I fill 'address-house-number' with '17'
    Then I fill 'address-street' with 'test avenue'
    Then I fill 'address-town' with 'Rotherham'
    Then I fill 'address-county' with 'South Yorkshire'
    Then I fill 'address-postcode' with 'RH17 5BE'
    Then I fill 'case-id' with '12345678'
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
    Then I should see 'Delivery details' on the page
    Then I should see 'Personal details' on the page
    Then I should see 'Are you completing this form on behalf of the BRP holder?' on the page
