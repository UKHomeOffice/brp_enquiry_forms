import { Locator, Page } from '@playwright/test';
import { basePage } from './base-page';

export class brpWhyCouldNotCollectSponsorPage extends basePage {
  readonly myBrpWasNotThereSponsor: Locator;
  readonly nonIdentity: Locator;
  readonly passportLost: Locator;

  constructor(page: Page) {
    super(page);
    this.myBrpWasNotThereSponsor = page.locator('#reason-radio-no-brp, input[value="no-brp"]');
    this.nonIdentity = page.locator('#non-identity');
    this.passportLost = page.locator('#passport-lost');
  }

  async expectedPageTitle(): Promise<string> {
    return "Why couldn't you collect your BRP? - Biometric Residence Permit - GOV.UK";
  }

  async answerICouldNotProveMyIdentity(option: string, details: string) {
    await this.selectRadioByValue(option);
    await this.clearAndEnterTextInElement(this.nonIdentity, details);
    await this.clickContinueBrp();
  }

  async answerIHaveLostMyPassport(option: string, details: string) {
    await this.selectRadioByValue(option);
    await this.clearAndEnterTextInElement(this.passportLost, details);
    await this.clickContinueBrp();
  }
}