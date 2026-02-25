Feature: Login Page Test

    This test suite will consists of test cases related to login page 

    Scenario: Successful login with valid credentials
    Given I am on the login page
    When I enter valid username as "standard_user" and password as "secret_sauce"
    And I click the login button
    Then  I should be redirected to the product catalog page 
     And  I should see the product listings
    
