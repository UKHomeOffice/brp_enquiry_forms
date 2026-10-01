import { Locator, Page } from '@playwright/test';
import { ConstantsLib } from '../utility-helper/constants-lib';
import { basePage } from './base-page';

export class brpProblemWhatProblemPage extends basePage {
  readonly familyTextBox: Locator;
  readonly nameTextBox: Locator;
  readonly placeBirthTextBox: Locator;
  readonly sponsorRefTextBox: Locator;
  readonly nationalityTextBox: Locator;
  readonly signatureTextBox: Locator;
  readonly photographTextBox: Locator;
  readonly niNumTextBox: Locator;
  readonly faultyBrpTextBox: Locator;
  readonly conditionTextBox: Locator;
  readonly conditionStayTextBox: Locator;
  readonly biographicTextBox: Locator;
  readonly brpDoesWorkTextBox: Locator;
  readonly placeBirthButton: Locator;

  constructor(page: Page) {
    super(page);
    this.familyTextBox = page.locator('#last-name-error');
    this.nameTextBox = page.locator('#first-name-error');
    this.placeBirthTextBox = page.locator('#birth-place-error');
    this.sponsorRefTextBox = page.locator('#sponsor-details-error');
    this.nationalityTextBox = page.locator('#nationality-error');
    this.signatureTextBox = page.locator('#signature-error');
    this.photographTextBox = page.locator('#photograph-error');
    this.niNumTextBox = page.locator('#national-insurance-error');
    this.faultyBrpTextBox = page.locator('#damaged-error');
    this.conditionTextBox = page.locator('#conditions-error');
    this.conditionStayTextBox = page.locator('#length-of-stay-error');
    this.biographicTextBox = page.locator('#biographics-error');
    this.brpDoesWorkTextBox = page.locator('#BRP-issue-error');
    this.placeBirthButton = page.locator('#birth-place-error-checkbox');
  }

  async expectedPageTitle(): Promise<string> {
    return "What's the problem with your BRP? - Biometric Residence Permit - GOV.UK";
  }

  async answerProblem(value: string, detailLocator: Locator, detail: string) {
    await this.selectCheckboxOptionWithText(value);
    await this.clearAndEnterTextInElement(detailLocator, detail);
    await this.clickContinueBrp();
  }

  async answerFamilyName() { await this.answerProblem(ConstantsLib.PROBLEM_FAMILY_NAME, this.familyTextBox, ConstantsLib.FAMILY_NAME); }
  async answerGivenName() { await this.answerProblem(ConstantsLib.PROBLEM_GIVEN_NAME, this.nameTextBox, ConstantsLib.GIVEN_NAME); }
  async answerPlaceBirth() { await this.answerProblem(ConstantsLib.PROBLEM_PLACE_OF_BIRTH, this.placeBirthTextBox, ConstantsLib.NATIONALITY); }
  async answerDOB() {
    await this.selectCheckboxOptionWithText(ConstantsLib.PROBLEM_DATE_OF_BIRTH);
    await this.enterDateOrDob(ConstantsLib.DATE_OF_BIRTH, 'date-of-birth-error');
    await this.clickContinueBrp();
  }
  async answerGender() {
    await this.selectCheckboxOptionWithText(ConstantsLib.PROBLEM_GENDER);
    await this.selectRadioOptionWithText(ConstantsLib.FEMALE_OPTION);
    await this.clickContinueBrp();
  }
  async answerSponsorRef() {
    await this.answerProblem(ConstantsLib.PROBLEM_SPONSOR_REFERENCE, this.sponsorRefTextBox, ConstantsLib.SPONSOR_REFERENCE);
  }

  async answerNationality() {
    await this.answerProblem(ConstantsLib.PROBLEM_NATIONALITY, this.nationalityTextBox, ConstantsLib.ALTERNATIVE_NATIONALITY);
  }

  async answerSignature() {
    await this.answerProblem(ConstantsLib.PROBLEM_SIGNATURE, this.signatureTextBox, ConstantsLib.SIGNATURE_DETAILS);

  }

  async answerPhoto() {
    await this.answerProblem(ConstantsLib.PROBLEM_PHOTOGRAPH, this.photographTextBox, ConstantsLib.PHOTOGRAPH_DETAILS);
  }

  async answerNINum() {
    await this.answerProblem(ConstantsLib.PROBLEM_NATIONAL_INSURANCE, this.niNumTextBox, ConstantsLib.NATIONAL_INSURANCE_NUMBER);

  }

  async answerFaultyBrp() {
    await this.answerProblem(ConstantsLib.PROBLEM_DAMAGED_BRP, this.faultyBrpTextBox, ConstantsLib.DAMAGED_BRP_DETAILS);
  }

  async answerCondition() {
    await this.answerProblem(ConstantsLib.PROBLEM_CONDITIONS, this.conditionTextBox, ConstantsLib.PROBLEM_DETAILS);
  }

  async answerLengthStay() {
    await this.answerProblem(ConstantsLib.PROBLEM_LENGTH_OF_STAY, this.conditionStayTextBox, ConstantsLib.PROBLEM_DETAILS);
  }

  async answerBiography() {
    await this.answerProblem(ConstantsLib.PROBLEM_BIOGRAPHICS, this.biographicTextBox, ConstantsLib.PROBLEM_DETAILS);
  }

  async answerBrpDoesnWork() {
    await this.answerProblem(ConstantsLib.PROBLEM_BRP_NOT_WORKING, this.brpDoesWorkTextBox, ConstantsLib.PROBLEM_DETAILS);
  }

}