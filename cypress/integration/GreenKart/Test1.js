
/// <reference types="cypress" />

describe('My First Test', () => {
  it('Does not do much!', () => {
    expect(true).to.equal(true)
  })
})

describe("My first test suite", function()
{
 it('My first test case', function()
 {
     //test step
     //cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
     cy.visit(Cypress.env('url')+ "/seleniumPractise/#/")
     cy.get('.search-keyword').type('ca')
     cy.wait(2100)
     cy.get('.product').should('have.length', 5)
     //Parent child chaining
     cy.get('.products').as('productLoactior')
     cy.get('@productLoactior').find('.product').should('have.length', 4)
     cy.get('@productLoactior').find('.product').eq(2).contains('ADD TO CART').click().then(function()
     {
      console.log('kun')
     })
     cy.get(':nth-child(3) > .product-action > button').click()
     //console.log('kun')


     cy.get('.products').find('.product').each(($el, index, $list) => {

      const textveg= $el.find('h4.product-name').text()
      if(textveg.includes('Cashews'))
      {
        $el.find('button').trigger("click")
        //cy.wrap($el).find('button').click()
      }
     })
     //assert if logo text is correctly displayed
     cy.get('.brand').should('have.text','GREENKART')

     //this is to print in logs
    cy.get('.brand').then(function(logoelement)
    {
      cy.log(logoelement.text())
    })
   

 })

 })