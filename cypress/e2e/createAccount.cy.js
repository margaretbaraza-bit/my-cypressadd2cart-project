import  { faker } from  '@faker-js/faker';
import * as locators from '../pageObjects/locators.js';
const firstName = faker.person.firstName()
console.log()
const lastName = faker.person.lastName()
console.log()
const email = faker.internet.email()
console.log()
const password= faker.internet.password()
console.log()

describe('login tests for luma app',() => {
    beforeEach(() => {
        cy.visit(locators.URL)
        cy.get(locators.createAccountLink).click()
    })

    it('user should be able to create new account', () => {
    cy.get(locators.firstnameField).type(firstName);
    cy.get(locators.lastnameField).type(lastName);
    cy.get(locators.newAccemail).type(email);
    cy.get(locators.newAccpasswordField).type('Testing123');
    cy.get(locators.confirmpasswordField).type('Testing123');
    cy.get(locators.createAccBtn).click();
    cy.get(locators.welcomeMsg).should('have.text', 'Welcome, '  +  firstName + ' ' + lastName + '!');
    })
})