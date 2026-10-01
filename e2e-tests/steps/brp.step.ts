import { createBdd } from 'playwright-bdd';
import { test, Pages } from '../fixture/fixtures';
import { ConstantsLib } from '../utility-helper/constants-lib';

export const { Given, When, Then } = createBdd(test);

class BrpStepLib {
  constructor(private readonly pages: Pages) {}

  async openBrpCollectionHomePage() {
    await this.pages.brpCollectionProblemHomePage.CollectionProblemPage();
  }

  async answerPostOfficeCollectionRoute(reason: string) {
    await this.pages.brpFromWhereWereYouAskedToCollectPage.assertPageTitle();
    await this.pages.brpFromWhereWereYouAskedToCollectPage.answerPostOffice();
    await this.pages.brpWhyCouldNotCollectPostOfficePage.assertPageTitle();
    switch (reason) {
      case ConstantsLib.COLLECTION_REASON_UNKNOWN_POST_OFFICE:
        await this.pages.brpWhyCouldNotCollectPostOfficePage.answerWhichPostOfficeINeedToCollect();
        break;
      case ConstantsLib.COLLECTION_REASON_UNDER_18:
        await this.pages.brpWhyCouldNotCollectPostOfficePage.answerUnder18AndAttemptedCollection();
        break;
      case ConstantsLib.COLLECTION_REASON_IDENTITY:
        await this.pages.brpWhyCouldNotCollectPostOfficePage.answerICouldNotProveMyIdentity();
        break;
      case ConstantsLib.COLLECTION_REASON_OTHER_PERSON:
        await this.pages.brpWhyCouldNotCollectPostOfficePage.answerSomeoneAttemptedToCollect();
        await this.pages.brWhoSupposedToCollectPage.enterCollectingPersonPersonalDetails();
        break;
      case ConstantsLib.COLLECTION_REASON_VIGNETTE:
        await this.pages.brpWhyCouldNotCollectPostOfficePage.answerTheVignette();
        break;
      case ConstantsLib.COLLECTION_REASON_LOST_PASSPORT:
        await this.pages.brpWhyCouldNotCollectPostOfficePage.answerIHaveLostMyPassport();
        break;
      case ConstantsLib.COLLECTION_REASON_NO_BRP:
        await this.pages.brpWhyCouldNotCollectPostOfficePage.answerMyBRPWasNotThere();
        break;
      default:
        throw new Error(`Unexpected collection Post Office reason: ${reason}`);
    }
    await this.pages.brpCollectionPersonalDetailsPage.enterDetails();
    await this.pages.brpHowContactAboutBrpPage.answerHowContact();
    await this.pages.brpCheckDetailsPage.answerNo();
  }

  async answerSponsorCollectionRoute(reason: string) {
    await this.pages.brpFromWhereWereYouAskedToCollectPage.assertPageTitle();
    await this.pages.brpFromWhereWereYouAskedToCollectPage.answerSponsor();
    await this.pages.brpWhyCouldNotCollectSponsorPage.assertPageTitle();
    switch (reason) {
      case ConstantsLib.COLLECTION_REASON_IDENTITY:
        await this.pages.brpWhyCouldNotCollectSponsorPage.answerICouldNotProveMyIdentity();
        break;
      case ConstantsLib.COLLECTION_REASON_LOST_PASSPORT:
        await this.pages.brpWhyCouldNotCollectSponsorPage.answerIHaveLostMyPassport();
        break;
      case ConstantsLib.COLLECTION_REASON_NO_BRP:
        await this.pages.brpWhyCouldNotCollectSponsorPage.myBrpWasNotThereSponsor.click();
        await this.pages.brpWhyCouldNotCollectSponsorPage.clickContinueBrp();
        break;
      default:
        throw new Error(`Unexpected collection Sponsor reason: ${reason}`);
    }
    await this.pages.brpCollectionPersonalDetailsPage.assertPageTitle();
    await this.pages.brpCollectionPersonalDetailsPage.enterDetails();
    await this.pages.brpHowContactAboutBrpPage.assertPageTitle();
    await this.pages.brpHowContactAboutBrpPage.answerHowContact();
    await this.pages.brpCheckDetailsPage.assertPageTitle();
    await this.pages.brpCheckDetailsPage.answerNo();
  }

  async openBrpLostStolenHomePage() {
    await this.pages.brpLostStolenHomePage.openBrpLostStolenHomePage();
  }

  async answerLostStolenProcess(whereAreYouNow: typeof ConstantsLib.UK_ROUTE | typeof ConstantsLib.OUTSIDE_UK_ROUTE) {
    await this.pages.brpLostStolenWhereAreYouNowPage.assertPageTitle();
    if (whereAreYouNow === ConstantsLib.OUTSIDE_UK_ROUTE) {
      await this.pages.brpLostStolenWhereAreYouNowPage.answerWhereAreYouOutsideUk();
    } else {
      await this.pages.brpLostStolenWhereAreYouNowPage.answerWhereAreYouInUk();
    }
    await this.pages.brpLostStolenWhenRealisePage.assertPageTitle();
    await this.pages.brpLostStolenWhenRealisePage.answerWhenRealise();
    await this.pages.brpLostStolenPersonalDetailsPage.assertPageTitle();
    await this.pages.brpLostStolenPersonalDetailsPage.enterDetails();
    await this.pages.brpLostStolenHowContactPage.assertPageTitle();
    await this.pages.brpLostStolenHowContactPage.answerHowContact();
    await this.pages.brpCheckDetailsPage.assertPageTitle();
    await this.pages.brpCheckDetailsPage.answerNo();
  }

  async openBrpNotDeliveredHomePage() {
    await this.pages.brpNotDeliveredHomePage.openBrpNotDeliveredHomePage();
  }

  async answerBrpNotDeliveredProcess(hasTrackingNumber: boolean, hasHomeOfficeLetter: boolean) {
    await this.pages.brpNotArrivedWhereYouDueToCollectFromPOPage.assertPageTitle();
    await this.pages.brpNotArrivedWhereYouDueToCollectFromPOPage.NotCollectFromPO();
    if (hasTrackingNumber) {
      await this.pages.brpNotArrivedTrackingNumPage.yesTrackingNum();
    } else {
      await this.pages.brpNotArrivedTrackingNumPage.NoTrackingNum();
    }
    if (hasHomeOfficeLetter) {
      await this.pages.brpNotArrivedHaveYouReceivedLetterFromHOPage.assertPageTitle();
      await this.pages.brpNotArrivedHaveYouReceivedLetterFromHOPage.answerYesReceivedLetterHO();
      await this.pages.brpNotArrivedWouldYouLikeBrpSentPage.yesBrpSent();
      await this.pages.brpNotArrivedPersonalDetailsPage.assertPageTitle();
      await this.pages.brpNotArrivedPersonalDetailsPage.enterDetailsND();
      await this.pages.brpHowContactAboutBrpPage.assertPageTitle();
      await this.pages.brpHowContactAboutBrpPage.answerHowContact();
      await this.pages.brpCheckDetailsPage.assertPageTitle();
      await this.pages.brpCheckDetailsPage.answerNo();
    } else {
      await this.pages.brpNotArrivedHaveYouReceivedLetterFromHOPage.assertPageTitle();
      await this.pages.brpNotArrivedHaveYouReceivedLetterFromHOPage.answerNotReceivedLetterHO();
      await this.pages.brpNotArrivedContactUsPage.assertPageTitle();
      await this.pages.brpNotArrivedContactUsPage.noLetter();
    }
  }

  async openBrpReportProblemHomePage() {
    await this.pages.brpReportProblemHomePage.openReportAProblemPage();
  }

  async answerBrpReportProblemProcess(
    whereApplied: typeof ConstantsLib.UK_ROUTE | typeof ConstantsLib.OUTSIDE_UK_ROUTE,
    problem: string,
    answerAddressQuestionWithYes: boolean
  ) {
    if (whereApplied === ConstantsLib.OUTSIDE_UK_ROUTE) {
      await this.pages.brpProblemWhereApplyPage.assertPageTitle();
      await this.pages.brpProblemWhereApplyPage.answerOutsideUkButton();
      await this.answerProblemWithBrp(problem);
      await this.pages.brpProblemIsThereSuitableUkAddressPage.assertPageTitle();
      if (answerAddressQuestionWithYes) {
        await this.pages.brpProblemIsThereSuitableUkAddressPage.answerYes();
      } else {
        await this.pages.brpProblemIsThereSuitableUkAddressPage.answerNo();
      }
    } else {
      await this.pages.brpProblemWhereApplyPage.assertPageTitle();
      await this.pages.brpProblemWhereApplyPage.answerUkButton();
      await this.answerProblemWithBrp(problem);
      await this.pages.brpProblemAddressSameAsDeliveryPage.assertPageTitle();
      if (answerAddressQuestionWithYes) {
        await this.pages.brpProblemAddressSameAsDeliveryPage.answerYes();
      } else {
        await this.pages.brpProblemAddressSameAsDeliveryPage.answerNo();
      }
    }
    await this.pages.brpHowPersonalDetailsAppearPage.assertPageTitle();
    await this.pages.brpHowPersonalDetailsAppearPage.answerHowDoPersonalDetailAppearOnBrp();
    await this.pages.brpHowContactAboutBrpPage.assertPageTitle();
    await this.pages.brpHowContactAboutBrpPage.answerHowContact();
    await this.pages.brpCheckDetailsPage.assertPageTitle();
    await this.pages.brpCheckDetailsPage.answerNo();
  }

  async answerProblemWithBrp(problem: string) {
    await this.pages.brpProblemWhatProblemPage.assertPageTitle();
    switch (problem) {
      case ConstantsLib.PROBLEM_FAMILY_NAME:
        await this.pages.brpProblemWhatProblemPage.answerFamilyName();
        break;
      case ConstantsLib.PROBLEM_GIVEN_NAME:
        await this.pages.brpProblemWhatProblemPage.answerGivenName();
        break;
      case ConstantsLib.PROBLEM_PLACE_OF_BIRTH:
        await this.pages.brpProblemWhatProblemPage.answerPlaceBirth();
        break;
      case ConstantsLib.PROBLEM_DATE_OF_BIRTH:
        await this.pages.brpProblemWhatProblemPage.answerDOB();
        break;
      case ConstantsLib.PROBLEM_GENDER:
        await this.pages.brpProblemWhatProblemPage.answerGender();
        break;
      case ConstantsLib.PROBLEM_SPONSOR_REFERENCE:
        await this.pages.brpProblemWhatProblemPage.answerSponsorRef();
        break;
      case ConstantsLib.PROBLEM_NATIONALITY:
        await this.pages.brpProblemWhatProblemPage.answerNationality();
        break;
      case ConstantsLib.PROBLEM_SIGNATURE:
        await this.pages.brpProblemWhatProblemPage.answerSignature();
        break;
      case ConstantsLib.PROBLEM_PHOTOGRAPH:
        await this.pages.brpProblemWhatProblemPage.answerPhoto();
        break;
      case ConstantsLib.PROBLEM_NATIONAL_INSURANCE:
        await this.pages.brpProblemWhatProblemPage.answerNINum();
        break;
      case ConstantsLib.PROBLEM_DAMAGED_BRP:
        await this.pages.brpProblemWhatProblemPage.answerFaultyBrp();
        break;
      case ConstantsLib.PROBLEM_CONDITIONS:
        await this.pages.brpProblemWhatProblemPage.answerCondition();
        break;
      case ConstantsLib.PROBLEM_LENGTH_OF_STAY:
        await this.pages.brpProblemWhatProblemPage.answerLengthStay();
        break;
      case ConstantsLib.PROBLEM_BIOGRAPHICS:
        await this.pages.brpProblemWhatProblemPage.answerBiography();
        break;
      case ConstantsLib.PROBLEM_BRP_NOT_WORKING:
        await this.pages.brpProblemWhatProblemPage.answerBrpDoesnWork();
        break;
      default:
        throw new Error(`Unexpected problem with BRP value: ${problem}`);
    }
  }

  async openBrpSomeoneElseHomePage() {
    await this.pages.brpSomeOneElseHomePage.openBrpSomeOneElseHomePage();
  }

  async someoneElseCollectingRoute(reason: typeof ConstantsLib.MEDICAL_HELP_REASON | typeof ConstantsLib.UNDER_18_REASON) {
    await this.pages.whoWouldYouLikeToNominatePage.assertPageTitle();
    await this.pages.whoWouldYouLikeToNominatePage.enterDetailsOfPersonNominated();
    await this.pages.whyDoYouNeedSomeOneToCollectPage.assertPageTitle();
    if (reason === ConstantsLib.MEDICAL_HELP_REASON) {
      await this.pages.whyDoYouNeedSomeOneToCollectPage.medicalReasonForSomeOneElseToCollect();
    } else {
      await this.pages.whyDoYouNeedSomeOneToCollectPage.ageReasonForSomeOneElseToCollect();
    }
    await this.pages.brpSomeoneElsePersonalDetailsPage.assertPageTitle();
    await this.pages.brpSomeoneElsePersonalDetailsPage.answerWhatAreYourPersonalDetailsSE();
    await this.pages.brpHowContactAboutBrpPage.assertPageTitle();
    await this.pages.brpHowContactAboutBrpPage.answerHowContact();
    await this.pages.brpCheckDetailsPage.assertPageTitle();
    await this.pages.brpCheckDetailsPage.answerNo();
  }
}

function stepLib(pages: Pages) {
  return new BrpStepLib(pages);
}

Given('I visit the Biometric Residence Permit collection page', async ({ pages }) => {
  await stepLib(pages).openBrpCollectionHomePage();
});

When('I fill out the answers to the BRP collection form pertaining to {string}', async ({ pages }, scenario: string) => {
  switch (scenario.toLowerCase()) {
    case ConstantsLib.SCENARIO_COLLECTION_UNKNOWN_POST_OFFICE:
      await stepLib(pages).answerPostOfficeCollectionRoute(ConstantsLib.COLLECTION_REASON_UNKNOWN_POST_OFFICE);
      break;
    case ConstantsLib.SCENARIO_COLLECTION_OTHER_PERSON:
      await stepLib(pages).answerPostOfficeCollectionRoute(ConstantsLib.COLLECTION_REASON_OTHER_PERSON);
      break;
    case ConstantsLib.SCENARIO_COLLECTION_SPONSOR_IDENTITY:
      await stepLib(pages).answerSponsorCollectionRoute(ConstantsLib.COLLECTION_REASON_IDENTITY);
      break;
    default:
      throw new Error(`Invalid BRP collection scenario: ${scenario}`);
  }
});

Given('I visit the Biometric Residence Permit lost stolen page', async ({ pages }) => {
  await stepLib(pages).openBrpLostStolenHomePage();
});

When('I fill out the answers to the BRP lost stolen form pertaining to {string}', async ({ pages }, scenario: string) => {
  switch (scenario.toLowerCase()) {
    case ConstantsLib.SCENARIO_LOST_STOLEN_UK:
      await stepLib(pages).answerLostStolenProcess(ConstantsLib.UK_ROUTE);
      break;
    case ConstantsLib.SCENARIO_LOST_STOLEN_OUTSIDE_UK:
      await stepLib(pages).answerLostStolenProcess(ConstantsLib.OUTSIDE_UK_ROUTE);
      break;
    default:
      throw new Error(`Invalid BRP lost stolen scenario: ${scenario}`);
  }
});

Given('I visit the Biometric Residence Permit not delivered page', async ({ pages }) => {
  await stepLib(pages).openBrpNotDeliveredHomePage();
});

When('I fill out the answers to the BRP not delivered form pertaining to {string}', async ({ pages }, scenario: string) => {
  switch (scenario.toLowerCase()) {
    case ConstantsLib.SCENARIO_NOT_DELIVERED_TRACKING:
      await stepLib(pages).answerBrpNotDeliveredProcess(
        ConstantsLib.NOT_DELIVERED_WITH_TRACKING.hasTrackingNumber,
        ConstantsLib.NOT_DELIVERED_WITH_TRACKING.hasHomeOfficeLetter
      );
      break;
    case ConstantsLib.SCENARIO_NOT_DELIVERED_NO_TRACKING:
      await stepLib(pages).answerBrpNotDeliveredProcess(
        ConstantsLib.NOT_DELIVERED_WITHOUT_TRACKING.hasTrackingNumber,
        ConstantsLib.NOT_DELIVERED_WITHOUT_TRACKING.hasHomeOfficeLetter
      );
      break;
    default:
      throw new Error(`Invalid BRP not delivered scenario: ${scenario}`);
  }
});

Given('I visit the Biometric Residence Permit report problem page', async ({ pages }) => {
  await stepLib(pages).openBrpReportProblemHomePage();
});

When('I fill out the answers to the BRP report problem form pertaining to {string}', async ({ pages }, scenario: string) => {
  switch (scenario.toLowerCase()) {
    case ConstantsLib.SCENARIO_PROBLEM_FAMILY_NAME:
      await stepLib(pages).answerBrpReportProblemProcess(
        ConstantsLib.REPORT_PROBLEM_FAMILY_NAME.whereApplied,
        ConstantsLib.REPORT_PROBLEM_FAMILY_NAME.problem,
        ConstantsLib.REPORT_PROBLEM_FAMILY_NAME.answerAddressQuestionWithYes
      );
      break;
    case ConstantsLib.SCENARIO_PROBLEM_GIVEN_NAME:
      await stepLib(pages).answerBrpReportProblemProcess(
        ConstantsLib.REPORT_PROBLEM_GIVEN_NAME.whereApplied,
        ConstantsLib.REPORT_PROBLEM_GIVEN_NAME.problem,
        ConstantsLib.REPORT_PROBLEM_GIVEN_NAME.answerAddressQuestionWithYes
      );
      break;
    case ConstantsLib.SCENARIO_PROBLEM_PLACE_OF_BIRTH:
      await stepLib(pages).answerBrpReportProblemProcess(
        ConstantsLib.REPORT_PROBLEM_PLACE_OF_BIRTH.whereApplied,
        ConstantsLib.REPORT_PROBLEM_PLACE_OF_BIRTH.problem,
        ConstantsLib.REPORT_PROBLEM_PLACE_OF_BIRTH.answerAddressQuestionWithYes
      );
      break;
    case ConstantsLib.SCENARIO_PROBLEM_DATE_OF_BIRTH:
      await stepLib(pages).answerBrpReportProblemProcess(
        ConstantsLib.REPORT_PROBLEM_DATE_OF_BIRTH.whereApplied,
        ConstantsLib.REPORT_PROBLEM_DATE_OF_BIRTH.problem,
        ConstantsLib.REPORT_PROBLEM_DATE_OF_BIRTH.answerAddressQuestionWithYes
      );
      break;
    default:
      throw new Error(`Invalid BRP report problem scenario: ${scenario}`);
  }
});

Given('I visit the Biometric Residence Permit someone else applicant page', async ({ pages }) => {
  await stepLib(pages).openBrpSomeoneElseHomePage();
});

When('I fill out the answers to the BRP someone else applicant form pertaining to {string}', async ({ pages }, scenario: string) => {
  switch (scenario.toLowerCase()) {
    case ConstantsLib.SCENARIO_SOMEONE_ELSE_MEDICAL:
      await stepLib(pages).someoneElseCollectingRoute(ConstantsLib.MEDICAL_HELP_REASON);
      break;
    case ConstantsLib.SCENARIO_SOMEONE_ELSE_UNDER_18:
      await stepLib(pages).someoneElseCollectingRoute(ConstantsLib.UNDER_18_REASON);
      break;
    default:
      throw new Error(`Invalid BRP someone else applicant scenario: ${scenario}`);
  }
});