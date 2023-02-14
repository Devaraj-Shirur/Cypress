describe('My First Test', ()=>{

it('Verify the title', ()=>{
   cy.visit("https://demo.actitime.com/login.do")
   cy.title().should('eq', 'actiTIME - Login')
})

})