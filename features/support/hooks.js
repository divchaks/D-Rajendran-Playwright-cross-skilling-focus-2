import { Before, After, Status, setDefaultTimeout } from "@cucumber/cucumber";
import { chromium } from "playwright";
import { LoginPage } from "../../pageObjects/LoginPage.js";
import { AddToCart } from "../../pageObjects/AddToCart.js";
import { CheckoutPage } from "../../pageObjects/CheckoutPage.js";
import { CheckoutUserInfoPage } from "../../pageObjects/CheckoutUserInfoPage.js";
import { CheckoutOverviewPage } from "../../pageObjects/CheckoutOverviewPage.js";
import { CheckoutCompletePage } from "../../pageObjects/CheckoutCompletePage.js";
setDefaultTimeout(60 * 1000); // Set default timeout to 60 seconds
Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  const context = await this.browser.newContext();
  this.page = await context.newPage();

  this.login = new LoginPage(this.page);
  this.addtocartpg = new AddToCart(this.page);
  this.checkout = new CheckoutPage(this.page);
  this.checkoutuserinfopage = new CheckoutUserInfoPage(this.page);
  this.checkoutoverviewpage = new CheckoutOverviewPage(this.page);
  this.checkoutcompletepage = new CheckoutCompletePage(this.page);
});

After(async function (scenario) {
  if (scenario.result.status === Status.FAILED && this.page) {
    const screenshot = await this.page.screenshot();
    this.attach(screenshot, "image/png");
  }

  if (this.page) await this.page.close();
  if (this.browser) await this.browser.close();
});
