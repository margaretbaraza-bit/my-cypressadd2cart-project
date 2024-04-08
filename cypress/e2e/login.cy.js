import * as locators from '../../cypress/pageObjects/locators.js';


describe('login tests for luma app',() => {
    beforeEach(() => {
        cy.visit(locators.URL)
    })

    it('should login successfully with valid credentials', () => {
    cy.get(locators.homePageSignInLink).click();
    cy.get(locators.userNameField).type('halljohnny@example.com');
    cy.get(locators.passwordField).type('Testing123');
    cy.get(locators.loginBtn).click();
    cy.get(locators.welcomeMsg).should('have.text', 'Welcome, Tester Testing!');
    })

    it('should not login successfully with invalid credentials', () => {
    cy.get(locators.homePageSignInLink).click();
    cy.get(locators.userNameField).type('halljohnny@example.com');
    cy.get(locators.passwordField).type('Testing23');
    cy.get(locators.loginBtn).click();
    cy.get(locators.welcomeMsg).should('not.have.text', 'Welcome, Tester Testing!');
        })
    

})