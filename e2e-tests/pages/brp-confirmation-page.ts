import { Locator, Page } from '@playwright/test';
import { basePage } from './base-page';

export class brpConfirmationPage extends basePage {

  constructor(page: Page) {
    super(page);
  }

  async expectedPageTitle(): Promise<string> {
    return 'Thank you, we have received your information. – GOV.UK';
  }

}