class CheckoutCompletePage {
  constructor(page) {
    this.page = page;

    this.completePageTitle = page.getByText("Checkout: Complete!");
    this.completeText = page.locator(".complete-header");
    this.backHomeBtn = page.locator(".back-to-products");
  }

  async clickbackHomeBtn() {
    await this.backHomeBtn.click();
  }
}

export { CheckoutCompletePage };
