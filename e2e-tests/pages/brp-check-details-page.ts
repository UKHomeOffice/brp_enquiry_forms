import { Locator, Page } from '@playwright/test';
import { basePage } from './base-page';

export class brpCheckDetailsPage extends basePage {
  readonly send: Locator;

  constructor(page: Page) {
    super(page);
    this.send = page.locator('input[value="Send"], button:has-text("Send")');
  }

  async expectedPageTitle(): Promise<string> {
    const title = await this.page.title();
    return title.includes('Biometric Residence Permit')
      ? 'Check the details you have provided - Biometric Residence Permit - GOV.UK'
      : 'Check the details you have provided - GOV.UK';
  }

  async answerNoAndSelectSendbutton() {
    await this.noButton.check({ force: true });
    await this.send.first().click();
  }
}