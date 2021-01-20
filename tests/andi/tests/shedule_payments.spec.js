describe("Different Test suite", () => {
    it("Add Supplier", () => {
      cy.visit("https://admin-qa.different.com.au/#/scheduled-payments");
      cy.title().should("eq", "Different Admin");
     cy.hash().should('include','#/scheduled-payments');

     cy.get("[class='new-schedule-btn']").click();
     
     cy.get('input[placeholder="Property address"]').clear().invoke('val', 'Lot 95, 45 Auotomation Test Milroy Street, Test suburb 12 Victoria 5000').trigger('input');
cy.xpath('//*[@id="react-autowhatever-1--item-0"]/div').click();

cy.wait(1000);
//select a value from dropdown
cy.get("#differentApp > div > div.content-dock > div > div.col.content-dashboard > div > div > div.craete-schedule-payment-form-section > div.schedule-payment-form > form > div:nth-child(2) > div > select")
  .select('Water Usage').should('have.value', 'Water Usage');
  cy.contains("Amount",{timeout:10000}).click();

  cy.get("[class='pay-amount col-md-12']").type('200');

    });
});

//   cy.get('input[placeholder="CVC"]').type('123');