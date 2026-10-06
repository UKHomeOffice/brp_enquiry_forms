import { Locator, Page } from '@playwright/test';
import { basePage } from './base-page';

export class brpNotArrivedPersonalDetailsPage extends basePage {
  readonly fullNameNotDelivered: Locator;
  readonly countryOfNationalityNotDelivered: Locator;
  readonly passportNumTextBoxNotDelivered: Locator;

  constructor(page: Page) {
    super(page);
    this.fullNameNotDelivered = page.locator('#fullname');
    this.countryOfNationalityNotDelivered = page.locator('#nationality');
    this.passportNumTextBoxNotDelivered = page.locator('#passport');
  }

  async expectedPageTitle(): Promise<string> {
    return 'What are your personal details? – Biometric Residence Permit – GOV.UK';
  }

  async enterDetailsND(fullName: string, dateOfBirth: string, nationality: string, passportNumber: string) {
    await this.clearAndEnterTextInElement(this.fullNameNotDelivered, fullName);
    await this.enterDateOrDob(dateOfBirth);
    await this.fillById('nationality', nationality);
    await this.clearAndEnterTextInElement(this.passportNumTextBoxNotDelivered, passportNumber);
    await this.clickContinueBrp();
  }

}