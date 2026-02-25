import { Given, When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import fs from "fs";
const data = fs.readFileSync(
  new URL("../../TestData/testData.json", import.meta.url),
  "utf8",
);
const testData = JSON.parse(data);

Given(`I am on the login page`, async function () {
  await this.login.launchUrl(testData.credentials.url);
});

When(
  `I enter valid username as {string} and password as {string}`,
  async function (username, password) {
    await this.login.fillUsername(testData.credentials.username);
    await this.login.fillPassword(testData.credentials.password);
  },
);

When(`I click the login button`, async function () {
  await this.login.clickLoginButton();
});

Then(`I should be redirected to the product catalog page`, async function () {
  await expect(this.page).toHaveURL(/inventory.html/);
});

Then(`I should see the product listings`, async function () {
  await expect(this.login.productTitle).toHaveText("Products");
});
