import { Locator, Page } from '@playwright/test';
import { basePage } from './base-page';

export class brpHowPersonalDetailsAppearPage extends basePage {
  readonly fullNameTextBox: Locator;
  readonly countryOfNationalityTextBox: Locator;
  readonly brpNumberTextBox: Locator;

  constructor(page: Page) {
    super(page);
    this.fullNameTextBox = page.locator('#fullname');
    this.countryOfNationalityTextBox = page.locator('#nationality');
    this.brpNumberTextBox = page.locator('#brp-card-number');
  }

  async expectedPageTitle(): Promise<string> {
    return 'How do your personal details appear on your BRP? – Biometric Residence Permit – GOV.UK';
  }

  async answerHowDoPersonalDetailAppearOnBrp(fullName: string, dateOfBirth: string, nationality: string, cardOption: string, brpNumber: string) {
    await this.clearAndEnterTextInElement(this.fullNameTextBox, fullName);
    await this.enterDateOrDob(dateOfBirth);
    await this.fillById('nationality', nationality);
    await this.selectRadioByValue(cardOption);
    await this.clearAndEnterTextInElement(this.brpNumberTextBox, brpNumber);
    await this.clickContinueBrp();
  }

}