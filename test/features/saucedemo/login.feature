Feature: SauceDemo App With Standard User
Background: Some registered user
  Given I open the Saucedemo
  Then the title is "Swag Labs"

@standard_user @regression
Scenario: Login Standard user
  When I complete the "standard_user"
  Then User "standard_user" is logged in

@standard_user @regression
Scenario: Logout Standard user
Given I complete the "standard_user"
  And User "standard_user" is logged in
  When click profile
  And  click the Logout button
  Then the title is "Swag Labs"

@problem_user @regression
Scenario: Login Problem user
  When I complete the "problem_user"
  Then User "problem_user" is logged in

@problem_user @regression
Scenario: Logout Problem user
Given I complete the "problem_user"
  And User "problem_user" is logged in
  When click profile
  And  click the Logout button
  Then the title is "Swag Labs"

 




