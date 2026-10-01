import { Locator, Page } from '@playwright/test';
import { basePage } from './base-page';

export class brpNotArrivedContactUsPage extends basePage {
  readonly close: Locator;

  constructor(page: Page) {
    super(page);
    this.close = page.locator('#gov-grid-row-content form a, #content a').first();
  }

  async expectedPageTitle(): Promise<string> {
    return 'Contact us - Biometric Residence Permit - GOV.UK';
  }

  async noLetter() {
    await this.close.click();
  }
}