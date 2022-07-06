/// <reference types="cypress" />
import HomePage from '../../../../support/pageObjects/HomePage'
import ProductPage from '../../../../support/pageObjects/ProductPage'
import { Given,When,Then, And } from "cypress-cucumber-preprocessor/steps";
//npx cypress-tags run -e TAGS="@Smoke" --headed --browser chrome
//npx cypress run --spec cypress\integration\examples\BDD\ecommerce.feature --headed --browser chrome
//add cucumber report options in package.json->output.json
//use html report plugin/create js file (pass the details of output.json)
//run node cucumber-html-report.js

const homepage = new HomePage()
const productPage = new ProductPage()

/*Given('I open Ecommerce page', ()=>
{
    cy.visit(Cypress.env('url')+"/angularpractice/")
})*/


Given('I open Ecommerce page', () => {
  cy.visit(Cypress.env('url')+"/angularpractice/")
})


//When I add items to Cart
When('I add items to Cart', function()
{
    homepage.getShopTab().click()

    this.data.productName.forEach(function(element)
    {
        cy.selectProduct(element)
    });

    productPage.checkOutButton().click()
})

//And Validate the total prices
And('Validate the total prices', ()=>
{

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
}
)

//Then select the country submit and verify Thankyou
Then('select the country submit and verify Thankyou', ()=>
{

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


//When I fill the form details
When('I fill the form details', function(dataTable)
{
  //[ bobz ,male ]]
  homepage.getEditBox().type(dataTable.rawTable[1][0])
  homepage.getGender().select(dataTable.rawTable[1][1])

})

//Then Validate the form behavior
Then('Validate the form behavior', function()
{
  homepage.getEditBox().should('have.attr', 'minlength', '2')
  homepage.getEntrepreneur().should('be.disabled')

  Cypress.config('defaultCommandTimeout', 8000)
})

//And Select the Shop page
And('Select the Shop page', function()
{
  homepage.getShopTab().click()
})