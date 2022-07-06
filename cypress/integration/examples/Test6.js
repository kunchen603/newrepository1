
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
     cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
    //cy.get('div.mouse-hover-content').invoke('show')
    
    cy.contains('Top').click({force:true})
    cy.url().should('include', 'top')

 })
})

