import { Locator, Page } from '@playwright/test';
import { basePage } from './base-page';

export class brpCollectionProblemHomePage extends basePage {
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
    return 'Report a problem collecting your BRP - GOV.UK';
  }

  async CollectionProblemPage() {
    await this.page.goto('/collection');
    if (await this.acceptCookieButton.isVisible()) {
      await this.acceptCookieButton.click();
    }
    await this.clickStartNowIfPresent(this.startButton);
  }

}