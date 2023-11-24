/// <reference types="cypress" />
it('displays two todo items by default', () => {
    cy.visit('https://www.demoblaze.com/')
    // cy.get('#signin2').click()
    // cy.get('#sign-username').type('Padik').delay
    // cy.get('#sign-password').type('pravanoha').delay
    // cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    // cy.get('#signInModal > .modal-dialog > .modal-content > .modal-footer > .btn-secondary').click()
    cy.get('#login2').click()
    cy.get('#loginusername').type('Padik').delay
    cy.get('#loginpassword').type('pravanoha').delay
    cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
    cy.get('#logout2').click()
  })
