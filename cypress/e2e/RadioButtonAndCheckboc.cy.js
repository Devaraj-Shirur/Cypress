

describe('Elements of WebPAge', ()=> {

   it('Work on Radio Button', ()=> {

      cy.visit("https://itera-qa.azurewebsites.net/home/automation")

      //Visiblity
      cy.get("#female").should('be.visible')
      cy.get("#male").should('be.visible')

      //Checking
      cy.get("#female").check().should('be.checked')
      cy.get("#male").should('not.be.checked')

      cy.get("#male").check().should('be.checked')
      cy.get("#female").should('not.be.checked')

   })

   it('Check box', ()=> {

      cy.visit("https://itera-qa.azurewebsites.net/home/automation")

      cy.get('#monday').should('be.visible').and('not.be.checked')

      cy.get('#monday').check().should('be.checked')

      cy.get('#monday').uncheck().should('not.be.checked')

      //Selecting all the checkbox

      cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

      //Unselecting all checkbox

      cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

      //Selecting First Checkbox

      cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')

      //Selecting last checkbox

      cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')

   })
})