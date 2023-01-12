const {Given, Then, When, Before} = require('@cucumber/cucumber');


Given(/^I open the Saucedemo$/, function() {
  let saucedemo = browser.page.saucedemo()

  return saucedemo.navigate()
  
})

Then(/^the title is "([^"]*)"/, function(title) {
  let saucedemo = browser.page.saucedemo()
  
  return saucedemo
  .assert.titleEquals(title)

})

When(/^I complete the "([^"]*)"/, function(user) {
  let saucedemo = browser.page.saucedemo()

  saucedemo
  .setValue('@inputUser',user)
  .setValue('@inputPassword',"secret_sauce")
  .click('@loginButton')

})


Then(/^User "([^"]*)" is logged in$/, function(user) {
  let saucedemo = browser.page.saucedemo()

  saucedemo
  .assert.urlContains('inventory')

 })

 When(/^click profile$/, async function() {
  let saucedemo = browser.page.saucedemo()

  saucedemo
  .click('@profile') 
  
  
 })

 Given(/^click the Logout button$/, async function() { 
  let saucedemo = browser.page.saucedemo()

  saucedemo
  .click('@logout') 
  
 })

 When(/^I add an item to the cart$/, function() {
    let saucedemo = browser.page.saucedemo()
  
    saucedemo
    .click('@addBackpack')
   })
  
   Then(/^Item can be added to cart$/, function() {
    let saucedemo = browser.page.saucedemo()
    
    saucedemo
    .assert.textEquals('@shoppingCarBadge',"1")
  
   })
  
   Given(/^I start the purchase$/, function() {
    let saucedemo = browser.page.saucedemo()
    
    saucedemo
    .click('.shopping_cart_link')
    .assert.textEquals('@headerTitle','YOUR CART')
    
    .assert.textEquals('@inventoryItemName','Sauce Labs Backpack')
    
    .click('@checkout')
   
  })
  
  Given( /^I complete my information "([^"]*)"$/, function(user) {
    let saucedemo = browser.page.saucedemo()

    let lastName = 'lastName'
    let zipCode = '12345'

    
  
    saucedemo
    .assert.textContains('@headerTitle','CHECKOUT: YOUR INFORMATION')
    
    .setValue('@firstNameForm',user)
    .setValue('@lastNameForm',lastName)
    .setValue('@zipCodeForm',zipCode)

    saucedemo.assert.valueEquals('@firstNameForm',String(user))
    saucedemo.assert.valueEquals('@lastNameForm',String(lastName))
    saucedemo.assert.valueEquals('@zipCodeForm',String(zipCode))
    

    saucedemo.expect.element('@firstNameForm').to.be.visible
    saucedemo.expect.element('@lastNameForm').to.be.visible
    saucedemo.expect.element('@zipCodeForm').to.be.visible


    .click('@confirmForm')
  
  })
   
   Given(/^I review the product$/, function() {
    let saucedemo = browser.page.saucedemo()
    
    saucedemo
    .assert.textEquals('@headerTitle','CHECKOUT: OVERVIEW')
    
    .waitForElementVisible('@inventoryItemName')
    .waitForElementVisible('@inventoryItemPrice')
  
    .waitForElementVisible('@sumaryValueLabel')
    .waitForElementVisible('@sumaryTaxLabel')
    .waitForElementVisible('@sumaryTotalLabel')
  })
  
  
    When(/^I confirme the purchase$/, () => {
      let saucedemo = browser.page.saucedemo()
    
      saucedemo
      .click('@finishButton')
  
    })
  
  
   Then(/^Item can be purchased$/, () => {
    let saucedemo = browser.page.saucedemo()
    
    saucedemo
    .assert.textEquals('@headerTitle','CHECKOUT: COMPLETE!')
    .assert.textEquals('@thanksYouForYourOrder','THANK YOU FOR YOUR ORDER')
  
    .waitForElementVisible('@backToProduct')
  
   })
  
  
   When(/^I remove these product from the cart$/, () => {
    let saucedemo = browser.page.saucedemo()
    
    saucedemo
    .click('.shopping_cart_link')
    .click('button[data-test=remove-sauce-labs-backpack]')
    
   })
  
   Then(/^The product will be remove$/, () => {
    let saucedemo = browser.page.saucedemo()
    
    saucedemo
    .waitForElementNotPresent('div[class=cart_item_label]')
    .waitForElementVisible('button[data-test=continue-shopping]')
    .waitForElementVisible('button[data-test=checkout]')
  
   })