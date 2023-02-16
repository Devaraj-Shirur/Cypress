

describe(' Ifrome Handling', ()=>{

   it('Approch 1', ()=>{

      cy.visit("https://the-internet.herokuapp.com/iframe")

     let iframe =  cy.get("#mce_0_ifr").its('0.contentDocument.body').should('be.visible').then(cy.wrap);

      iframe.clear().type("Devaraj Shirur {ctrl+a}");

      cy.get("[title='Bold']").click();

      //cy.get("[aria-label='Rich Text Area. Press ALT-0 for help.']").should('have.text', "Devaraj Shirur");

   })

})