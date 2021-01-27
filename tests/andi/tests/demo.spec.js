describe("Different Test suite", () => {
    it("Add Supplier", () => {
     cy.visit("https://andi-qa.different.com.au/");
  //cy.get('.sidebar__icon[alt="Reports"]').click();
  cy.get("body.andi:nth-child(2) div:nth-child(1) nav.sidebar a.sidebar__item:nth-child(5) > img.sidebar__icon").click();



    });
});


