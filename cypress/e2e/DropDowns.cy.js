


describe('Working on Dropdowns', ()=> {

   it.skip('Select Class dropdown', ()=> {

      cy.visit("https://www.zoho.com/commerce/free-demo.html")
      cy.get("#zcf_address_country").select('Italy').should('have.value','Italy')

   })

   it.skip('Bootstrap Dropdown', ()=> {

      cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
      cy.get("#select2-billing_country-container").click()
      cy.get(".select2-search__field").type('Japan').type('{enter}')
      cy.get("#select2-billing_country-container").should('have.text', 'Japan')
   })

   it.skip('Auto Suggestion Dropdown', ()=>{

      cy.visit("https://www.wikipedia.org/")
      cy.get("#search-input").type('Delhi')
      cy.get(".suggestion-title").contains('Delhi University').click()

   })

   it('Dynamic Dropdown', ()=>{

      cy.visit("https://www.google.com/")
      cy.get("input[name='q']").type("cypress automation")

      cy.wait(3000)

      cy.xpath("//ul[@class='G43f7e']//div[@class='wM6W7d']").each( ($el, index, $list) => {

          if($el.text()=="cypress automation tool")
          {
            cy.wrap($el).click()

          }

      })

      cy.get("input[name='q']").should('have.value','cypress automation tool')
   })

})