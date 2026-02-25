class CheckoutUserInfoPage {
  constructor(page) {
    this.page = page;
    this.firstNameField = page.getByPlaceholder("First Name");
    this.lastNameField = page.getByPlaceholder("Last Name");
    this.postalCodeField = page.getByPlaceholder("Zip/Postal Code");
    this.continueButton = page.getByRole("button", { name: "Continue" });
    this.checkoutOverviewPageTitle = page.getByText("Checkout: Overview");
  }

  async fillUserInformation(firstname, lastname, postalcode) {
    await this.firstNameField.fill(firstname);
    await this.lastNameField.fill(lastname);
    await this.postalCodeField.fill(postalcode);
  }
  async clickContinueBtn() {
    await this.continueButton.click();
  }
}

export { CheckoutUserInfoPage };
