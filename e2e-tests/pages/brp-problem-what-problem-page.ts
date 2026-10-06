import { Locator, Page } from '@playwright/test';
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
    return "What’s the problem with your BRP? – Biometric Residence Permit – GOV.UK";
  }

  async answerProblem(value: string, detailLocator: Locator, detail: string) {
    await this.selectCheckboxOptionWithText(value);
    await this.clearAndEnterTextInElement(detailLocator, detail);
    await this.clickContinueBrp();
  }

  async answerFamilyName(problemOption: string, detail: string) {
    await this.answerProblem(problemOption, this.familyTextBox, detail);
  }

  async answerGivenName(problemOption: string, detail: string) {
    await this.answerProblem(problemOption, this.nameTextBox, detail);
  }

  async answerPlaceBirth(problemOption: string, detail: string) {
    await this.answerProblem(problemOption, this.placeBirthTextBox, detail);
  }

  async answerDOB(problemOption: string, dateOfBirth: string) {
    await this.selectCheckboxOptionWithText(problemOption);
    await this.enterDateOrDob(dateOfBirth);
    await this.clickContinueBrp();
  }

  async answerGender(problemOption: string, gender: string) {
    await this.selectCheckboxOptionWithText(problemOption);
    await this.selectRadioOptionWithText(gender);
    await this.clickContinueBrp();
  }

  async answerSponsorRef(problemOption: string, detail: string) {
    await this.answerProblem(problemOption, this.sponsorRefTextBox, detail);
  }

  async answerNationality(problemOption: string, detail: string) {
    await this.answerProblem(problemOption, this.nationalityTextBox, detail);
  }

  async answerSignature(problemOption: string, detail: string) {
    await this.answerProblem(problemOption, this.signatureTextBox, detail);
  }

  async answerPhoto(problemOption: string, detail: string) {
    await this.answerProblem(problemOption, this.photographTextBox, detail);
  }

  async answerNINum(problemOption: string, detail: string) {
    await this.answerProblem(problemOption, this.niNumTextBox, detail);
  }

  async answerFaultyBrp(problemOption: string, detail: string) {
    await this.answerProblem(problemOption, this.faultyBrpTextBox, detail);
  }

  async answerCondition(problemOption: string, detail: string) {
    await this.answerProblem(problemOption, this.conditionTextBox, detail);
  }

  async answerLengthStay(problemOption: string, detail: string) {
    await this.answerProblem(problemOption, this.conditionStayTextBox, detail);
  }

  async answerBiography(problemOption: string, detail: string) {
    await this.answerProblem(problemOption, this.biographicTextBox, detail);
  }

  async answerBrpDoesnWork(problemOption: string, detail: string) {
    await this.answerProblem(problemOption, this.brpDoesWorkTextBox, detail);
  }

}