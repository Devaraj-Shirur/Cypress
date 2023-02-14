



describe('Assertion', ()=>{

   it('Implicit Assertion', ()=> {

       //Keywords - Should & and 

   cy.visit("https://demo.actitime.com/login.do")
   cy.url().should('eq',"https://demo.actitime.com/login.do")
   cy.url().should('contain', "actitime")
   cy.url().should('include', "demo.actitime")

   cy.url().should('eq',"https://demo.actitime.com/login.do")
   .should('contain', "actitime")
   .should('include', "demo.actitime")
   
   //Negetive 

   cy.url().should('not.include', "Orange")

   cy.url().should('eq',"https://demo.actitime.com/login.do")
   .and('contain', "actitime")
   .and('include', "demo.actitime")

   cy.get('.atLogoImg').should('be.visible') // validate Logo of the page
   .and('exist')

   cy.xpath("//a").should('have.length','7') // validate number of link present in the page

   cy.xpath("//input[@name='username']").type("Rahul").should('have.value','Rahul')

   })
  
   it('Explicit Assertion', () => {

      //Keyword
      //expect - BDD
      //assert = TDD

      cy.visit("https://demo.actitime.com/login.do")

      cy.get("#username").type("admin")
      cy.get("[name='pwd']").type("manager")
      cy.get("#loginButton").click()

      let expectPageTitle = "Enter Time-Track"

      cy.xpath("//td[@class='pagetitle'][1]")
         .then(  (x)=>{

            //BDD
            let actualPageTitle = x.text()
            expect(actualPageTitle).to.equal(expectPageTitle)

            //TDD
            assert.equal(actualPageTitle, expectPageTitle)

          })

   })
   


})