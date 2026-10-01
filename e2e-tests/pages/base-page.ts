import { expect, Locator, Page } from '@playwright/test';

export class basePage {
  readonly page: Page;
  readonly continueButton: Locator;
  readonly noButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.continueButton = page.locator('input[value="Continue"], button:has-text("Continue")');
    this.noButton = page.locator('input[type="radio"][value="no"], input[type="radio"][value="No"]').first();
  }

  async expectedPageTitle(): Promise<string> {
    return this.page.title();
  }

  async assertPageTitle() {
    const expectedTitle = await this.expectedPageTitle();
    if (expectedTitle) {
      await expect.poll(async () => this.normaliseTitle(await this.page.title())).toBe(this.normaliseTitle(expectedTitle));
    }
  }

  normaliseTitle(title: string) {
    return title.replaceAll('–', '-').replaceAll('’', "'");
  }

  async clickContinueBrp() {
    await this.continueButton.first().click();
  }

  async clickStartNowIfPresent(startButton: Locator) {
    if (await startButton.first().isVisible()) {
      await startButton.first().click();
    }
  }

  async selectRadioOptionWithText(optionText: string) {
    const radio = this.page.getByRole('radio', { name: optionText, exact: false });
    if (await radio.count()) {
      await radio.first().check();
      return;
    }

    await this.page.locator(`input[type="radio"][value="${optionText}"]`).first().check({ force: true });
  }

  async selectRadioByValue(value: string) {
    await this.page.locator(`input[type="radio"][value="${value}"]`).first().check({ force: true });
  }

  async selectCheckboxOptionWithText(optionText: string) {
    const checkbox = this.page.getByRole('checkbox', { name: optionText, exact: false });
    if (await checkbox.count()) {
      await checkbox.first().check();
      return;
    }

    await this.page.locator(`input[type="checkbox"][value="${optionText}"], input[type="checkbox"][id="${optionText}"]`).first().check({ force: true });
  }

  async type(locator: Locator, text: string) {
    await locator.fill(text);
    await this.page.keyboard.press('Tab');
  }

  async clearAndEnterTextInElement(locator: Locator, value: string) {
    await this.type(locator, value);
  }

  async fillById(id: string, value: string) {
    const locator = this.page.locator(`#${id}`);
    const tagName = await locator.first().evaluate(element => element.tagName.toLowerCase()).catch(() => 'input');

    if (tagName === 'select') {
      await locator.first().selectOption({ label: value }, { force: true }).catch(async () => {
        await locator.first().selectOption(value, { force: true });
      });
      return;
    }

    await this.clearAndEnterTextInElement(locator.first(), value);
  }

  // async enterDateOrDob(inputDate: string, prefix = 'date-of-birth') {
  //   const [day, month, year] = inputDate.split('/');
  //   await this.fillById(`${prefix}-day`, day);
  //   await this.fillById(`${prefix}-month`, month);
  //   await this.fillById(`${prefix}-year`, year);
  // }

  convertTextToDate(dateValue: string | null): string | null {
    if (dateValue == null) return null;

    const date = dateValue.trim().toLowerCase();
    if (!date) return dateValue;

    const now = new Date();

    const formatDate = (d: Date): string => {
      const day = String(d.getDate()).padStart(2, '0');
      const month = String(d.getMonth() + 1).padStart(2, '0');
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    };

    const addDays = (d: Date, days: number) => {
      const newDate = new Date(d);
      newDate.setDate(newDate.getDate() + days);
      return newDate;
    };

    const addYears = (d: Date, years: number) => {
      const newDate = new Date(d);
      newDate.setFullYear(newDate.getFullYear() + years);
      return newDate;
    };

    const dateMappings: Record<string, () => Date> = {
      "yesterday's date": () => addDays(now, -1),
      "today's date": () => now,
      "tomorrow's date": () => addDays(now, 1),
      "more than one year in the future": () => addDays(addYears(now, 1), 1),
      "more than 100 years in the future": () => addDays(addYears(now, 100), 1),
      "more than one year in the past": () => addDays(addYears(now, -1), -1),
      "within the last 3 years": () => addDays(addYears(now, -3), 1),
      "more than 3 years ago": () => addYears(now, -3),
      "less than 16 years ago": () => addDays(addYears(now, -16), 1),
      "less than 18 years ago": () => addDays(addYears(now, -18), 1),
      "19 years ago": () => addYears(now, -19),
      "more than 50 years ago": () => addDays(addYears(now, -50), -1),
      "more than 100 years ago": () => addDays(addYears(now, -100), -1),
      "more than 120 years ago": () => addDays(addYears(now, -120), -1),
      "more than 126 years ago": () => addDays(addYears(now, -126), -1),
    };

    const dateFn = dateMappings[date];

    return dateFn ? formatDate(dateFn()) : dateValue;
  }

  async enterDateOrDob(inputDate: string | null) {
    if (!inputDate?.trim()) return;

    const dayLocator: Locator = this.page.getByLabel('Day');
    const monthLocator: Locator = this.page.getByLabel('Month');
    const yearLocator: Locator = this.page.getByLabel('Year');

    const formattedDate = this.convertTextToDate(inputDate);

    if (!formattedDate) return;

    const dateParts = formattedDate.split('/');

    if (dateParts.length !== 3) {
      throw new Error('Invalid date format. Expected format: dd/MM/yyyy');
    }

    const [dayVal, monthVal, yearVal] = dateParts;

    await this.type(dayLocator, dayVal);
    await this.type(monthLocator, monthVal);
    await this.type(yearLocator, yearVal);
  }
}