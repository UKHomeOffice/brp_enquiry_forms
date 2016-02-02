Feature: E2E tests

  @e2e
  Scenario Outline: Report a problem with collecting a BRP
    Given I am on the home page of the Collections Form
    And   I select "<collection_option>" as the option chosen for collecting my BRP
    And   I select "<reason>" as the reason why I couldn't collect my BRP
    And   I enter my personal details
    When  I submit the form
    Then  the message "Thank you, we have received your information" is displayed on the confirmation page

    Examples:
      | collection_option | reason                                      |
      | Post Office       | I could not prove my identity               |
      | Sponsor           | I have lost my passport or travel documents |

