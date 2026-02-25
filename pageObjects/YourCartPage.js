import { expect } from "@playwright/test";

class YourCartPage {
  constructor(page) {
    this.page = page;
    this.shopCartLink = page.locator(".shopping_cart_link");
    this.cartItemName = page.locator(".inventory_item_name");
    this.yourCartPageUrl = "https://www.saucedemo.com/cart.html";
  }

  async navigateToYourCartPage() {
    await this.shopCartLink.click();
  }

  async selectedProductInCart(productname) {
    const cartItemName = this.cartItemName;
  }
}

export { YourCartPage };
