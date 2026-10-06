import { Locator, Page } from '@playwright/test';
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
    return "Why couldn't you collect your BRP? – Biometric Residence Permit – GOV.UK";
  }

  async answerWhichPostOfficeINeedToCollect(option: string, details: string) {
    await this.selectRadioByValue(option);
    await this.clearAndEnterTextInElement(this.whichPostOffice, details);
    await this.clickContinueBrp();
  }

  async answerUnder18AndAttemptedCollection(option: string, details: string) {
    await this.selectRadioByValue(option);
    await this.clearAndEnterTextInElement(this.underAge, details);
    await this.clickContinueBrp();
  }

  async answerICouldNotProveMyIdentity(option: string, details: string) {
    await this.selectRadioByValue(option);
    await this.clearAndEnterTextInElement(this.nonIdentity, details);
    await this.clickContinueBrp();
  }

  async answerSomeoneAttemptedToCollect(option: string, details: string) {
    await this.selectRadioByValue(option);
    await this.clearAndEnterTextInElement(this.othersIdentity, details);
    await this.clickContinueBrp();
  }

  async answerTheVignette(option: string, details: string) {
    await this.selectRadioByValue(option);
    await this.clearAndEnterTextInElement(this.passportFamily, details);
    await this.clickContinueBrp();
  }

  async answerIHaveLostMyPassport(option: string, details: string) {
    await this.selectRadioByValue(option);
    await this.clearAndEnterTextInElement(this.passportLost, details);
    await this.clickContinueBrp();
  }

  async answerMyBRPWasNotThere(option: string) {
    await this.selectRadioByValue(option);
    await this.clickContinueBrp();
  }

}