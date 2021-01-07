describe("Different Test suite", () => {
    it("Add Supplier", () => {
     cy.visit("https://admin-qa.different.com.au/#/holdings");
     cy.title().should("eq", "Different Admin");
     cy.hash().should('include','#/holdings');
     cy.contains('Request a credit card payment',{timeout:10000}).should('be.visible');
     cy.wait(2000);

     cy.get('input[placeholder="Property address"]').clear().invoke('val', 'Unit 16, 17-21 Meryll Avenue, Baulkham Hills Nsw 2153').trigger('input');
     cy.xpath('//*[@id="react-autowhatever-1--item-0"]/div').click();
     cy.xpath('//*[@id="differentApp"]/div/div[2]/div/div[2]/div/div[2]/div/div[1]/div[2]/div[3]/input').type('700');
     cy.xpath('//*[@id="differentApp"]/div/div[2]/div/div[2]/div/div[2]/div/div[1]/div[2]/div[4]/div/div/div[1]/div[1]/input').type('4242424242424242');
     cy.get('input[placeholder="Name on card"]').clear().invoke('val', 'Milroy Perera').trigger('input');
     cy.get('input[placeholder="MM / YY"]').clear().invoke('val', '05/25').trigger('input');
     cy.get('input[placeholder="CVC"]').type('123');
     cy.get('input[placeholder="Email Address"]').clear().invoke('val', 'h.milroyperera@gmail.com').trigger('input');
     cy.get("[class='button button_main hdButton']").click();
     cy.wait(4000);
     cy.get("[class='button button_main hdButton']").click();

    });
});


