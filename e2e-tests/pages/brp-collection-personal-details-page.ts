import { Locator, Page } from '@playwright/test';
import { ConstantsLib } from '../utility-helper/constants-lib';
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

  async enterDetails() {
    await this.clearAndEnterTextInElement(this.fullName, ConstantsLib.FULL_NAME);
    await this.enterDateOrDob(ConstantsLib.ALTERNATIVE_DATE_OF_BIRTH);
    await this.fillById('nationality', ConstantsLib.NATIONALITY);
    await this.clearAndEnterTextInElement(this.passportNumber, ConstantsLib.COLLECTION_PASSPORT_NUMBER);
    await this.clickContinueBrp();
  }
}