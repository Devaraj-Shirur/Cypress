
describe('ActiTime', ()=> {

it('Adding New User to Invite', ()=> {
   cy.visit("https://demo.actitime.com/login.do")
   cy.get("#username").type("admin")
   cy.get("[name='pwd']").type("manager")
   cy.get("#loginButton").click()
   cy.get("a.userProfileLink").contains("John Doe")
   cy.get("#container_users").click()
   cy.xpath("//div[text()='New User']").click()
   cy.get("#createUserPanel_firstNameField").type("Benki")
   cy.get("#createUserPanel_lastNameField").type("Huliya")
   cy.get("#createUserPanel_emailField").type("benkihuliya420@uttarkarnataka.com")
   
   cy.xpath("//div[text()='Save & Send Invitation']").click()
  
   cy.xpath("//td[@class='userNameCell first']//span[@class='userNameSpan'][1]").contains("Huliya, Benki")

})


})