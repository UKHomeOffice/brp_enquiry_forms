import { Locator, Page } from '@playwright/test';
import { basePage } from './base-page';

export class brpSomeOneElseHomePage extends basePage {
  readonly acceptCookieButton: Locator;
  readonly rejectCookieButton: Locator;
  readonly startButton: Locator;
  readonly fullNameTextBox: Locator;
  readonly nationalityTextBox: Locator;
  readonly idNumberTextBox: Locator;

  constructor(page: Page) {
    super(page);
    this.acceptCookieButton = page.locator('#accept-cookies-button');
    this.rejectCookieButton = page.locator('#reject-cookies-button');
    this.startButton = page.getByRole('link', { name: 'Start now' }).or(page.locator('a:has-text("Start now")'));
    this.fullNameTextBox = page.locator('#someone-else-fullname');
    this.nationalityTextBox = page.locator('#someone-else-nationality');
    this.idNumberTextBox = page.locator('#someone-else-id-number');
  }

  async expectedPageTitle(): Promise<string> {
    return 'Ask for someone else to collect your BRP - GOV.UK';
  }

  async openBrpSomeOneElseHomePage() {
    await this.page.goto('/someone-else');
    if (await this.acceptCookieButton.isVisible()) {
      await this.acceptCookieButton.click();
    }
    await this.clickStartNowIfPresent(this.startButton);
  }
}