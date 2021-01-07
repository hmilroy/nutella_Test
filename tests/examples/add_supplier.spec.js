//const { describe } = require("mocha");
describe("Different Test suite", () => {
  it("Add Supplier", () => {
    cy.visit("https://admin-qa.different.com.au/#/add-person");
    cy.title().should("eq", "Different Admin");
    cy.location("protocol").should("eq", "https:");
    cy.hash().should("include", "#/add-person");
    cy.contains("Address", { timeout: 10000 }).should("be.visible");
    cy.wait(2000);
 
    cy.get("form").within(($form) => {
      cy.get("input").first().type("Test roy");
      cy.get("input").eq(1).type("Billing roy");
      cy.get("input").eq(2).type("tester@gmail.com");
      cy.get("input").eq(3).type("No 20,1 Street");
      cy.xpath('//*[@id="differentApp"]/div/div[2]/div/div/form/div[2]/div[1]/div[2]/div[4]/div/div/div/div[2]/ul/li[2]/input').type("123456789");
      cy.get("input").eq(7).type("Tester");
      cy.get("input").eq(8).type("tester@gmail.com");
      cy.get("input").eq(9).type("No 20,1 Street");
      cy.xpath('//*[@id="differentApp"]/div/div[2]/div/div/form/div[2]/div[1]/div[4]/div[4]/div/div/div/div[2]/ul/li[2]/input').type("1089232345");
      cy.get("input").eq(11).type("No 20,1 Street");
      cy.get("input").eq(12).type("www.google.com");
      cy.get("input").eq(25).check({ force: true });
      cy.get("input").eq(28).check({ force: true });
      cy.get("input").eq(33).check({ force: true });
      cy.get("input").eq(38).check({ force: true });
      cy.get("input").eq(41).check({ force: true });
      cy.get("input").eq(42).check({ force: true });
      cy.get("input").eq(46).check({ force: true });
      cy.get("input").eq(47).check({ force: true });
      cy.get("input").eq(50).check({ force: true });
      cy.get("input").eq(53).check({ force: true });
      cy.get("input").eq(54).check({ force: true });
      cy.get("input").eq(55).check({ force: true });
      cy.get("input").eq(56).check({ force: true });
      cy.get("input").eq(60).check({ force: true });
      cy.get("input").eq(63).check({ force: true });
      cy.get("input").eq(66).check({ force: true });
      cy.get("input").eq(69).check({ force: true });
      cy.get("input").eq(98).check({ force: true });
      cy.get("input").eq(118).check({ force: true });
      cy.get("input").eq(130).check({ force: true });
      cy.get("input").eq(136).check({ force: true });
      cy.get("input").eq(137).check({ force: true });
      cy.get("input").eq(138).check({ force: true });
      cy.get("input").eq(139).type("200");
      cy.get("input").eq(140).type("700");
      cy.xpath('//*[@id="differentApp"]/div/div[2]/div/div/form/div[2]/div[1]/div[9]/div[4]/div/textarea').type("Test Note");
      cy.xpath('//*[@id="differentApp"]/div/div[2]/div/div/form/div[2]/div[1]/div[10]/input').type("90856743641");
      cy.get("input").eq(142).type("012209");
      cy.get("input").eq(143).type("42424242");
      cy.get("input").eq(144).type("Tester");
    });
    //to check all the check boxes at once
    //cy.get('[type="checkbox"]').check({force:true});
    cy.xpath('//*[@id="differentApp"]/div/div[2]/div/div/form/div[2]/div[2]/div/button[1]').click();
  });
});
