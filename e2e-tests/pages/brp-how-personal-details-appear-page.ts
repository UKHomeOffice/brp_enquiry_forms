import { Locator, Page } from '@playwright/test';
import { ConstantsLib } from '../utility-helper/constants-lib';
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
    return 'How do your personal details appear on your BRP? - Biometric Residence Permit - GOV.UK';
  }

  async answerHowDoPersonalDetailAppearOnBrp() {
    await this.clearAndEnterTextInElement(this.fullNameTextBox, ConstantsLib.FULL_NAME);
    await this.enterDateOrDob(ConstantsLib.DATE_OF_BIRTH);
    await this.fillById('nationality', ConstantsLib.NATIONALITY);
    await this.selectRadioByValue(ConstantsLib.BRP_CARD_OPTION);
    await this.clearAndEnterTextInElement(this.brpNumberTextBox, ConstantsLib.BRP_NUMBER);
    await this.clickContinueBrp();
  }
}