$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("homePage.feature");
formatter.feature({
  "line": 2,
  "name": "Search on Amazon HomePage",
  "description": "As user I want to submit search on amazon home page",
  "id": "search-on-amazon-homepage",
  "keyword": "Feature"
});
formatter.before({
  "duration": 30194832000,
  "status": "passed"
});
formatter.scenario({
  "line": 5,
  "name": "User should search and add Laptop to cart successfully",
  "description": "",
  "id": "search-on-amazon-homepage;user-should-search-and-add-laptop-to-cart-successfully",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@Smoke"
    },
    {
      "line": 4,
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "I am on home page",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "I enter \"Laptop\" in search box and click search",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "I look for \"Windows 10 Pro Laptop, BiTECOOL 2022 New 15.6 inches FHD(1920x1080) Display Pc Laptops, with Intel Celeron J4005 Dual Core, 6GB LPDDR4 and 120GB SSD, 2.4G WiFi, BT4.0 and Long Lasting Battery, Mic\" product",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I select quantity \"3\"",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I click on Add to cart",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I verify word \"Added to Cart\"",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageTest.iAmOnHomePage()"
});
formatter.result({
  "duration": 177442400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Laptop",
      "offset": 9
    }
  ],
  "location": "HomePageTest.iEnterInSearchBoxAndClickSearch(String)"
});
formatter.result({
  "duration": 11112367900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Windows 10 Pro Laptop, BiTECOOL 2022 New 15.6 inches FHD(1920x1080) Display Pc Laptops, with Intel Celeron J4005 Dual Core, 6GB LPDDR4 and 120GB SSD, 2.4G WiFi, BT4.0 and Long Lasting Battery, Mic",
      "offset": 12
    }
  ],
  "location": "HomePageTest.iLookForLaptop(String)"
});
formatter.result({
  "duration": 24287164300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 19
    }
  ],
  "location": "HomePageTest.iSelectQuantity(String)"
});
formatter.result({
  "duration": 295648000,
  "status": "passed"
});
formatter.match({
  "location": "HomePageTest.iClickOnAddToCart()"
});
formatter.result({
  "duration": 357553000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Added to Cart",
      "offset": 15
    }
  ],
  "location": "HomePageTest.iVerifyWord(String)"
});
formatter.result({
  "duration": 2532997800,
  "error_message": "org.junit.ComparisonFailure: You are not on Cart Page expected:\u003c[Added to Cart]\u003e but was:\u003c[]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat com.amazon.cucumber.steps.HomePageTest.iVerifyWord(HomePageTest.java:36)\r\n\tat ✽.Then I verify word \"Added to Cart\"(homePage.feature:11)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 2291088900,
  "status": "passed"
});
});