import { Locator, Page } from '@playwright/test';
import { ConstantsLib } from '../utility-helper/constants-lib';
import { basePage } from './base-page';

export class brpWhyCouldNotCollectPostOfficePage extends basePage {
  readonly whichPostOffice: Locator;
  readonly underAge: Locator;
  readonly nonIdentity: Locator;
  readonly othersIdentity: Locator;
  readonly passportFamily: Locator;
  readonly passportLost: Locator;

  constructor(page: Page) {
    super(page);
    this.whichPostOffice = page.locator('#which-post-office');
    this.underAge = page.locator('#under-age');
    this.nonIdentity = page.locator('#non-identity');
    this.othersIdentity = page.locator('#others-identity');
    this.passportFamily = page.locator('#passport-family');
    this.passportLost = page.locator('#passport-lost');
  }

  async expectedPageTitle(): Promise<string> {
    return "Why couldn't you collect your BRP? - Biometric Residence Permit - GOV.UK";
  }

  async answerWhichPostOfficeINeedToCollect() {
    await this.selectRadioByValue(ConstantsLib.UNKNOWN_POST_OFFICE_OPTION);
    await this.clearAndEnterTextInElement(this.whichPostOffice, ConstantsLib.UNKNOWN_POST_OFFICE_DETAILS);
    await this.clickContinueBrp();
  }

  async answerUnder18AndAttemptedCollection() {
    await this.selectRadioByValue(ConstantsLib.UNDER_18_OPTION);
    await this.clearAndEnterTextInElement(this.underAge, ConstantsLib.UNDER_18_COLLECTION_DETAILS);
    await this.clickContinueBrp();
  }

  async answerICouldNotProveMyIdentity() {
    await this.selectRadioByValue(ConstantsLib.IDENTITY_PROBLEM_OPTION);
    await this.clearAndEnterTextInElement(this.nonIdentity, ConstantsLib.IDENTITY_PROBLEM_DETAILS);
    await this.clickContinueBrp();
  }

  async answerSomeoneAttemptedToCollect() {
    await this.selectRadioByValue(ConstantsLib.OTHER_COLLECTOR_OPTION);
    await this.clearAndEnterTextInElement(this.othersIdentity, ConstantsLib.OTHER_COLLECTOR_DETAILS);
    await this.clickContinueBrp();
  }

  async answerTheVignette() {
    await this.selectRadioByValue(ConstantsLib.VIGNETTE_PROBLEM_OPTION);
    await this.clearAndEnterTextInElement(this.passportFamily, ConstantsLib.VIGNETTE_PROBLEM_DETAILS);
    await this.clickContinueBrp();
  }

  async answerIHaveLostMyPassport() {
    await this.selectRadioByValue(ConstantsLib.LOST_PASSPORT_OPTION);
    await this.clearAndEnterTextInElement(this.passportLost, ConstantsLib.LOST_PASSPORT_DETAILS);
    await this.clickContinueBrp();
  }

  async answerMyBRPWasNotThere() {
    await this.selectRadioByValue(ConstantsLib.NO_BRP_OPTION);
    await this.clickContinueBrp();
  }
}