

describe('Handling child window or tab', ()=>{

   //We have 2 approch

   it('Approch 1', ()=>{

      cy.visit("https://the-internet.herokuapp.com/windows")
      
      cy.get(".example>a").invoke('removeAttr', 'target')

      cy.get(".example>a").click()

      cy.url().should('contain','https://the-internet.herokuapp.com/windows')

      cy.go('back')

      cy.url().should('eq','https://the-internet.herokuapp.com/windows')
   })

   it.only('Approch 2', ()=>{

      cy.visit("https://the-internet.herokuapp.com/windows")
      
      cy.get(".example>a").then( (e)=>{
          
         let url= e.prop('href')

         cy.visit(url)

      })

      cy.url().should('contain','https://the-internet.herokuapp.com/windows')

      cy.go('back')

      cy.url().should('eq','https://the-internet.herokuapp.com/windows')

   })
})