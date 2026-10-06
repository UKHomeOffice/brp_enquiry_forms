import { Locator, Page } from '@playwright/test';
import { basePage } from './base-page';

export class brpLostStolenWhereAreYouNowPage extends basePage {
  readonly countryTextBox: Locator;

  constructor(page: Page) {
    super(page);
    this.countryTextBox = page.locator('#country');
  }

  async expectedPageTitle(): Promise<string> {
    return 'Where are you now? – Biometric Residence Permit – GOV.UK';
  }

  async answerWhereAreYouInUk(yesOption: string) {
    await this.selectRadioByValue(yesOption);
    await this.clickContinueBrp();
  }

  async answerWhereAreYouOutsideUk(noOption: string, country: string) {
    await this.selectRadioByValue(noOption);
    await this.fillById('country', country);
    await this.clickContinueBrp();
  }

}