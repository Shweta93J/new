# 🧪 Sauce Labs Demo Checkout Flow – Automated Test Suite

This project is an end-to-end automated test suite built using **Playwright with JavaScript**. It covers the positive flow of a user logging into the [Sauce Labs demo site](https://www.saucedemo.com/), selecting **3 random products**, and completing the checkout process successfully.

---

##  Features

- Selects 3 random products from the inventory page
- Adds selected items to the cart
- Performs a complete checkout flow
- Verifies successful order placement
- Includes assertions and HTML reporting
- Uses the **Page Object Model** for maintainability

---

## Tech Stack

- **Automation Framework**: Playwright
- **Language**: JavaScript (Node.js)
- **Test Runner**: `@playwright/test`
- **Reporting**: Built-in HTML reporter
- **Assertions**: Playwright’s built-in assertion library

---

##  Project Structure
sauce-demo-tests/
├── pages/ # Page Object files
│ ├── loginPage.js
│ ├── inventoryPage.js
│ ├── cartPage.js
│ ├── checkoutPage.js
│ └── checkoutCompletePage.js
├── tests/
│ └── checkout-flow.spec.js # Main test script
├── playwright.config.js # Playwright config
├── package.json
└── README.md


---

##  Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/Shweta93J/new/tree/main/sauce-demo-tests.git
cd sauce-labs-demo-tests

### 2. Install Dependencies

npm install

## 3. View the Test Report
After running tests, open the HTML report with:
npx playwright show-report
This will open a browser view of test results including pass/fail, screenshots, and logs.
## 4. Scenario Covered
Test Case: Valid user logs in, selects 3 random items, adds them to cart, completes checkout, and receives confirmation.

Steps automated:

Login as standard_user

Randomly select 3 products from the inventory

Add them to the cart

Proceed to checkout

Enter dummy user info

Complete the purchase

Assert the confirmation message

## 5.Built With Page Object Model
Each page (Login, Inventory, Cart, Checkout) is abstracted into its own class to promote reusability, cleaner code, and easier maintenance.

##6. Author
Shweta Kumari
QA Engineer | Playwright Enthusiast
GitHub: @Shweta93J
