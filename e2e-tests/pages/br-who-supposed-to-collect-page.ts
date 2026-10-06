import { Locator, Page } from '@playwright/test';
import { basePage } from './base-page';

export class brWhoSupposedToCollectPage extends basePage {
  readonly nominatedFullName: Locator;
  readonly nominatedNationality: Locator;
  readonly nominatedIdNumber: Locator;

  constructor(page: Page) {
    super(page);
    this.nominatedFullName = page.locator('#nominated-fullname');
    this.nominatedNationality = page.locator('#nominated-nationality');
    this.nominatedIdNumber = page.locator('#nominated-id-number');
  }

  async expectedPageTitle(): Promise<string> {
    return 'Who was supposed to collect your BRP on your behalf? – Biometric Residence Permit – GOV.UK';
  }

  async enterCollectingPersonPersonalDetails(fullName: string, dateOfBirth: string, nationality: string, passportNumber: string) {
    await this.clearAndEnterTextInElement(this.nominatedFullName, fullName);
    await this.enterDateOrDob(dateOfBirth);
    await this.fillById('nominated-nationality', nationality);
    await this.clearAndEnterTextInElement(this.nominatedIdNumber, passportNumber);
    await this.clickContinueBrp();
  }

}