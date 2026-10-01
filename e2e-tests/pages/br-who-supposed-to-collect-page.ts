import { Locator, Page } from '@playwright/test';
import { ConstantsLib } from '../utility-helper/constants-lib';
import { basePage } from './base-page';

export class brWhoSupposedToCollectPage extends basePage {
  readonly nominatedFullName: Locator;
  readonly nominatedNationality: Locator;
  readonly nominatedIdNumber: Locator;

  constructor(page: Page) {
    super(page);
    this.nominatedFullName = page.locator('#nominated-fullname');
    this.nominatedNationality = page.locator('#nominated-nationality');
    this.nominatedIdNumber = page.locator('#nominated-id-number');
  }

  async expectedPageTitle(): Promise<string> {
    return 'Who was supposed to collect your BRP on your behalf? - Biometric Residence Permit - GOV.UK';
  }

  async enterCollectingPersonPersonalDetails() {
    await this.clearAndEnterTextInElement(this.nominatedFullName, ConstantsLib.NOMINATED_FULL_NAME);
    await this.enterDateOrDob(ConstantsLib.DATE_OF_BIRTH, 'nominated-date');
    await this.fillById('nominated-nationality', ConstantsLib.NATIONALITY);
    await this.clearAndEnterTextInElement(this.nominatedIdNumber, ConstantsLib.PASSPORT_NUMBER);
    await this.clickContinueBrp();
  }
}