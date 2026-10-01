import { Locator, Page } from '@playwright/test';
import { ConstantsLib } from '../utility-helper/constants-lib';
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

  async answerYes() {
    await this.selectRadioByValue(ConstantsLib.YES_OPTION);
    await this.clickContinueBrp();
  }

  async answerNo() {
    await this.selectRadioByValue(ConstantsLib.NO_OPTION);
    await this.clearAndEnterTextInElement(this.houseNumber, ConstantsLib.HOUSE_NUMBER);
    await this.clearAndEnterTextInElement(this.street, ConstantsLib.STREET);
    await this.clearAndEnterTextInElement(this.town, ConstantsLib.TOWN);
    await this.clearAndEnterTextInElement(this.county, ConstantsLib.COUNTY);
    await this.clearAndEnterTextInElement(this.postcode, ConstantsLib.POSTCODE);
    await this.clickContinueBrp();
  }
}