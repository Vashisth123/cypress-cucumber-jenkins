export class common{
    headerLocators= {
       "CONTACT US":"//a[contains(text(),'Contact us')]"
   }
    openURL=(URL)=>{
       return cy.visit(URL);
   };
   validateText(text){
       cy.contains(text).should('be.visible');
   }
   clickOnLink(link){
       cy.contains(link).click();
   }
   clickOnHeaderTab(tab){
       cy.xpath(this.headerLocators[tab]).click();
   }
}
