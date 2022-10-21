class ToDoPage {
  elements = {
    newTaskInput: () => cy.get("#new_task"),
    descriptionInput: () => cy.get("#new_sub_task"),
    dueDateInput: () => cy.get("#dueDate"),
    addTaskBtn: () => cy.get(".input-group-addon"),
    mytaskLink: () => cy.get("#my_task"),
    topMessage: () => cy.get("h1"),
    subTaskBtn: () => cy.get(":nth-child(2) > :nth-child(4) > .btn"),
    addSubTaskBtn: () => cy.get("#add-subtask"),
  };
  typeNewTask(Task) {
    this.elements.newTaskInput().type(Task);
  }
  typeDescription(Description) {
    this.elements.descriptionInput().type(Description);
  }
  typeDueDate(Due) {
    this.elements.dueDateInput().type(Due);
  }
  clicksubTask() {
    this.elements.subTaskBtn().click();
  }
  clickAddSubTask() {
    this.elements.addSubTaskBtn().click();
  }
  clickAddTask() {
    this.elements.addTaskBtn().click();
  }
  clickMyTaskPage() {
    this.elements.mytaskLink().click();
  }
}

module.exports = new ToDoPage();
