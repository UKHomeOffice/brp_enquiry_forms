import { Locator, Page } from '@playwright/test';
import { basePage } from './base-page';

export class brpCollectionPersonalDetailsPage extends basePage {
  readonly fullName: Locator;
  readonly countryOfNationality: Locator;
  readonly passportNumber: Locator;

  constructor(page: Page) {
    super(page);
    this.fullName = page.locator('#fullname');
    this.countryOfNationality = page.locator('#nationality');
    this.passportNumber = page.locator('#passport');
  }

  async expectedPageTitle(): Promise<string> {
    return 'What are your personal details? - Biometric Residence Permit - GOV.UK';
  }

  async enterDetails(fullName: string, dateOfBirth: string, nationality: string, passportNumber: string) {
    await this.clearAndEnterTextInElement(this.fullName, fullName);
    await this.enterDateOrDob(dateOfBirth);
    await this.fillById('nationality', nationality);
    await this.clearAndEnterTextInElement(this.passportNumber, passportNumber);
    await this.clickContinueBrp();
  }
}