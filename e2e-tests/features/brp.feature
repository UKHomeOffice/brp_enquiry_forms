@BrpRegression
@BrpRegressionCI
Feature: BRP- Biometric Residence Permit Collection


  Scenario Outline: BRP - Biometric Residence Permit - Collection Process
    Given I visit the Biometric Residence Permit collection page
    When I fill out the answers to the BRP collection form pertaining to "<BRP Journey Test>"
    Examples:
      | BRP Journey Test                                                               |
      | T1: Post Office - I don't know which Post Office I need to collect my BRP from |
      | T2: Post Office - Someone attempted to collect my BRP on my behalf             |
      | T3: Sponsor - I could not prove my identity                                    |


  Scenario Outline: BRP - Biometric Residence Permit - Lost Stolen Process
    Given I visit the Biometric Residence Permit lost stolen page
    When I fill out the answers to the BRP lost stolen form pertaining to "<BRP Journey Test>"
    Examples:
      | BRP Journey Test     |
      | T1: UK route         |
      | T2: Outside UK route |


  Scenario Outline: BRP - Biometric Residence Permit - BRP Not Delivered Process
    Given I visit the Biometric Residence Permit not delivered page
    When I fill out the answers to the BRP not delivered form pertaining to "<BRP Journey Test>"
    Examples:
      | BRP Journey Test                                           |
      | T1: Not collected from Post Office with tracking number    |
      | T2: Not collected from Post Office without tracking number |


  Scenario Outline: BRP - Biometric Residence Permit - Report Problem Process
    Given I visit the Biometric Residence Permit report problem page
    When I fill out the answers to the BRP report problem form pertaining to "<BRP Journey Test>"
    Examples:
      | BRP Journey Test                              |
      | T1: UK route - Family name problem            |
      | T2: UK route - Given name problem             |
      | T3: Outside UK route - Place of birth problem |
      | T4: Outside UK route - Date of birth problem  |


  Scenario Outline: BRP - Biometric Residence Permit - Someone Else Process
    Given I visit the Biometric Residence Permit someone else applicant page
    When I fill out the answers to the BRP someone else applicant form pertaining to "<BRP Journey Test>"
    Examples:
      | BRP Journey Test |
      | T1: Medical help |
      | T2: Under 18     |