
/// <reference types="cypress" />
///<reference types ="Cypress-iframe"/>
import 'cypress-iframe'


describe("Frames Test", function()
{
 it('Demo example', function()
 {
     //test step
     cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    
   cy.frameLoaded('#courses-iframe')
   cy.iframe().find("a[href='#/mentorship']").eq(0).click()
   cy.iframe().find(".pricing-title").should('have.length',2)



 })
})

