import { createBdd } from 'playwright-bdd';
import { test, Pages } from '../fixture/fixtures';
import { ConstantsLib as c } from '../utility-helper/constants-lib';

export const { Given, When, Then } = createBdd(test);

function stepLib(pages: Pages) {
  return new BrpStepLib(pages);
}

Given('I visit the Biometric Residence Permit collection page', async ({ pages }) => {
  await pages.brpCollectionProblemHomePage.CollectionProblemPage();
});

Given('I visit the Biometric Residence Permit lost stolen page', async ({ pages }) => {
  await pages.brpLostStolenHomePage.openBrpLostStolenHomePage();
});

Given('I visit the Biometric Residence Permit not delivered page', async ({ pages }) => {
  await pages.brpNotDeliveredHomePage.openBrpNotDeliveredHomePage();
});

Given('I visit the Biometric Residence Permit report problem page', async ({ pages }) => {
  await pages.brpReportProblemHomePage.openReportAProblemPage();
});

Given('I visit the Biometric Residence Permit someone else applicant page', async ({ pages }) => {
  await pages.brpSomeOneElseHomePage.openBrpSomeOneElseHomePage();
});

When('I fill out the answers to the BRP collection form pertaining to {string}', async ({ pages }, scenario: string) => {
  switch (scenario.toLowerCase()) {
    case "t1: post office - i don't know which post office i need to collect my brp from":
      await stepLib(pages).answerPostOfficeCollectionRoute(c.COLLECTION_REASON_UNKNOWN_POST_OFFICE);
      break;
    case 't2: post office - someone attempted to collect my brp on my behalf':
      await stepLib(pages).answerPostOfficeCollectionRoute(c.COLLECTION_REASON_OTHER_PERSON);
      break;
    case 't3: sponsor - i could not prove my identity':
      await stepLib(pages).answerSponsorCollectionRoute(c.COLLECTION_REASON_IDENTITY);
      break;
    default:
      throw new Error(`Invalid BRP collection scenario: ${scenario}`);
  }
});

When('I fill out the answers to the BRP lost stolen form pertaining to {string}', async ({ pages }, scenario: string) => {
  switch (scenario.toLowerCase()) {
    case 't1: uk route':
      await stepLib(pages).answerLostStolenProcess(c.UK_ROUTE);
      break;
    case 't2: outside uk route':
      await stepLib(pages).answerLostStolenProcess(c.OUTSIDE_UK_ROUTE);
      break;
    default:
      throw new Error(`Invalid BRP lost stolen scenario: ${scenario}`);
  }
});

When('I fill out the answers to the BRP not delivered form pertaining to {string}', async ({ pages }, scenario: string) => {
  switch (scenario.toLowerCase()) {
    case 't1: not collected from post office with tracking number':
      await stepLib(pages).answerBrpNotDeliveredProcess(c.NOT_DELIVERED_WITH_TRACKING.hasTrackingNumber, c.NOT_DELIVERED_WITH_TRACKING.hasHomeOfficeLetter);
      break;
    case 't1: not collected from post office without tracking number':
      await stepLib(pages).answerBrpNotDeliveredProcess(c.NOT_DELIVERED_WITHOUT_TRACKING.hasTrackingNumber, c.NOT_DELIVERED_WITHOUT_TRACKING.hasHomeOfficeLetter);
      break;
    default:
      throw new Error(`Invalid BRP not delivered scenario: ${scenario}`);
  }
});

When('I fill out the answers to the BRP report problem form pertaining to {string}', async ({ pages }, scenario: string) => {
  switch (scenario.toLowerCase()) {
    case 't1: uk route - family name problem':
      await stepLib(pages).answerBrpReportProblemProcess(c.REPORT_PROBLEM_FAMILY_NAME.whereApplied, c.REPORT_PROBLEM_FAMILY_NAME.problem, c.REPORT_PROBLEM_FAMILY_NAME.answerAddressQuestionWithYes);
      break;
    case 't2: uk route - given name problem':
      await stepLib(pages).answerBrpReportProblemProcess(c.REPORT_PROBLEM_GIVEN_NAME.whereApplied, c.REPORT_PROBLEM_GIVEN_NAME.problem, c.REPORT_PROBLEM_GIVEN_NAME.answerAddressQuestionWithYes);
      break;
    case 't3: outside uk route - place of birth problem':
      await stepLib(pages).answerBrpReportProblemProcess(c.REPORT_PROBLEM_PLACE_OF_BIRTH.whereApplied, c.REPORT_PROBLEM_PLACE_OF_BIRTH.problem, c.REPORT_PROBLEM_PLACE_OF_BIRTH.answerAddressQuestionWithYes);
      break;
    case 't4: outside uk route - date of birth problem':
      await stepLib(pages).answerBrpReportProblemProcess(c.REPORT_PROBLEM_DATE_OF_BIRTH.whereApplied, c.REPORT_PROBLEM_DATE_OF_BIRTH.problem, c.REPORT_PROBLEM_DATE_OF_BIRTH.answerAddressQuestionWithYes);
      break;
    default:
      throw new Error(`Invalid BRP report problem scenario: ${scenario}`);
  }
});

When('I fill out the answers to the BRP someone else applicant form pertaining to {string}', async ({ pages }, scenario: string) => {
  switch (scenario.toLowerCase()) {
    case 't1: medical help':
      await stepLib(pages).someoneElseCollectingRoute(c.MEDICAL_HELP_REASON);
      break;
    case 't2: under 18':
      await stepLib(pages).someoneElseCollectingRoute(c.UNDER_18_REASON);
      break;
    default:
      throw new Error(`Invalid BRP someone else applicant scenario: ${scenario}`);
  }
});

Then('I should see the BRP confirmation page', async ({ pages }) => {
  await pages.brpConfirmationPage.assertPageTitle();
});

Then('I should see the BRP Contact Us page', async ({ pages }) => {
      await pages.brpNotArrivedContactUsPage.assertPageTitle();
});


/* ********************************************************************************************************************************************************* */
//                                                                       BRP Step Library
//********************************************************************************************************************************************************** */

class BrpStepLib {
  constructor(private readonly pages: Pages) { }

  async answerPostOfficeCollectionRoute(reason: string) {
    await this.pages.brpFromWhereWereYouAskedToCollectPage.assertPageTitle();
    await this.pages.brpFromWhereWereYouAskedToCollectPage.answerPostOffice(c.POST_OFFICE_OPTION, c.BRP_COLLECTION_DATE);
    await this.pages.brpWhyCouldNotCollectPostOfficePage.assertPageTitle();
    switch (reason) {
      case c.COLLECTION_REASON_UNKNOWN_POST_OFFICE:
        await this.pages.brpWhyCouldNotCollectPostOfficePage.answerWhichPostOfficeINeedToCollect(c.UNKNOWN_POST_OFFICE_OPTION, c.UNKNOWN_POST_OFFICE_DETAILS);
        break;
      case c.COLLECTION_REASON_UNDER_18:
        await this.pages.brpWhyCouldNotCollectPostOfficePage.answerUnder18AndAttemptedCollection(c.UNDER_18_OPTION, c.UNDER_18_COLLECTION_DETAILS);
        break;
      case c.COLLECTION_REASON_IDENTITY:
        await this.pages.brpWhyCouldNotCollectPostOfficePage.answerICouldNotProveMyIdentity(c.IDENTITY_PROBLEM_OPTION, c.IDENTITY_PROBLEM_DETAILS);
        break;
      case c.COLLECTION_REASON_OTHER_PERSON:
        await this.pages.brpWhyCouldNotCollectPostOfficePage.answerSomeoneAttemptedToCollect(c.OTHER_COLLECTOR_OPTION, c.OTHER_COLLECTOR_DETAILS);
        await this.pages.brWhoSupposedToCollectPage.enterCollectingPersonPersonalDetails(c.NOMINATED_FULL_NAME, c.DATE_OF_BIRTH, c.NATIONALITY, c.PASSPORT_NUMBER);
        break;
      case c.COLLECTION_REASON_VIGNETTE:
        await this.pages.brpWhyCouldNotCollectPostOfficePage.answerTheVignette(c.VIGNETTE_PROBLEM_OPTION, c.VIGNETTE_PROBLEM_DETAILS);
        break;
      case c.COLLECTION_REASON_LOST_PASSPORT:
        await this.pages.brpWhyCouldNotCollectPostOfficePage.answerIHaveLostMyPassport(c.LOST_PASSPORT_OPTION, c.LOST_PASSPORT_DETAILS);
        break;
      case c.COLLECTION_REASON_NO_BRP:
        await this.pages.brpWhyCouldNotCollectPostOfficePage.answerMyBRPWasNotThere(c.NO_BRP_OPTION);
        break;
      default:
        throw new Error(`Unexpected collection Post Office reason: ${reason}`);
    }
    await this.pages.brpCollectionPersonalDetailsPage.enterDetails(c.FULL_NAME, c.ALTERNATIVE_DATE_OF_BIRTH, c.NATIONALITY, c.COLLECTION_PASSPORT_NUMBER);
    await this.pages.brpHowContactAboutBrpPage.answerHowContact(c.EMAIL, c.PHONE);
    await this.pages.brpCheckDetailsPage.answerNoAndSelectSendbutton();
  }

  async answerSponsorCollectionRoute(reason: string) {
    await this.pages.brpFromWhereWereYouAskedToCollectPage.assertPageTitle();
    await this.pages.brpFromWhereWereYouAskedToCollectPage.answerSponsor(c.SPONSOR_OPTION, c.BRP_COLLECTION_DATE);
    await this.pages.brpWhyCouldNotCollectSponsorPage.assertPageTitle();
    switch (reason) {
      case c.COLLECTION_REASON_IDENTITY:
        await this.pages.brpWhyCouldNotCollectSponsorPage.answerICouldNotProveMyIdentity(c.IDENTITY_PROBLEM_OPTION, c.IDENTITY_PROBLEM_DETAILS);
        break;
      case c.COLLECTION_REASON_LOST_PASSPORT:
        await this.pages.brpWhyCouldNotCollectSponsorPage.answerIHaveLostMyPassport(c.LOST_PASSPORT_OPTION, c.LOST_PASSPORT_DETAILS);
        break;
      case c.COLLECTION_REASON_NO_BRP:
        await this.pages.brpWhyCouldNotCollectSponsorPage.myBrpWasNotThereSponsor.click();
        await this.pages.brpWhyCouldNotCollectSponsorPage.clickContinueBrp();
        break;
      default:
        throw new Error(`Unexpected collection Sponsor reason: ${reason}`);
    }
    await this.pages.brpCollectionPersonalDetailsPage.assertPageTitle();
    await this.pages.brpCollectionPersonalDetailsPage.enterDetails(c.FULL_NAME, c.ALTERNATIVE_DATE_OF_BIRTH, c.NATIONALITY, c.COLLECTION_PASSPORT_NUMBER);
    await this.pages.brpHowContactAboutBrpPage.assertPageTitle();
    await this.pages.brpHowContactAboutBrpPage.answerHowContact(c.EMAIL, c.PHONE);
    await this.pages.brpCheckDetailsPage.assertPageTitle();
    await this.pages.brpCheckDetailsPage.answerNoAndSelectSendbutton();
  }

  async answerLostStolenProcess(whereAreYouNow: typeof c.UK_ROUTE | typeof c.OUTSIDE_UK_ROUTE) {
    await this.pages.brpLostStolenWhereAreYouNowPage.assertPageTitle();
    if (whereAreYouNow === c.OUTSIDE_UK_ROUTE) {
      await this.pages.brpLostStolenWhereAreYouNowPage.answerWhereAreYouOutsideUk(c.NO_OPTION, c.NATIONALITY);
    } else {
      await this.pages.brpLostStolenWhereAreYouNowPage.answerWhereAreYouInUk(c.YES_OPTION);
    }
    await this.pages.brpLostStolenWhenRealisePage.assertPageTitle();
    await this.pages.brpLostStolenWhenRealisePage.answerWhenRealise(c.BRP_LOST_DATE);
    await this.pages.brpLostStolenPersonalDetailsPage.assertPageTitle();
    await this.pages.brpLostStolenPersonalDetailsPage.enterDetails(c.FULL_NAME, c.DATE_OF_BIRTH, c.NATIONALITY, c.BRP_CARD_OPTION, c.BRP_NUMBER);
    await this.pages.brpLostStolenHowContactPage.assertPageTitle();
    await this.pages.brpLostStolenHowContactPage.answerHowContact(c.EMAIL, c.PHONE);
    await this.pages.brpCheckDetailsPage.assertPageTitle();
    await this.pages.brpCheckDetailsPage.answerNoAndSelectSendbutton();
  }

  async answerBrpNotDeliveredProcess(hasTrackingNumber: boolean, hasHomeOfficeLetter: boolean) {
    await this.pages.brpNotArrivedWhereYouDueToCollectFromPOPage.assertPageTitle();
    await this.pages.brpNotArrivedWhereYouDueToCollectFromPOPage.NotCollectFromPO(c.NO_OPTION);
    if (hasTrackingNumber) {
      await this.pages.brpNotArrivedTrackingNumPage.yesTrackingNum(c.YES_OPTION, c.TRACKING_NUMBER);
    } else {
      await this.pages.brpNotArrivedTrackingNumPage.NoTrackingNum(c.NO_OPTION);
    }
    if (hasHomeOfficeLetter) {
      await this.pages.brpNotArrivedHaveYouReceivedLetterFromHOPage.assertPageTitle();
      await this.pages.brpNotArrivedHaveYouReceivedLetterFromHOPage.answerYesReceivedLetterHO(c.YES_OPTION, c.COLLECTION_DATE, c.CASE_ID);
      await this.pages.brpNotArrivedWouldYouLikeBrpSentPage.yesBrpSent(c.YES_OPTION, c.DELIVERY_DETAILS);
      await this.pages.brpNotArrivedPersonalDetailsPage.assertPageTitle();
      await this.pages.brpNotArrivedPersonalDetailsPage.enterDetailsND(c.FULL_NAME, c.ALTERNATIVE_DATE_OF_BIRTH, c.NATIONALITY, c.PASSPORT_NUMBER);
      await this.pages.brpHowContactAboutBrpPage.assertPageTitle();
      await this.pages.brpHowContactAboutBrpPage.answerHowContact(c.EMAIL, c.PHONE);
      await this.pages.brpCheckDetailsPage.assertPageTitle();
      await this.pages.brpCheckDetailsPage.answerNoAndSelectSendbutton();
    } else {
      await this.pages.brpNotArrivedHaveYouReceivedLetterFromHOPage.assertPageTitle();
      await this.pages.brpNotArrivedHaveYouReceivedLetterFromHOPage.answerNotReceivedLetterHO(c.NO_OPTION);
    }
  }

  async answerBrpReportProblemProcess(
    whereApplied: typeof c.UK_ROUTE | typeof c.OUTSIDE_UK_ROUTE,
    problem: string,
    answerAddressQuestionWithYes: boolean
  ) {
    if (whereApplied === c.OUTSIDE_UK_ROUTE) {
      await this.pages.brpProblemWhereApplyPage.assertPageTitle();
      await this.pages.brpProblemWhereApplyPage.answerOutsideUkButton(c.NO_OPTION);
      await this.answerProblemWithBrp(problem);
      await this.pages.brpProblemIsThereSuitableUkAddressPage.assertPageTitle();
      if (answerAddressQuestionWithYes) {
        await this.pages.brpProblemIsThereSuitableUkAddressPage.answerYes(c.YES_OPTION, c.HOUSE_NUMBER, c.STREET, c.TOWN, c.COUNTY, c.POSTCODE);
      } else {
        await this.pages.brpProblemIsThereSuitableUkAddressPage.answerNoAndSelectContinueBtn(c.NO_OPTION);
      }
    } else {
      await this.pages.brpProblemWhereApplyPage.assertPageTitle();
      await this.pages.brpProblemWhereApplyPage.answerUkButton(c.YES_OPTION);
      await this.answerProblemWithBrp(problem);
      await this.pages.brpProblemAddressSameAsDeliveryPage.assertPageTitle();
      if (answerAddressQuestionWithYes) {
        await this.pages.brpProblemAddressSameAsDeliveryPage.answerYes(c.YES_OPTION);
      } else {
        await this.pages.brpProblemAddressSameAsDeliveryPage.answerNo(c.NO_OPTION, c.HOUSE_NUMBER, c.STREET, c.TOWN, c.COUNTY, c.POSTCODE);
      }
    }
    await this.pages.brpHowPersonalDetailsAppearPage.assertPageTitle();
    await this.pages.brpHowPersonalDetailsAppearPage.answerHowDoPersonalDetailAppearOnBrp(c.FULL_NAME, c.DATE_OF_BIRTH, c.NATIONALITY, c.BRP_CARD_OPTION, c.BRP_NUMBER);
    await this.pages.brpHowContactAboutBrpPage.assertPageTitle();
    await this.pages.brpHowContactAboutBrpPage.answerHowContact(c.EMAIL, c.PHONE);
    await this.pages.brpCheckDetailsPage.assertPageTitle();
    await this.pages.brpCheckDetailsPage.answerNoAndSelectSendbutton();
  }

  async answerProblemWithBrp(problem: string) {
    await this.pages.brpProblemWhatProblemPage.assertPageTitle();
    switch (problem) {
      case c.PROBLEM_FAMILY_NAME:
        await this.pages.brpProblemWhatProblemPage.answerFamilyName(c.PROBLEM_FAMILY_NAME, c.FAMILY_NAME);
        break;
      case c.PROBLEM_GIVEN_NAME:
        await this.pages.brpProblemWhatProblemPage.answerGivenName(c.PROBLEM_GIVEN_NAME, c.GIVEN_NAME);
        break;
      case c.PROBLEM_PLACE_OF_BIRTH:
        await this.pages.brpProblemWhatProblemPage.answerPlaceBirth(c.PROBLEM_PLACE_OF_BIRTH, c.NATIONALITY);
        break;
      case c.PROBLEM_DATE_OF_BIRTH:
        await this.pages.brpProblemWhatProblemPage.answerDOB(c.PROBLEM_DATE_OF_BIRTH, c.DATE_OF_BIRTH);
        break;
      case c.PROBLEM_GENDER:
        await this.pages.brpProblemWhatProblemPage.answerGender(c.PROBLEM_GENDER, c.FEMALE_OPTION);
        break;
      case c.PROBLEM_SPONSOR_REFERENCE:
        await this.pages.brpProblemWhatProblemPage.answerSponsorRef(c.PROBLEM_SPONSOR_REFERENCE, c.SPONSOR_REFERENCE);
        break;
      case c.PROBLEM_NATIONALITY:
        await this.pages.brpProblemWhatProblemPage.answerNationality(c.PROBLEM_NATIONALITY, c.ALTERNATIVE_NATIONALITY);
        break;
      case c.PROBLEM_SIGNATURE:
        await this.pages.brpProblemWhatProblemPage.answerSignature(c.PROBLEM_SIGNATURE, c.SIGNATURE_DETAILS);
        break;
      case c.PROBLEM_PHOTOGRAPH:
        await this.pages.brpProblemWhatProblemPage.answerPhoto(c.PROBLEM_PHOTOGRAPH, c.PHOTOGRAPH_DETAILS);
        break;
      case c.PROBLEM_NATIONAL_INSURANCE:
        await this.pages.brpProblemWhatProblemPage.answerNINum(c.PROBLEM_NATIONAL_INSURANCE, c.NATIONAL_INSURANCE_NUMBER);
        break;
      case c.PROBLEM_DAMAGED_BRP:
        await this.pages.brpProblemWhatProblemPage.answerFaultyBrp(c.PROBLEM_DAMAGED_BRP, c.DAMAGED_BRP_DETAILS);
        break;
      case c.PROBLEM_CONDITIONS:
        await this.pages.brpProblemWhatProblemPage.answerCondition(c.PROBLEM_CONDITIONS, c.PROBLEM_DETAILS);
        break;
      case c.PROBLEM_LENGTH_OF_STAY:
        await this.pages.brpProblemWhatProblemPage.answerLengthStay(c.PROBLEM_LENGTH_OF_STAY, c.PROBLEM_DETAILS);
        break;
      case c.PROBLEM_BIOGRAPHICS:
        await this.pages.brpProblemWhatProblemPage.answerBiography(c.PROBLEM_BIOGRAPHICS, c.PROBLEM_DETAILS);
        break;
      case c.PROBLEM_BRP_NOT_WORKING:
        await this.pages.brpProblemWhatProblemPage.answerBrpDoesnWork(c.PROBLEM_BRP_NOT_WORKING, c.PROBLEM_DETAILS);
        break;
      default:
        throw new Error(`Unexpected problem with BRP value: ${problem}`);
    }
  }

  async someoneElseCollectingRoute(reason: typeof c.MEDICAL_HELP_REASON | typeof c.UNDER_18_REASON) {
    await this.pages.whoWouldYouLikeToNominatePage.assertPageTitle();
    await this.pages.whoWouldYouLikeToNominatePage.enterDetailsOfPersonNominated(c.NOMINATED_FULL_NAME, c.DATE_OF_BIRTH, c.NATIONALITY, c.PASSPORT_OPTION, c.PASSPORT_NUMBER);
    await this.pages.whyDoYouNeedSomeOneToCollectPage.assertPageTitle();
    if (reason === c.MEDICAL_HELP_REASON) {
      await this.pages.whyDoYouNeedSomeOneToCollectPage.medicalReasonForSomeOneElseToCollect(c.INCAPABLE_OPTION, c.SITUATION);
    } else {
      await this.pages.whyDoYouNeedSomeOneToCollectPage.ageReasonForSomeOneElseToCollect(c.UNDER_18_OPTION);
    }
    await this.pages.brpSomeoneElsePersonalDetailsPage.assertPageTitle();
    await this.pages.brpSomeoneElsePersonalDetailsPage.answerWhatAreYourPersonalDetailsSE(c.FULL_NAME, c.SOMEONE_ELSE_DATE_OF_BIRTH, c.NATIONALITY, c.PASSPORT_NUMBER);
    await this.pages.brpHowContactAboutBrpPage.assertPageTitle();
    await this.pages.brpHowContactAboutBrpPage.answerHowContact(c.EMAIL, c.PHONE);
    await this.pages.brpCheckDetailsPage.assertPageTitle();
    await this.pages.brpCheckDetailsPage.answerNoAndSelectSendbutton();
  }
}