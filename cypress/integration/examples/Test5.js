
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
     
     cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
       
      const text =$el.text()
      if(text.includes('Python'))
      {
        cy.get('tr td:nth-child(2)').eq(index).next().then(function(price)
        {
         const priceText = price.text()
         //expect (priceText).to.equal('25')
         expect (priceText).equals('25')

        })

      }

     })

    

 })
})

