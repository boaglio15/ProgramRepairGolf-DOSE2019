package unrc.dose;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.PendingException;
import static org.junit.Assert.*;

import java.util.HashMap;
import java.util.Map;

import unrc.dose.User;
import unrc.dose.StepUtils;

import org.javalite.activejdbc.LazyList;

public class CommentSteps extends StepUtils {
  @When("^the user writes the title and the description$")
  public void the_user_writes_the_title_and_the_description() throws Exception {
      //
      throw new PendingException();
  }

  @Then("^the system will saves the comment$")
  public void the_system_will_saves_the_comment() throws Exception {

  throw new PendingException();
  }

  @Given("^the user \"([^\"]*)\" with the id (\\d+) is already logged on$")
  public void the_user_with_the_id_is_already_logged_on(String arg1, int arg2) throws Exception {
      // Write code here that turns the phrase above into concrete actions
      throw new PendingException();
  }

  @Given("^the comment with id (\\d+) already exists$")
  public void the_comment_with_id_already_exists(int arg1) throws Exception {
      // Write code here that turns the phrase above into concrete actions
      throw new PendingException();
  }

  @When("^the user writes the title of the response and the description$")
  public void the_user_writes_the_title_of_the_response_and_the_description() throws Exception {
      // Write code here that turns the phrase above into concrete actions
      throw new PendingException();
  }

  @Then("^the system will save the response$")
  public void the_system_will_save_the_response() throws Exception {
      // Write code here that turns the phrase above into concrete actions
      throw new PendingException();
  }

  @Given("^the user \"([^\"]*)\" with id (\\d+) exists$")
  public void the_user_with_id_exists(String arg1, int arg2) throws Exception {
      // Write code here that turns the phrase above into concrete actions
      throw new PendingException();
  }

  @When("^the user wants to see the comments$")
  public void the_user_wants_to_see_the_comments() throws Exception {
      // Write code here that turns the phrase above into concrete actions
      throw new PendingException();
  }

  @Then("^the system will return a list of comments of the user$")
  public void the_system_will_return_a_list_of_comments_of_the_user() throws Exception {
      // Write code here that turns the phrase above into concrete actions
      throw new PendingException();
  }

  @Then("^the system will return a list of comments of the challenge$")
  public void the_system_will_return_a_list_of_comments_of_the_challenge() throws Exception {
      // Write code here that turns the phrase above into concrete actions
      throw new PendingException();
  }

  @Given("^the comment with id (\\d+) exists$")
  public void the_comment_with_id_exists(int arg1) throws Exception {
      // Write code here that turns the phrase above into concrete actions
      throw new PendingException();
  }

  @When("^the user wants to see the responses of that comment$")
  public void the_user_wants_to_see_the_responses_of_that_comment() throws Exception {
      // Write code here that turns the phrase above into concrete actions
      throw new PendingException();
  }

  @Then("^the system will return a list of responses to the comment$")
  public void the_system_will_return_a_list_of_responses_to_the_comment() throws Exception {
      // Write code here that turns the phrase above into concrete actions
      throw new PendingException();
  }



}