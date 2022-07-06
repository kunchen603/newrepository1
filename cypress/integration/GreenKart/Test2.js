
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
    // cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
    //cy.visit(Cypress.env('url')+"/seleniumPractise/#/")
    cy.visit(Cypress.env('url'))
     cy.get('.search-keyword').type('ca')
     cy.wait(2100)
    
     //Parent child chaining
     cy.get('.products').as('productLoactior')
     
      cy.get('.products').find('.product').each(($el, index, $list) => {

      const textveg= $el.find('h4.product-name').text()
      if(textveg.includes('Cashews'))
      {
        $el.find('button').trigger("click")
        //cy.wrap($el).find('button').click()
      }
     })
     
     cy.get('.cart-icon > img').click()
     cy.contains('PROCEED TO CHECKOUT').click()
     cy.contains('Place Order').click()
     

 })

 })