import { Locator, Page } from '@playwright/test';
import { basePage } from './base-page';

export class brpNotArrivedHaveYouReceivedLetterFromHOPage extends basePage {
  readonly caseIdBox: Locator;

  constructor(page: Page) {
    super(page);
    this.caseIdBox = page.locator('#case-id-number');
  }

  async expectedPageTitle(): Promise<string> {
    return 'Have you received your decision by letter or email? – Biometric Residence Permit – GOV.UK';
  }

  async answerYesReceivedLetterHO(yesOption: string, collectionDate: string, caseId: string) {
    await this.selectRadioByValue(yesOption);
    await this.enterDateOrDob(collectionDate);
    await this.clearAndEnterTextInElement(this.caseIdBox, caseId);
    await this.clickContinueBrp();
  }

  async answerNotReceivedLetterHO(noOption: string) {
    await this.selectRadioByValue(noOption);
    await this.clickContinueBrp();
  }

}