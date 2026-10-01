import { ConstantsLib } from '../utility-helper/constants-lib';
import { basePage } from './base-page';

export class brpNotArrivedWouldYouLikeBrpSentPage extends basePage {
  async expectedPageTitle(): Promise<string> {
    return 'Would you like your BRP sent to the address on your letter? - Biometric Residence Permit - GOV.UK';
  }

  async yesBrpSent() {
    await this.selectRadioByValue(ConstantsLib.YES_OPTION);
    await this.clearAndEnterTextInElement(this.page.locator('#delivery-details'), ConstantsLib.DELIVERY_DETAILS);
    await this.clickContinueBrp();
  }

}