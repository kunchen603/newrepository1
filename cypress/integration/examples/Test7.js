
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
     //cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
     cy.visit(Cypress.env('url')+"/AutomationPractice/")
    
    cy.get('#opentab').then(function(el)
    {
      const url = el.prop('href')
      cy.log(url)
      cy.visit(url)
    })
 })
})

