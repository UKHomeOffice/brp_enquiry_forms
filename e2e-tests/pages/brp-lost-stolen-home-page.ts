import { Locator, Page } from '@playwright/test';
import { basePage } from './base-page';

export class brpLostStolenHomePage extends basePage {
  readonly acceptCookieButton: Locator;
  readonly rejectCookieButton: Locator;
  readonly startButton: Locator;

  constructor(page: Page) {
    super(page);
    this.acceptCookieButton = page.locator('#accept-cookies-button');
    this.rejectCookieButton = page.locator('#reject-cookies-button');
    this.startButton = page.getByRole('link', { name: 'Start now' }).or(page.locator('a:has-text("Start now")'));
  }

  async expectedPageTitle(): Promise<string> {
    return 'Report a lost or stolen BRP - GOV.UK';
  }

  async openBrpLostStolenHomePage() {
    await this.page.goto('/lost-stolen');
    if (await this.acceptCookieButton.isVisible()) {
      await this.acceptCookieButton.click();
    }
    await this.clickStartNowIfPresent(this.startButton);
  }

}