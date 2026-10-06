import { basePage } from './base-page';

export class brpNotArrivedWouldYouLikeBrpSentPage extends basePage {
  async expectedPageTitle(): Promise<string> {
    return 'Would you like your BRP sent to the address on your letter? – Biometric Residence Permit – GOV.UK';
  }

  async yesBrpSent(yesOption: string, deliveryDetails: string) {
    await this.selectRadioByValue(yesOption);
    await this.clearAndEnterTextInElement(this.page.locator('#delivery-details'), deliveryDetails);
    await this.clickContinueBrp();
  }

}