import { Locator, Page } from '@playwright/test';
import { ConstantsLib } from '../utility-helper/constants-lib';
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
    return 'What are your personal details? - Biometric Residence Permit - GOV.UK';
  }

  async enterDetailsND() {
    await this.clearAndEnterTextInElement(this.fullNameNotDelivered, ConstantsLib.FULL_NAME);
    await this.enterDateOrDob(ConstantsLib.ALTERNATIVE_DATE_OF_BIRTH);
    await this.fillById('nationality', ConstantsLib.NATIONALITY);
    await this.clearAndEnterTextInElement(this.passportNumTextBoxNotDelivered, ConstantsLib.PASSPORT_NUMBER);
    await this.clickContinueBrp();
  }
}