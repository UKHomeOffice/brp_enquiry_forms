import { Locator, Page } from '@playwright/test';
import { ConstantsLib } from '../utility-helper/constants-lib';
import { basePage } from './base-page';

export class brpLostStolenWhereAreYouNowPage extends basePage {
  readonly countryTextBox: Locator;

  constructor(page: Page) {
    super(page);
    this.countryTextBox = page.locator('#country');
  }

  async expectedPageTitle(): Promise<string> {
    return 'Where are you now? - Biometric Residence Permit - GOV.UK';
  }

  async answerWhereAreYouInUk() {
    await this.selectRadioByValue(ConstantsLib.YES_OPTION);
    await this.clickContinueBrp();
  }

  async answerWhereAreYouOutsideUk() {
    await this.selectRadioByValue(ConstantsLib.NO_OPTION);
    await this.fillById('country', ConstantsLib.NATIONALITY);
    await this.clickContinueBrp();
  }
}