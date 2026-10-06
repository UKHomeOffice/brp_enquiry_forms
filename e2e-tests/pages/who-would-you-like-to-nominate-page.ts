import { Locator, Page } from '@playwright/test';
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
    return 'Who would you like to nominate? – Biometric Residence Permit – GOV.UK';
  }

  async enterDetailsOfPersonNominated(fullName: string, dateOfBirth: string, nationality: string, idType: string, idNumber: string) {
    await this.clearAndEnterTextInElement(this.fullNameTextBox, fullName);
    await this.enterDateOrDob(dateOfBirth);
    await this.fillById('someone-else-nationality', nationality);
    await this.selectRadioByValue(idType);
    await this.clearAndEnterTextInElement(this.idNumberTextBox, idNumber);
    await this.clickContinueBrp();
  }

}