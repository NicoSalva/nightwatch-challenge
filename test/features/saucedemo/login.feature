  Feature: SauceDemo App With Standard User
  
  Background: Some registered user
    Given I open the Saucedemo
    Then Page title can be "Swag Labs"


  @standard_user @regression
  Scenario: Login Standard user
    When I complete the "standard_user"
    Then "standard_user" is logged in


  @standard_user @regression
  Scenario: Logout Standard user
    Given I complete the "standard_user"
    And "standard_user" is logged in
    When Click profile button
    And  Click logout button
    Then Page title can be "Swag Labs"


  @problem_user @regression
  Scenario: Login Problem user
    When I complete the "problem_user"
    Then "problem_user" is logged in


  @problem_user @regression
  Scenario: Logout Problem user
    Given I complete the "problem_user"
    And "problem_user" is logged in
    When Click profile button
    And  Click logout button
    Then Page title can be "Swag Labs"

 




