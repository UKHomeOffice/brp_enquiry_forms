import { Page } from '@playwright/test';
import { basePage } from './base-page';

export class brpProblemWhereApplyPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async expectedPageTitle(): Promise<string> {
    return 'Where did you apply for your visa? - Biometric Residence Permit - GOV.UK';
  }

  async answerUkButton(yesOption: string) {
    await this.selectRadioByValue(yesOption);
    await this.clickContinueBrp();
  }

  async answerOutsideUkButton(noOption: string) {
    await this.selectRadioByValue(noOption);
    await this.clickContinueBrp();
  }
}