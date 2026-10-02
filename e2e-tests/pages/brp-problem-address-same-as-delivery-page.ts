import { Locator, Page } from '@playwright/test';
import { basePage } from './base-page';

export class brpProblemAddressSameAsDeliveryPage extends basePage {
  readonly houseNumber: Locator;
  readonly street: Locator;
  readonly town: Locator;
  readonly county: Locator;
  readonly postcode: Locator;

  constructor(page: Page) {
    super(page);
    this.houseNumber = page.locator('#same-address-house-number');
    this.street = page.locator('#same-address-street');
    this.town = page.locator('#same-address-town');
    this.county = page.locator('#same-address-county');
    this.postcode = page.locator('#same-address-postcode');
  }

  async expectedPageTitle(): Promise<string> {
    return 'Is your address the same as the address on the delivery letter? - Biometric Residence Permit - GOV.UK';
  }

  async answerYes(yesOption: string) {
    await this.selectRadioByValue(yesOption);
    await this.clickContinueBrp();
  }

  async answerNo(noOption: string, houseNumber: string, street: string, town: string, county: string, postcode: string) {
    await this.selectRadioByValue(noOption);
    await this.clearAndEnterTextInElement(this.houseNumber, houseNumber);
    await this.clearAndEnterTextInElement(this.street, street);
    await this.clearAndEnterTextInElement(this.town, town);
    await this.clearAndEnterTextInElement(this.county, county);
    await this.clearAndEnterTextInElement(this.postcode, postcode);
    await this.clickContinueBrp();
  }
}