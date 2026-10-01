import { Locator, Page } from '@playwright/test';
import { ConstantsLib } from '../utility-helper/constants-lib';
import { basePage } from './base-page';

export class brpNotArrivedHaveYouReceivedLetterFromHOPage extends basePage {
  readonly caseIdBox: Locator;

  constructor(page: Page) {
    super(page);
    this.caseIdBox = page.locator('#case-id-number');
  }

  async expectedPageTitle(): Promise<string> {
    return 'Have you received your decision by letter or email? - Biometric Residence Permit - GOV.UK';
  }

  async answerYesReceivedLetterHO() {
    await this.selectRadioByValue(ConstantsLib.YES_OPTION);
    await this.enterDateOrDob(ConstantsLib.COLLECTION_DATE);
    await this.clearAndEnterTextInElement(this.caseIdBox, ConstantsLib.CASE_ID);
    await this.clickContinueBrp();
  }

  async answerNotReceivedLetterHO() {
    await this.selectRadioByValue(ConstantsLib.NO_OPTION);
    await this.clickContinueBrp();
  }
}