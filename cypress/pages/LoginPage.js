class loginPage {
  elements = {
    usernameInput: () => cy.get("#user_email"),
    passwordInput: () => cy.get("#user_password"),
    loginBtn: () => cy.get(".btn"),
  };

  typeUsername(username) {
    this.elements.usernameInput().type(username);
  }

  typePassword(password) {
    this.elements.passwordInput().type(password);
  }

  clickLogin() {
    this.elements.loginBtn().click();
  }

  submitLogin(username, password) {
    this.elements.usernameInput().type(username);
    this.elements.passwordInput().type(password);
    this.elements.loginBtn().click();
  }
}

module.exports = new loginPage();
