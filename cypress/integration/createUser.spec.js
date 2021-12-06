/// <reference types="cypress" />

describe('Create user', () => {

    it('When entering an email, fill the form and submit, then the User must be created and redirected to My Account', () => {
        cy.visit('/index.php?controller=authentication&back=my-account')

        cy.fillForm()
        cy.submitForm()
        cy.validateRegistration()
    });
});