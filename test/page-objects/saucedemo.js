module.exports = {
  url: "https://www.saucedemo.com/",
  elements: {
    inputUser: {
      selector: "input[data-test=username]",
    },
    inputPassword: {
      selector: "input[data-test=password]",
    },
    loginButton: {
      selector: "input[data-test=login-button]",
    },
    profile: {
      selector: '//*[@id="react-burger-menu-btn"]',
      locateStrategy: "xpath",
    },
    logout: {
      selector: '//*[@id="logout_sidebar_link"]',
      locateStrategy: "xpath",
    },
    addBackpack: {
      selector: "button[data-test=add-to-cart-sauce-labs-backpack]",
    },
    shoppingCarBadge: {
      selector: "span[class=shopping_cart_badge]",
    },
    headerTitle: {
      selector: "span[class=title]",
    },
    inventoryItemName: {
      selector: "div[class=inventory_item_name]",
    },
    checkout: {
      selector: "button[data-test=checkout]",
    },
    firstNameForm: {
      selector: "input[data-test=firstName]",
    },
    lastNameForm: {
      selector: "input[data-test=lastName]",
    },
    zipCodeForm: {
      selector: "input[data-test=postalCode]",
    },
    confirmForm: {
      selector: "input[data-test=continue]",
    },
    inventoryItemName: {
      selector: "div[class=inventory_item_name]",
    },
    inventoryItemPrice: {
      selector: "div[class=inventory_item_price]",
    },

    sumaryValueLabel: {
      selector: "div[class=summary_value_label]",
    },

    sumaryTaxLabel: {
      selector: "div[class=summary_tax_label]",
    },

    sumaryTotalLabel: {
      selector: "div[class=summary_total_label]",
    },

    finishButton: {
      selector: "button[data-test=finish]",
    },

    thanksYouForYourOrder: {
      selector: "h2[class=complete-header]",
    },

    backToProduct: {
      selector: "button[data-test=back-to-products]",
    },

    errorAlert: {
      selector: "button[class=error-button]",
    },

    errorAlertMessage: {
      selector: "h3[data-test=error]",
    },
  },
};
