Feature: My Tasks page

    Background:
        Given A web browser is at the Todo login page, A user enters the username "yoryi.valdez03@gmail.com", the password "rafael1234@", and clicks on the login button
    Scenario: Top Message in My tasks page
        When A user is in the todo list home page and clicks on my tasks tab in the nav barr
        Then the top message shoul say Hey Yorgi Rafael Valdez, this is your todo list for today
    Scenario: exceed the 250 character limit for new task field
        When A user type more than 251 character in the new task fiel "this is a test of 251 character aSjasJAHSJhasjhJASHJahsjhAJSHjhsjAHJSHjahsjJAHSJhsjhJASHjahsjhASJHajshJHASJhasjhJAHSJHasjhJHSAJhasjhAJSHjhsjAHSJHasjhAJHSJahsjHASJHajshAJHSJahsjHASJHajshJAHSasjhAJHSjahsjAHSaaJHSjhsajHASJahsjAHajsJHSAjZZxczxczxczxczxcs", and press enter
        Then this should trigger an alert telling you that you have exceeded the 250 character limit for this field.
    Scenario: Create a sub task withoud any description
        When A user create a subtask and left the description input empty, and click the add button
        Then this should trigger an alert telling you that description is a require field.
    Scenario: Create a sub task and exceed the 250 character limit for the description field
        When A user create a subtask and fill the description input with more than 250 characters "this is a test of 251 character aSjasJAHSJhasjhJASHJahsjhAJSHjhsjAHJSHjahsjJAHSJhsjhJASHjahsjhASJHajshJHASJhasjhJAHSJHasjhJHSAJhasjhAJSHjhsjAHSJHasjhAJHSJahsjHASJHajshAJHSJahsjHASJHajshJAHSasjhAJHSjahsjAHSaaJHSjhsajHASJahsjAHajsJHSAjZZxczxczxczxczxcs", and click the add button
        Then this should trigger an alert telling you that you have exceeded the 250 character limit for the description field.
    Scenario: Create a sub task withoud any due date
        When A user create a subtask and left the due date input empty "this is a test", and click the add button
        Then this should trigger an alert telling you that due date is a require field.
    Scenario: Create a sub task with invalid format for the due date field
        When A user create a subtask and fill the due date input incorrectly "this is a test", "this is a test" and click the add button
        Then this should trigger an alert telling you that due date fiel has a invalid format.