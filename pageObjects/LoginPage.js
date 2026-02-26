class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator('input[placeholder="Username"]');
    this.passwordField = page.locator('input[placeholder="Password"]');
    this.loginBtn = page.locator('input[type="submit"]');
    this.productTitle = page.locator(".title");
  }

  async launchUrl(url) {
    await this.page.goto(url);
  }

  async fillUsername(username) {
    await this.usernameField.fill(username);
  }

  async fillPassword(password) {
    await this.passwordField.fill(password);
  }

  async clickLoginButton() {
    await this.loginBtn.click();
  }
}

export { LoginPage };
