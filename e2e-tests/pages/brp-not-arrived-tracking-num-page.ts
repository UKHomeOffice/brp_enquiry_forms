import { Locator, Page } from '@playwright/test';
import { ConstantsLib } from '../utility-helper/constants-lib';
import { basePage } from './base-page';

export class brpNotArrivedTrackingNumPage extends basePage {
  readonly trackingNumber: Locator;

  constructor(page: Page) {
    super(page);
    this.trackingNumber = page.locator('#tracking-number');
  }

  async expectedPageTitle(): Promise<string> {
    return 'Do you have a tracking number? - Biometric Residence Permit - GOV.UK';
  }

  async yesTrackingNum() {
    await this.selectRadioByValue(ConstantsLib.YES_OPTION);
    await this.clearAndEnterTextInElement(this.trackingNumber, ConstantsLib.TRACKING_NUMBER);
    await this.clickContinueBrp();
  }

  async NoTrackingNum() {
    await this.selectRadioByValue(ConstantsLib.NO_OPTION);
    await this.clickContinueBrp();
  }
}