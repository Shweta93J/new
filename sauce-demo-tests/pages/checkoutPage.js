exports.CheckoutPage = class CheckoutPage {
  constructor(page) {
    this.page = page;
    this.firstName = page.locator('#first-name');
    this.lastName = page.locator('#last-name');
    this.postalCode = page.locator('#postal-code');
    this.continueButton = page.locator('#continue');
    this.finishButton = page.locator('#finish');
  }

  async enterDetailsAndFinish() {
    await this.firstName.fill('John');
    await this.lastName.fill('Doe');
    await this.postalCode.fill('12345');
    await this.continueButton.click();
    await this.finishButton.click();
  }
};
