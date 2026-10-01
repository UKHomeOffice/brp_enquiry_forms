import { Locator, Page } from '@playwright/test';
import { ConstantsLib } from '../utility-helper/constants-lib';
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

  async answerWhatAreYourPersonalDetailsSE() {
    await this.clearAndEnterTextInElement(this.fullNameTextBoxSE, ConstantsLib.FULL_NAME);
    await this.enterDateOrDob(ConstantsLib.SOMEONE_ELSE_DATE_OF_BIRTH);
    await this.fillById('nationality', ConstantsLib.NATIONALITY);
    await this.clearAndEnterTextInElement(this.passportNumTextBoxSE, ConstantsLib.PASSPORT_NUMBER);
    await this.clickContinueBrp();
  }
}