Feature: Product Purchase Flow

    As a logged-in user, I want to complete the purchase of an item from the product catalog so that I can receive my desired product.


Background: Login into application
    Given I am on the login page
    When I enter valid username as "standard_user" and password as "secret_sauce"
    And I click the login button
    Then I should be redirected to the product catalog page 
    And I should see the product listings


Scenario: Successful Product Purchase Flow

When I click the Add to cart button for "Sauce Labs Backpack"
Then the item should be added to my shopping cart and the shopping cart icon should show 1


When I click the shopping cart icon 
Then I should be navigated to the Your Cart page 
And I should see the selected item listed in my cart.

 When I click the Checkout button 
Then I should be navigated to the Checkout: Your Information page 


When I enter valid shipping information 
And I click the Continue button 
Then I should be navigated to the Checkout: Overview page 


When I review the order summary 
And I click the Finish button 
Then I should be navigated to the Checkout: Complete! page 
And I should see a confirmation message 
