import { Locator, Page } from '@playwright/test';
import { ConstantsLib } from '../utility-helper/constants-lib';
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

  async answerICouldNotProveMyIdentity() {
    await this.selectRadioByValue(ConstantsLib.IDENTITY_PROBLEM_OPTION);
    await this.clearAndEnterTextInElement(this.nonIdentity, ConstantsLib.IDENTITY_PROBLEM_DETAILS);
    await this.clickContinueBrp();
  }

  async answerIHaveLostMyPassport() {
    await this.selectRadioByValue(ConstantsLib.LOST_PASSPORT_OPTION);
    await this.clearAndEnterTextInElement(this.passportLost, ConstantsLib.LOST_PASSPORT_DETAILS);
    await this.clickContinueBrp();
  }
}