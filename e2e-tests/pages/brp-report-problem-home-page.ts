import { Locator, Page } from '@playwright/test';
import { basePage } from './base-page';

export class brpReportProblemHomePage extends basePage {
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
    return 'Report a problem with your BRP - GOV.UK';
  }

  async openReportAProblemPage() {
    await this.page.goto('/correct-mistakes');
    if (await this.acceptCookieButton.isVisible()) {
      await this.acceptCookieButton.click();
    }
    await this.clickStartNowIfPresent(this.startButton);
  }
}