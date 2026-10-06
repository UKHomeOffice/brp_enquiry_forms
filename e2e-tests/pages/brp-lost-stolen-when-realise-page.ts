import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class brpLostStolenWhenRealisePage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async expectedPageTitle(): Promise<string> {
    return 'When did you realise you no longer had your BRP? – Biometric Residence Permit – GOV.UK';
  }

  async answerWhenRealise(lostDate: string) {
    await this.enterDateOrDob(lostDate, 'date-lost');
    await this.clickContinueBrp();
  }

}