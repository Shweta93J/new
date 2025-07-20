const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../pages/loginPage');
const { InventoryPage } = require('../pages/inventoryPage');
const { CartPage } = require('../pages/cartPage');
const { CheckoutPage } = require('../pages/checkoutPage');
const { CheckoutCompletePage } = require('../pages/checkoutCompletePage');

test('User can complete checkout with 3 random items', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const checkoutPage = new CheckoutPage(page);
  const checkoutCompletePage = new CheckoutCompletePage(page);

  await page.goto('/');

  await loginPage.login('standard_user', 'secret_sauce');
  await inventoryPage.addRandomItems(3);
  await inventoryPage.goToCart();
  await cartPage.proceedToCheckout();
  await checkoutPage.enterDetailsAndFinish();
  await checkoutCompletePage.verifySuccessMessage();
});
