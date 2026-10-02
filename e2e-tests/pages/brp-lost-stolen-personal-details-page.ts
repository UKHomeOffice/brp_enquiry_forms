import { Locator, Page } from '@playwright/test';
import { basePage } from './base-page';

export class brpLostStolenPersonalDetailsPage extends basePage {
  readonly fullName: Locator;
  readonly countryOfNationality: Locator;
  readonly brpNumberTextBox: Locator;

  constructor(page: Page) {
    super(page);
    this.fullName = page.locator('#fullname');
    this.countryOfNationality = page.locator('#nationality');
    this.brpNumberTextBox = page.locator('#brp-card-number');
  }

  async expectedPageTitle(): Promise<string> {
    return 'What are your personal details? - Biometric Residence Permit - GOV.UK';
  }

  async enterDetails(fullName: string, dateOfBirth: string, nationality: string, cardOption: string, brpNumber: string) {
    await this.clearAndEnterTextInElement(this.fullName, fullName);
    await this.enterDateOrDob(dateOfBirth);
    await this.fillById('nationality', nationality);
    await this.selectRadioByValue(cardOption);
    await this.clearAndEnterTextInElement(this.brpNumberTextBox, brpNumber);
    await this.clickContinueBrp();
  }
}