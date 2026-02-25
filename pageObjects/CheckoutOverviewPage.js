class CheckoutOverviewPage {
  constructor(page) {
    this.page = page;

    this.selectedPrd = page.locator('[data-test="inventory-item-name"]');
    this.productInformation = page.locator(".summary_value_label").first();
    this.shippingInformation = page.locator(".summary_value_label").nth(1);

    this.finishbtn = page.locator('[data-test="finish"]');
  }

  async finishButton() {
    await this.finishbtn.click();
  }
}

export { CheckoutOverviewPage };
