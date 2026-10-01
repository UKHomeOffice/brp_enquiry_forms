import { Locator, Page } from '@playwright/test';
import { ConstantsLib } from '../utility-helper/constants-lib';
import { basePage } from './base-page';

export class brpFromWhereWereYouAskedToCollectPage extends basePage {
  readonly postOfficeButton: Locator;

  constructor(page: Page) {
    super(page);
    this.postOfficeButton = page.locator('#collection-where-radio-Post\\ Office, input[value="Post Office"]');
  }

  async expectedPageTitle(): Promise<string> {
    return 'From where were you asked to collect your BRP? - Biometric Residence Permit - GOV.UK';
  }

  async enterDate() {
    await this.enterDateOrDob(ConstantsLib.BRP_COLLECTION_DATE, 'collection-date');
  }

  async answerPostOffice() {
    await this.selectRadioByValue(ConstantsLib.POST_OFFICE_OPTION);
    await this.enterDate();
    await this.clickContinueBrp();
  }

  async answerSponsor() {
    await this.selectRadioByValue(ConstantsLib.SPONSOR_OPTION);
    await this.enterDate();
    await this.clickContinueBrp();
  }
}