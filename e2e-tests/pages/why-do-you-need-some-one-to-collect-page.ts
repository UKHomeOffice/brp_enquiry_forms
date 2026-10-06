import { Locator, Page } from '@playwright/test';
import { basePage } from './base-page';

export class whyDoYouNeedSomeOneToCollectPage extends basePage {
  readonly situationTextBox: Locator;

  constructor(page: Page) {
    super(page);
    this.situationTextBox = page.locator('#incapable-details');
  }

  async expectedPageTitle(): Promise<string> {
    return 'Why do you need someone else to collect your BRP? – Biometric Residence Permit – GOV.UK';
  }

  async medicalReasonForSomeOneElseToCollect(option: string, situation: string) {
    await this.selectRadioByValue(option);
    await this.clearAndEnterTextInElement(this.situationTextBox, situation);
    await this.clickContinueBrp();
  }

  async ageReasonForSomeOneElseToCollect(option: string) {
    await this.selectRadioByValue(option);
    await this.clickContinueBrp();
  }

}