import { Page } from '@playwright/test';
import { ConstantsLib } from '../utility-helper/constants-lib';
import { basePage } from './base-page';

export class brpNotArrivedWhereYouDueToCollectFromPOPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async expectedPageTitle(): Promise<string> {
    return 'Were you due to collect your document from the Post Office? - Biometric Residence Permit - GOV.UK';
  }

  async NotCollectFromPO() {
    await this.selectRadioByValue(ConstantsLib.NO_OPTION);
    await this.clickContinueBrp();
  }
}