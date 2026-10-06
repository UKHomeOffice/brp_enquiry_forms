import { Locator, Page } from '@playwright/test';
import { basePage } from './base-page';

export class brpFromWhereWereYouAskedToCollectPage extends basePage {
  readonly postOfficeButton: Locator;

  constructor(page: Page) {
    super(page);
    this.postOfficeButton = page.locator('#collection-where-radio-Post\\ Office, input[value="Post Office"]');
  }

  async expectedPageTitle(): Promise<string> {
    return 'From where were you asked to collect your BRP? – Biometric Residence Permit – GOV.UK';
  }

  async enterDate(collectionDate: string) {
    await this.enterDateOrDob(collectionDate);
  }

  async answerPostOffice(option: string, collectionDate: string) {
    await this.selectRadioByValue(option);
    await this.enterDate(collectionDate);
    await this.clickContinueBrp();
  }

  async answerSponsor(option: string, collectionDate: string) {
    await this.selectRadioByValue(option);
    await this.enterDate(collectionDate);
    await this.clickContinueBrp();
  }

}