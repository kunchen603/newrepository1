
/// <reference types="cypress" />

describe('My second test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe("My second test suite", function()
{
 it('My first test case', function()
 {
     //test step
     
     cy.visit(Cypress.env('url')+"/AutomationPractice/")
    cy.get('#alertbtn').click()
    cy.get("input[value ='Confirm']").click()
    //window: alert
    cy.on('window:alert',(str)=>
    [

      //mocha
      expect(str).to.equal('Hello , share this practice page and share your knowledge')
    ])

    cy.on('window:confirm',(str)=>
    [
      
      //mocha
      expect(str).to.equal('Hello , Are you sure you want to confirm?')
    ])

    cy.get('#opentab').invoke('removeAttr','target').click()
    cy.url().should('include','index')
    
    cy.go('back')
    cy.url().should('include','AutomationPractice')

 })

 })