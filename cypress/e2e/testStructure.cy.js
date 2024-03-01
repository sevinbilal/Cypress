/// <reference types="cypress" />


describe('Context: My first tests', () => {
    before(() => {
        // runs once before all test cases in describe block
    })
    beforeEach(() => {
        // runs before each test case
    })
    after(() => {
        // runs once after all tests finished
    })
    afterEach(() => {
        // runs once after each test case
    })
    it('Open a web app', () => {
        cy.visit('/registration_form');
    })
})