beforeEach(()=>{
    cy.clearAllCookies();
    cy.clearAllLocalStorage();
    cy.clearAllSessionStorage();
    cy.log('Cache and cookies cleaewd');
    cy.reload();
});
describe('this is a log in test', () => {
    it('check username and password', () => {
    cy.visit("https://www.saucedemo.com/")
    cy.get('[data-test="username"]').type("standard_user")
    cy.get('[data-test="password"]').type("secret_sauce")
    cy.get('[data-test="login-button"]').click()

        
    });
    //add all items
   /* it('to add all item to the cart', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        for(let i=0;i<6;i++){
            cy.get('div#inventory_container').find('.btn ').eq(i).click()

            

        }
        
    });*/
    //add the first 3 items
   /* it('add the first 3 items', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        for(let i=0;i<6;i++){
            if(i==3)
            {break;}
            cy.get('div#inventory_container').find('.btn ').eq(i).click()

            

        }
        
    });*/
    // add half of  item and ignore the other
    it('add some items', () => {
        cy.visit("https://www.saucedemo.com/")
        cy.get('[data-test="username"]').type("standard_user")
        cy.get('[data-test="password"]').type("secret_sauce")
        cy.get('[data-test="login-button"]').click()
        for(let i=0;i<6;i++){
            if(i%2==0)
            {  cy.get('div#inventory_container').find('.btn ').eq(i).click()}
          

            

        }
        
    });

});