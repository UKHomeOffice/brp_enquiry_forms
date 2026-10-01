import { Locator, Page } from '@playwright/test';
import { ConstantsLib } from '../utility-helper/constants-lib';
import { basePage } from './base-page';

export class whoWouldYouLikeToNominatePage extends basePage {
  readonly fullNameTextBox: Locator;
  readonly nationalityTextBox: Locator;
  readonly idNumberTextBox: Locator;

  constructor(page: Page) {
    super(page);
    this.fullNameTextBox = page.locator('#someone-else-fullname');
    this.nationalityTextBox = page.locator('#someone-else-nationality');
    this.idNumberTextBox = page.locator('#someone-else-id-number');
  }

  async expectedPageTitle(): Promise<string> {
    return 'Who would you like to nominate? - Biometric Residence Permit - GOV.UK';
  }

  async enterDetailsOfPersonNominated() {
    await this.clearAndEnterTextInElement(this.fullNameTextBox, ConstantsLib.NOMINATED_FULL_NAME);
    await this.enterDateOrDob(ConstantsLib.DATE_OF_BIRTH);
    await this.fillById('someone-else-nationality', ConstantsLib.NATIONALITY);
    await this.selectRadioByValue(ConstantsLib.PASSPORT_OPTION);
    await this.clearAndEnterTextInElement(this.idNumberTextBox, ConstantsLib.PASSPORT_NUMBER);
    await this.clickContinueBrp();
  }
}