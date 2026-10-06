import { Locator, Page } from '@playwright/test';
import { basePage } from './base-page';

export class brpNotArrivedTrackingNumPage extends basePage {
  readonly trackingNumber: Locator;

  constructor(page: Page) {
    super(page);
    this.trackingNumber = page.locator('#tracking-number');
  }

  async expectedPageTitle(): Promise<string> {
    return 'Do you have a tracking number? – Biometric Residence Permit – GOV.UK';
  }

  async yesTrackingNum(yesOption: string, trackingNumber: string) {
    await this.selectRadioByValue(yesOption);
    await this.clearAndEnterTextInElement(this.trackingNumber, trackingNumber);
    await this.clickContinueBrp();
  }

  async NoTrackingNum(noOption: string) {
    await this.selectRadioByValue(noOption);
    await this.clickContinueBrp();
  }

}