import { Locator, Page } from '@playwright/test';
import { basePage } from './base-page';

export class brpSomeoneElsePersonalDetailsPage extends basePage {
  readonly fullNameTextBoxSE: Locator;
  readonly countryOfNationalityTextBoxSE: Locator;
  readonly passportNumTextBoxSE: Locator;

  constructor(page: Page) {
    super(page);
    this.fullNameTextBoxSE = page.locator('#fullname');
    this.countryOfNationalityTextBoxSE = page.locator('#nationality');
    this.passportNumTextBoxSE = page.locator('#passport');
  }

  async expectedPageTitle(): Promise<string> {
    return 'What are your personal details? - Biometric Residence Permit - GOV.UK';
  }

  async answerWhatAreYourPersonalDetailsSE(fullName: string, dateOfBirth: string, nationality: string, passportNumber: string) {
    await this.clearAndEnterTextInElement(this.fullNameTextBoxSE, fullName);
    await this.enterDateOrDob(dateOfBirth);
    await this.fillById('nationality', nationality);
    await this.clearAndEnterTextInElement(this.passportNumTextBoxSE, passportNumber);
    await this.clickContinueBrp();
  }
}