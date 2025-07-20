exports.CheckoutCompletePage = class CheckoutCompletePage {
  constructor(page) {
    this.page = page;
    this.completeHeader = page.locator('.complete-header');
  }

  async verifySuccessMessage() {
    await this.completeHeader.waitFor();
    await expect(this.completeHeader).toHaveText('Thank you for your order!');
  }
};
