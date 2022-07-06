
/// <reference types="cypress" />
import HomePage from '../../support/pageObjects/HomePage'
import ProductPage from '../../support/pageObjects/ProductPage'


describe("My second suite", function()
{

    before(() => {
        // root-level hook
        // runs once before all tests
        cy.fixture('example').then(function(data)
        {
          this.data = data
        })
      })

 it('My firstTest case', function()
 {
  
   const homepage = new HomePage()
   const productPage = new ProductPage()
    cy.visit(Cypress.env('url')+"/angularpractice/")
    homepage.getEditBox().type(this.data.name)
    homepage.getGender().select(this.data.gender)
    homepage.getEditBox().should('have.attr', 'minlength', '2')
    homepage.getEntrepreneur().should('be.disabled')

    Cypress.config('defaultCommandTimeout', 8000)
    homepage.getShopTab().click()

     this.data.productName.forEach(function(element)
     {
         cy.selectProduct(element)
     });

     productPage.checkOutButton().click()
     var sum=0
     cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
       
      const amount = $el.text()
      var res = amount.split(" ") 
      res = res[1].trim()
      cy.log(res)
      sum =Number(sum) + Number(res)
      
     }).then(function()
       {
        cy.log(sum)

       }
     )
     cy.get('h3 strong').then(function(element)
     {
       const amount = element.text()
       var res = amount.split(" ") 
      var total = res[1].trim()
      expect(sum).to.equal(Number(total))

     })
     cy.contains('Checkout').click()
     cy.get('#country').type('India')
     cy.get('.suggestions > ul > li > a').click()
     cy.get('#checkbox2').click({force: true})
     cy.get("input[type='submit']").click()
     //cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
     cy.get('.alert').then(function(element)
     {
       const actualText = element.text()
       expect(actualText.includes("Success")).to.be.true
       
       
     })

 })
})

