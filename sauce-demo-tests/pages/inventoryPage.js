exports.InventoryPage = class InventoryPage {
  constructor(page) {
    this.page = page;
    this.itemCards = page.locator('.inventory_item');
    this.cartButton = page.locator('.shopping_cart_link');
  }

  async addRandomItems(count) {
    const items = await this.itemCards.count();
    const indexes = new Set();
    while (indexes.size < count) {
      indexes.add(Math.floor(Math.random() * items));
    }

    for (let index of indexes) {
      await this.itemCards.nth(index).locator('button').click();
    }
  }

  async goToCart() {
    await this.cartButton.click();
  }
};
