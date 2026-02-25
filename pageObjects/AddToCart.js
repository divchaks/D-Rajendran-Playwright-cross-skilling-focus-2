class AddToCart {
  constructor(page) {
    this.page = page;

    this.cartCount = page.locator(".shopping_cart_badge");
    this.shopCartLink = page.locator(".shopping_cart_link");
    this.cartItemName = page.locator(".inventory_item_name");
    this.yourCartPageUrl = "https://www.saucedemo.com/cart.html";
  }

  async addProductToCart(productName) {
    const addToCartBtn = this.page
      .locator(".inventory_item")
      .filter({ hasText: productName })
      .locator("button");

    await addToCartBtn.click();
  }

  verifyCartCount() {
    return this.cartCount;
  }

  async navigateToYourCartPage() {
    await this.shopCartLink.click();
  }
}

export { AddToCart };
