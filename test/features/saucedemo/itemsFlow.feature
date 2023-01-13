Feature: items flow
Background: Some registered user
 Given I open the Saucedemo
  Then the title is "Swag Labs"

@standard_user @regression
Scenario: Standard user add an item to cart
Given I complete the "standard_user"
  And User "standard_user" is logged in
  When I add an item to the cart
  Then Item can be added to cart

 @standard_user @regression 
 Scenario: Standard user checkout an item in the cart
  Given I complete the "standard_user"
  And User "standard_user" is logged in
  And I add an item to the cart
  And Item can be added to cart
  And I start the purchase
  And I complete my information "standard_user"
  And I review the product
  When I confirme the purchase
  Then Item can be purchased


@standard_user @regression
Scenario: Standard user remove an item from the cart
  Given I complete the "standard_user"
  And User "standard_user" is logged in
  And I add an item to the cart
  And Item can be added to cart
  When I remove these product from the cart
  Then The product will be remove

@problem_user @regression
Scenario: Problem user add an item to cart
 Given I complete the "problem_user"
  And User "problem_user" is logged in
  When I add an item to the cart
  Then Item can be added to cart

@problem_user @regression
Scenario: Problem user remove an item from the cart
  Given I complete the "problem_user"
  And User "problem_user" is logged in
  And I add an item to the cart
  And Item can be added to cart
  When I remove these product from the cart
  Then The product will be remove

@problem_user @regression
 Scenario: Problem user checkout an item in the cart
  Given I complete the "problem_user"
  And User "problem_user" is logged in
  And I add an item to the cart
  And Item can be added to cart
  And I start the purchase
  When "problem_user" have problems when complete data
  Then the item cannot purchased
  




