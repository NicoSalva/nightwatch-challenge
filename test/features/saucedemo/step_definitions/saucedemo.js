const {Given, Then, When, Before} = require('@cucumber/cucumber');

//Login  

Given(/^I open the Saucedemo$/, function() {
  return browser
  .navigateTo('https://www.saucedemo.com/');

})

Then(/^the title is "([^"]*)"$/, function(title) {
  return browser
  .assert.titleEquals(title)

})

When(/^I complete the "([^"]*)"$/, function(user) {
  browser
  .setValue('@inputUser',user)
  .setValue('@inputPassword',"secret_sauce")
  .click('@loginBUtton')

})

Then(/^User "([^"]*)" is logged in$/, function(user) {
  browser
  .assert.urlContains('inventory')
  .saveScreenshot(`test_output/${user}Login.png`)

 })

 When(/^click profile$/, async function() {
   await browser
   .useXpath()
  .click('//*[@id="react-burger-menu-btn"]') 
  
  
 })

 Given(/^click the Logout button$/, async function() { //*[@id="logout_sidebar_link"]
  await browser
   .useXpath()
  .click('//*[@id="logout_sidebar_link"]') 
  
 })


 //Items Flow

 When(/^I add an item to the cart$/, function() {
  browser
  .click('button[data-test=add-to-cart-sauce-labs-backpack]')
 })

 Then(/^Item can be added to cart$/, function() {
  browser
  .assert.textEquals('span[class=shopping_cart_badge]',"1")
  

 })

 Given(/^I start the purchase$/, function() {
  browser
  .click('.shopping_cart_link')
  .assert.textEquals('span[class=title]','YOUR CART')
  
  .assert.textEquals('div[class=inventory_item_name]','Sauce Labs Backpack')
  
  .click('button[data-test=checkout]')

  //expect('span[class="title"]').text.to.equal('Your Cart');
 
})


Given( /^I complete my information$/, function() {
  
  browser
  .assert.textContains('span[class=title]','CHECKOUT: YOUR INFORMATION')
  
  .setValue('input[data-test=firstName]','firstName')
  .setValue('input[data-test=lastName]','LastName')
  .setValue('input[data-test=postalCode]','11111')
  .click('input[data-test=continue]')

})
 
 Given(/^I review the product$/, function() {
  
  browser
  .assert.textEquals('span[class=title]','CHECKOUT: OVERVIEW')
  
  .waitForElementVisible('div[class=inventory_item_name]')
  .waitForElementVisible('div[class=inventory_item_price]')

  .waitForElementVisible('div[class=summary_value_label]')
  .waitForElementVisible('div[class=summary_tax_label]')
  .waitForElementVisible('div[class=summary_total_label]')
})


  When(/^I confirme the purchase$/, () => {
    browser
    .click('button[data-test=finish]')

  })


 Then(/^Item can be purchased$/, () => {
  browser
  .assert.textEquals('span[class=title]','CHECKOUT: COMPLETE!')
  .assert.textEquals('h2[class=complete-header]','THANK YOU FOR YOUR ORDER')

  .waitForElementVisible('button[data-test=back-to-products]')

 })


 When(/^I remove these product from the cart$/, () => {
  browser
  .click('.shopping_cart_link')
  .click('button[data-test=remove-sauce-labs-backpack]')
  
 })

 Then(/^The product will be remove$/, () => {
  browser
  .waitForElementNotPresent('div[class=cart_item_label]')
  .waitForElementVisible('button[data-test=continue-shopping]')
  .waitForElementVisible('button[data-test=checkout]')

 })

 





//https://www.saucedemo.com/inventory.html


// Given(/^I search "([^"]*)"$/, async function(searchTerm) {
//   // FIXME: chaining the click command to the rest of the commands causes an uncaughtRejection in case of an element locate error
//   await browser.pause(1000).click('a[aria-label="Search"]');

//   return browser.waitForElementVisible('#rijksmuseum-app')
//     .setValue('input.search-bar-input[type=text]', [searchTerm, browser.Keys.ENTER])
//     .pause(1000);
// });

// Given(/^I dismiss the cookie dialog$/, async function() {
//   const cookieDialogVisible = await browser.isVisible({
//     selector: '.cookie-consent-bar-wrap',
//     suppressNotFoundErrors: true
//   });

//   if (cookieDialogVisible) {
//     return browser.click('.cookie-consent-bar-wrap button.link');
//   }
// });


