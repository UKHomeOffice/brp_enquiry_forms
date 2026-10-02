import { Locator, Page } from '@playwright/test';
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

  async answerYes(yesOption: string, houseNumber: string, street: string, town: string, county: string, postcode: string) {
    await this.selectRadioByValue(yesOption);
    await this.clearAndEnterTextInElement(this.houseNumber, houseNumber);
    await this.clearAndEnterTextInElement(this.street, street);
    await this.clearAndEnterTextInElement(this.town, town);
    await this.clearAndEnterTextInElement(this.county, county);
    await this.clearAndEnterTextInElement(this.postcode, postcode);
    await this.clickContinueBrp();
  }

  async answerNoAndSelectContinueBtn(noOption: string) {
    await this.selectRadioByValue(noOption);
    await this.clickContinueBrp();
  }
}