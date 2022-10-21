import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
const loginPage = require("../../pages/LoginPage");
const todoPage = require("../../pages/TodoPage");

Given(
  "A web browser is at the Todo login page, A user enters the username {string}, the password {string}, and clicks on the login button",
  (username, password) => {
    cy.visit("/");
    loginPage.submitLogin(username, password);
  }
);

When(
  "A user is in the todo list home page and clicks on my tasks tab in the nav barr",
  () => {
    todoPage.clickMyTaskPage();
  }
);
Then(
  "the top message shoul say Hey Yorgi Rafael Valdez, this is your todo list for today",
  () => {
    todoPage.elements
      .topMessage()
      .should(
        "contains.text",
        "Hey Yorgi Rafael Valdez, this is your todo list for today"
      );
  }
);

When(
  "A user type more than 251 character in the new task fiel {string}, and press enter",
  (Task) => {
    todoPage.clickMyTaskPage();
    todoPage.typeNewTask(Task);
    todoPage.clickAddTask();
  }
);
Then(
  "this should trigger an alert telling you that you have exceeded the 250 character limit for this field.",
  () => {}
);
When(
  "A user create a subtask and left the description input empty, and click the add button",
  () => {
    todoPage.clickMyTaskPage();
    todoPage.clicksubTask();
    todoPage.clickAddSubTask();
  }
);
Then(
  "this should trigger an alert telling you that description is a require field.",
  () => {}
);
When(
  "A user create a subtask and fill the description input with more than 250 characters {string}, and click the add button",
  (Description) => {
    todoPage.clickMyTaskPage();
    todoPage.clicksubTask();
    todoPage.typeDescription(Description);
    todoPage.clickAddSubTask();
  }
);
Then(
  "this should trigger an alert telling you that you have exceeded the 250 character limit for the description field.",
  () => {}
);

When(
  "A user create a subtask and left the due date input empty {string}, and click the add button",
  (Description) => {
    todoPage.clickMyTaskPage();
    todoPage.clicksubTask();
    todoPage.typeDescription(Description);
    todoPage.clickAddSubTask();
  }
);
Then(
  "this should trigger an alert telling you that due date is a require field.",
  () => {}
);
When(
  "A user create a subtask and fill the due date input incorrectly {string}, {string} and click the add button",
  (Description, Due) => {
    todoPage.clickMyTaskPage();
    todoPage.clicksubTask();
    todoPage.typeDescription(Description);
    todoPage.typeDueDate(Due);
    todoPage.clickAddSubTask();
  }
);
Then(
  "this should trigger an alert telling you that due date fiel has a invalid format.",
  () => {}
);
