package com.amazon.cucumber.steps;

import com.amazon.pages.HomePage;
import com.amazon.pages.SearchResultPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class HomePageTest {
    @Given("^I am on home page$")
    public void iAmOnHomePage() {
        System.out.println("I am on HomePage");
    }

    @When("^I enter \"([^\"]*)\" in search box and click search$")
    public void iEnterInSearchBoxAndClickSearch(String text)  {
        new HomePage().sendTextToSearch(text);
    }


    @Then("^I select quantity \"([^\"]*)\"$")
    public void iSelectQuantity(String qty)  {
        new SearchResultPage().selectQty(qty);
    }


    @And("^I click on Add to cart$")
    public void iClickOnAddToCart() {
        new SearchResultPage().clickAddButton();
    }

    @Then("^I verify word \"([^\"]*)\"$")
    public void iVerifyWord(String text) throws InterruptedException { String actualText = new SearchResultPage().addToCartVerify();
        Assert.assertEquals("You are not on Cart Page",text,actualText);
        System.out.println(actualText);
    }

    @And("^I look for \"([^\"]*)\" product$")
    public void iLookForLaptop(String text) throws InterruptedException {
        new SearchResultPage().searchItemFromList(text);
    }

    @Then("^I verify word \"([^\"]*)\" on page$")
    public void iVerifyWordOnPage(String text2) {
        { String actualText = new SearchResultPage().mobileVerify();
            Assert.assertEquals("You are not on cart page",text2,actualText);
            System.out.println(actualText);
        }
    }
}
