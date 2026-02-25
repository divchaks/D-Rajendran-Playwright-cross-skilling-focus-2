import { When, Then } from "@cucumber/cucumber";
import { expect } from "@playwright/test";
import fs from "fs";
const data = fs.readFileSync(
  new URL("../../TestData/testData.json", import.meta.url),
  "utf8",
);
const testData = JSON.parse(data);

const productName = testData.product.name;
const firstname = testData.user.firstname;
const lastname = testData.user.lastname;
const postalcode = testData.user.postalcode;

When(
  `I click the Add to cart button for {string}`,
  async function (productName) {
    await this.addtocartpg.addProductToCart(productName);
  },
);

Then(
  `the item should be added to my shopping cart and the shopping cart icon should show {int}`,
  async function (number) {
    this.cartCount = await this.addtocartpg.verifyCartCount();
    await expect(this.cartCount).toHaveText("1");
  },
);

When(`I click the shopping cart icon`, async function () {
  await this.addtocartpg.navigateToYourCartPage();
});

Then(`I should be navigated to the Your Cart page`, async function () {
  await expect(this.page).toHaveURL(/cart.html/);
});

Then(`I should see the selected item listed in my cart.`, async function () {
  await expect(this.addtocartpg.cartItemName).toBeVisible();
  await expect(this.addtocartpg.cartItemName).toHaveText(productName);
});

When(`I click the Checkout button`, async function () {
  await this.checkout.navigateToCheckoutPage();
});

Then(
  `I should be navigated to the Checkout: Your Information page`,
  async function () {
    await expect(this.page).toHaveURL(/checkout-step-one.html/);
    await expect(this.checkout.checkoutPageTitle).toBeVisible();
  },
);

When(`I enter valid shipping information`, async function () {
  await this.checkoutuserinfopage.fillUserInformation(
    firstname,
    lastname,
    postalcode,
  );
});

When(`I click the Continue button`, async function () {
  await this.checkoutuserinfopage.clickContinueBtn();
});

Then(`I should be navigated to the Checkout: Overview page`, async function () {
  await expect(this.page).toHaveURL(/checkout-step-two.html/);
  await expect(
    this.checkoutuserinfopage.checkoutOverviewPageTitle,
  ).toBeVisible();
});

When(`I review the order summary`, async function () {
  await expect(this.checkoutoverviewpage.selectedPrd).toHaveText(productName);
  await expect(this.checkoutoverviewpage.productInformation).toHaveText(
    testData.checkout.paymentInfo,
  );
  await expect(this.checkoutoverviewpage.shippingInformation).toHaveText(
    testData.checkout.shippingInfo,
  );
});

When(`I click the Finish button`, async function () {
  await this.checkoutoverviewpage.finishButton();
});

Then(
  `I should be navigated to the Checkout: Complete! page`,
  async function () {
    await expect(this.page).toHaveURL(/checkout-complete.html/);
    await expect(this.checkoutcompletepage.completePageTitle).toBeVisible();
  },
);

Then(`I should see a confirmation message`, async function () {
  await expect(this.checkoutcompletepage.completeText).toHaveText(
    "Thank you for your order!",
  );
});
