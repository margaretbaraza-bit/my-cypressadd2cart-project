import  { faker } from  '@faker-js/faker';
import * as locators from '../pageObjects/locators.js';
//import { it } from 'mocha';

describe('login tests for luma app',() => {
    beforeEach(() => {
    cy.visit(locators.URL);
    cy.get(locators.homePageSignInLink).click();
    cy.get(locators.userNameField).type('halljohnny@example.com');
    cy.get(locators.passwordField).type('Testing123');
    cy.get(locators.loginBtn).click();
    cy.get(locators.welcomeMsg).should('have.text', 'Welcome, Tester Testing!');
    })

    it('Users should be able to add products to cart and checkout', () => {
      cy.get(locators.menTab).trigger('mouseover')
      cy.get(locators.menTab).click();
      cy.get(locators.menJackets).click();
      cy.wait(1000)
      cy.get(locators.yellowJacket).click();
      cy.wait(1000)
      cy.get(locators.sizeJacket).click();
      cy.wait(1000)
      cy.get(locators.colourJacket).click();
      cy.wait(1000)
      cy.get(locators.qtyJacket).clear();
      cy.get(1000)
      cy.get(locators.qtyJacket).click();
      cy.wait(1000)
      cy.get(locators.qtyJacket).type('2');
      cy.wait(1000)
      cy.get(locators.addcartBtn).click();
      cy.wait(1000)
     // cy.get(locators.addcartMsg).should('have.text','You have added Proteus Fitness Jackshirt to your shopping cart.')
      
        })
    })




