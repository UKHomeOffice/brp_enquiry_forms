import { Locator, Page } from '@playwright/test';
import { ConstantsLib } from '../utility-helper/constants-lib';
import { basePage } from './base-page';

export class brpProblemIsThereSuitableUkAddressPage extends basePage {
  readonly houseNumber: Locator;
  readonly street: Locator;
  readonly town: Locator;
  readonly county: Locator;
  readonly postcode: Locator;

  constructor(page: Page) {
    super(page);
    this.houseNumber = page.locator('#uk-address-house-number');
    this.street = page.locator('#uk-address-street');
    this.town = page.locator('#uk-address-town');
    this.county = page.locator('#uk-address-county');
    this.postcode = page.locator('#uk-address-postcode');
  }

  async expectedPageTitle(): Promise<string> {
    return 'Is there a suitable UK address we can deliver your BRP to? - Biometric Residence Permit - GOV.UK';
  }

  async answerYes() {
    await this.selectRadioByValue(ConstantsLib.YES_OPTION);
    await this.clearAndEnterTextInElement(this.houseNumber, ConstantsLib.HOUSE_NUMBER);
    await this.clearAndEnterTextInElement(this.street, ConstantsLib.STREET);
    await this.clearAndEnterTextInElement(this.town, ConstantsLib.TOWN);
    await this.clearAndEnterTextInElement(this.county, ConstantsLib.COUNTY);
    await this.clearAndEnterTextInElement(this.postcode, ConstantsLib.POSTCODE);
    await this.clickContinueBrp();
  }

  async answerNo() {
    await this.selectRadioByValue(ConstantsLib.NO_OPTION);
    await this.clickContinueBrp();
  }
}