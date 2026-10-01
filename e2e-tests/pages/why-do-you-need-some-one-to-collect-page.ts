import { Locator, Page } from '@playwright/test';
import { ConstantsLib } from '../utility-helper/constants-lib';
import { basePage } from './base-page';

export class whyDoYouNeedSomeOneToCollectPage extends basePage {
  readonly situationTextBox: Locator;

  constructor(page: Page) {
    super(page);
    this.situationTextBox = page.locator('#incapable-details');
  }

  async expectedPageTitle(): Promise<string> {
    return 'Why do you need someone else to collect your BRP? - Biometric Residence Permit - GOV.UK';
  }

  async medicalReasonForSomeOneElseToCollect() {
    await this.selectRadioByValue(ConstantsLib.INCAPABLE_OPTION);
    await this.clearAndEnterTextInElement(this.situationTextBox, ConstantsLib.SITUATION);
    await this.clickContinueBrp();
  }

  async ageReasonForSomeOneElseToCollect() {
    await this.selectRadioByValue(ConstantsLib.UNDER_18_OPTION);
    await this.clickContinueBrp();
  }
}