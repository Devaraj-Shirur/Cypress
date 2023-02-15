


describe('Working on Alerts', ()=>{

   //By triggering Events we cant handle Alerts
   //javascript Alert
   //javascript Confirm Alert
   //Javascript prompt Alert
   //Authenticated Alert


   it('JS Alerts', ()=>{

      cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

      //cypress automatically close the alert window so we have to use trigger event to validate

      cy.get("[onclick='jsAlert()']").click()

      //Validating alert
      cy.on('window:alert', (x)=>{
         expect(x).to.contains('I am a JS Alert')
      })

      cy.get("#result").should('have.text','You successfully clicked an alert')

   })

   it('JS Confirm alert', ()=>{

      cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

      cy.get("[onclick='jsConfirm()']").click()

      cy.on('window:confirm', (a)=>{
         expect(a).to.contains('I am a JS Confirm')
      })

      // Cypress automatically closs the alert by clicking on ok button

      //cy.get("#result").should('have.text','You clicked: Ok')

      //to close the alert by clicking on cancle button we have raise event 

      cy.on('window:confirm', ()=> false)

      cy.get("#result").should('have.text','You clicked: Cancel')

   })

   it('JS prompt Alert', ()=>{
      cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

      //Before clicking on the alert button we have to trigger event and capture the prompt window to enter data to it

      cy.window().then(  (win)=>{
         cy.stub(win, 'prompt').returns('Hello World')
      })

      cy.get("[onclick='jsPrompt()']").click()

      cy.get("#result").should('have.text','You entered: Hello World')

   })

   it.only('Authentication Alert', ()=>{

      //We have two approch
      //1) We can provide username and password as a second parameter to visit method with url

      // cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth: {username:"admin", password: "admin"}})

      // cy.xpath("//div[@id='content']//p").should('have.contain',"Congratulations")

      //2) we emmbed user name and password in to the url 

      cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
      cy.xpath("//div[@id='content']//p").should('have.contain',"Congratulations")

      

   })

})