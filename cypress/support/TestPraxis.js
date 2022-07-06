
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
       cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
       cy.get('.search-keyword').type('ca')
       cy.wait(2100)
       cy.get('.product').should('have.length', 5)
       //Parent child chaining
       cy.get('.products').find('.product').should('have.length', 4)
       cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
       cy.get(':nth-child(2) > .product-action > button').click()

   })

   it('my second test case', function(){

    //test step
    cy.visit("https://demo.rhigrp.net/")
    //cy.get(input[type='email']).type('kun@test.com')
      cy.get('#UserName').type('kchen')

   })

   it('my third test case',function()
   {
     cy.visit("https://206.12.12.51:44313/Tenant/PraxisConnect/Login?Id=915D2C34-47B3-469C-9D91-D92ACB3AF113&returnUrl=%2Fconnect%2Fauthorize%3Fclient_id%3Dpraxis_connect_c%26redirect_uri%3Dhttps%253A%252F%252F206.12.12.51%253A44315%252Flogin%26response_type%3Dcode%26scope%3Dprofile%2520openid%2520praxisconnect_datacenter%26state%3D9e3dda3124304ee9b3fd7164c1d63a07%26code_challenge%3Dm5XJn0rhEvf5iqZ2mAGG4vtgGcKb2zKhr7WyKMgMJWg%26code_challenge_method%3DS256%26response_mode%3Dquery")
     cy.get('praxis-connect-ui-auth#auth').shadow().find('input#email').type('kun@test.com')
     cy.get('praxis-connect-ui-auth#auth').shadow().find('input#password').type('Complex123!')
     cy.get('praxis-connect-ui-auth#auth').shadow().find('.button').click()
     

    })

  })