import { Locator, Page } from '@playwright/test';
import { basePage } from './base-page';

export class brpHowContactAboutBrpPage extends basePage {
  readonly email: Locator;
  readonly phone: Locator;

  constructor(page: Page) {
    super(page);
    this.email = page.locator('#email');
    this.phone = page.locator('#phone');
  }

  async expectedPageTitle(): Promise<string> {
    return 'How should we contact you about your BRP? – Biometric Residence Permit – GOV.UK';
  }

  async answerHowContact(email: string, phone: string) {
    await this.clearAndEnterTextInElement(this.email, email);
    await this.clearAndEnterTextInElement(this.phone, phone);
    await this.clickContinueBrp();
  }

}