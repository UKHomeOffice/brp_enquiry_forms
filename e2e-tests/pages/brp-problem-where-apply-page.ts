import { Page } from '@playwright/test';
import { ConstantsLib } from '../utility-helper/constants-lib';
import { basePage } from './base-page';

export class brpProblemWhereApplyPage extends basePage {
  constructor(page: Page) {
    super(page);
  }

  async expectedPageTitle(): Promise<string> {
    return 'Where did you apply for your visa? - Biometric Residence Permit - GOV.UK';
  }

  async answerUkButton() {
    await this.selectRadioByValue(ConstantsLib.YES_OPTION);
    await this.clickContinueBrp();
  }

  async answerOutsideUkButton() {
    await this.selectRadioByValue(ConstantsLib.NO_OPTION);
    await this.clickContinueBrp();
  }
}