
Feature: Search on Amazon HomePage
  As user I want to submit search on amazon home page
  @Smoke @Regression
  Scenario: User should search and add Laptop to cart successfully
   Given I am on home page
    When I enter "Laptop" in search box and click search
    And I look for "Windows 10 Pro Laptop, BiTECOOL 2022 New 15.6 inches FHD(1920x1080) Display Pc Laptops, with Intel Celeron J4005 Dual Core, 6GB LPDDR4 and 120GB SSD, 2.4G WiFi, BT4.0 and Long Lasting Battery, Mic" product
    Then I select quantity "3"
    And I click on Add to cart
    Then I verify word "Added to Cart"

  @Sanity @Regression
  Scenario: User should search and add Mobile Phones to cart successfully
    Given I am on home page
    When I enter "Mobile Phone" in search box and click search
    And I look for "Samsung Galaxy A12 (A127F) 128GB Dual SIM, GSM Unlocked, (CDMA Verizon/Sprint Not Supported) Smartphone International Version (Fast Car Charger Bundle) No Warranty (Blue)" product
    Then I select quantity "2"
    And I click on Add to cart
    Then I verify word "Added to Cart" on page