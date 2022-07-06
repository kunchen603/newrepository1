
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
   
     cy.visit(Cypress.env('url')+ "/AutomationPractice/")
     cy.get('input#checkBoxOption1').check().should('be.checked').and('have.value', 'option1')

     //checkbox
     cy.get('input#checkBoxOption1').uncheck().should('not.be.checked')
     cy.get('input[type="checkbox"]').check(['option2','option3'])
     //static dropdown
     cy.get('select#dropdown-class-example').select('option2').should('have.value','option2')
     //dynamic dropdown
     cy.get('input#autocomplete').type('ind')
     cy.get('.ui-menu-item div').each(($el, index, $list) => {
      if( $el.text()==="India")
      {
        $el.trigger('click')

      }
     })
     cy.get('#autocomplete').should('have.value','India')

     //visible or not visible
     cy.get('#displayed-text').should('be.visible')
     cy.get('#hide-textbox').trigger('click')
     cy.get('#displayed-text').should('not.be.visible')
     cy.get('#show-textbox').trigger('click')
     cy.get('#displayed-text').should('be.visible')

     //radio button
     cy.get('input[value="radio2"]').check().should('be.checked')
     

 })

 })