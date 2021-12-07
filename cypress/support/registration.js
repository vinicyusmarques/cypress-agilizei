const Chance = require('chance');
const chance = new Chance();


Cypress.Commands.add('fillForm', () => { 
    cy.get('input[id="email_create"]').type(chance.email())
    cy.get('button[id="SubmitCreate"]').click()
    cy.get('input[id="id_gender1"]').check()
    cy.get('input[id="customer_firstname"]').type(chance.first())
    cy.get('input[id="customer_lastname"]').type(chance.last())
    cy.get('input[id="passwd"]').type(chance.natural())
    cy.get('select#days').select('12')
    cy.get('select#months').select('September')
    cy.get('select#years').select('1994')
    cy.get('input[name="newsletter"]').check()
    cy.get('input[name="firstname"]').type(chance.first())
    cy.get('input[name="lastname"]').type(chance.last())
    cy.get('input[name="company"]').type(chance.company())
    cy.get('input[name="address1"]').type(chance.address())
    cy.get('input[name="city"]').type(chance.city())
    cy.get('select#id_state').select('New York', {force: true})
    cy.get('input[id="postcode"]').type(chance.zip())
    cy.get('textarea#other').type(chance.string())
    cy.get('input[id="phone_mobile"]').type(chance.phone())
})

Cypress.Commands.add('submitForm', () => { 
    cy.contains('Register').click()
})

Cypress.Commands.add('validateRegistration', () =>{
    cy.url().should('contain', 'controller=my-account')
    cy.get('h1[class="page-heading"]').should('have.text', 'My account')
})