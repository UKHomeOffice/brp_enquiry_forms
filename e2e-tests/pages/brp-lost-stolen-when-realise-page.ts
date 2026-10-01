import { Page } from '@playwright/test';
import { ConstantsLib } from '../utility-helper/constants-lib';
import { basePage } from './base-page';

export class brpLostStolenWhenRealisePage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async expectedPageTitle(): Promise<string> {
    return 'When did you realise you no longer had your BRP? - Biometric Residence Permit - GOV.UK';
  }

  async answerWhenRealise() {
    await this.enterDateOrDob(ConstantsLib.BRP_LOST_DATE, 'date-lost');
    await this.clickContinueBrp();
  }
}