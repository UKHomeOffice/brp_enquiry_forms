import { Locator, Page } from '@playwright/test';
import { ConstantsLib } from '../utility-helper/constants-lib';
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

  async enterDetails() {
    await this.clearAndEnterTextInElement(this.fullName, ConstantsLib.FULL_NAME);
    await this.enterDateOrDob(ConstantsLib.DATE_OF_BIRTH);
    await this.fillById('nationality', ConstantsLib.NATIONALITY);
    await this.selectRadioByValue(ConstantsLib.BRP_CARD_OPTION);
    await this.clearAndEnterTextInElement(this.brpNumberTextBox, ConstantsLib.BRP_NUMBER);
    await this.clickContinueBrp();
  }
}