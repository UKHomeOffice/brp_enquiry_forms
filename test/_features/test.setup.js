const { Before, BeforeAll, AfterAll, After, World } = require('@cucumber/cucumber');
const { BrowserContext, Page, chromium} = require('playwright');

World.context = BrowserContext;
World.page = Page;

const PROXY_HOST = process.env.PROXY_HOST || 'localhost';
const PROXY_PORT = process.env.PROXY_PORT || 8090;

BeforeAll(async () => {
  const pwConfig = process.env.ACCEPTANCE_WITH_BROWSER ? { headless: false, slowMo: 500, proxy: {
    server: `http://${PROXY_HOST}:${PROXY_PORT}`,
    bypass: '<-loopback>'
  }
  } : {
    proxy: {
      server: `http://${PROXY_HOST}:${PROXY_PORT}`,
      bypass: '<-loopback>'
    }
  };
  global.browser = await chromium.launch(pwConfig);
});

AfterAll(async function () {
  await global.browser.close();
});

Before(async function () {
  this.context = await global.browser.newContext({ ignoreHTTPSErrors: true });
  this.page = await this.context.newPage();
}.bind(World));

After(async function () {
  await this.page.close();
  await this.context.close();
}.bind(World));

module.exports = World;
