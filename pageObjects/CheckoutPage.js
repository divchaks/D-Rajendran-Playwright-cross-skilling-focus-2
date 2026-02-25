import { expect } from "@playwright/test";

class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.checkoutButton = page.getByRole("button", { name: "checkout" });
    this.checkoutPageTitle = page.getByText("Checkout: Your Information");
  }

  async navigateToCheckoutPage() {
    await this.checkoutButton.click();
  }
}

export { CheckoutPage };
