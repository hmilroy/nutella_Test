//const { describe } = require("mocha");

describe("Different Test suite", () => {
  const map = {
    create_property_button:"[class='wtml-button wtml-button--warhead wtml-button--medium wtml-button--ghost topbar__actions_item']",
    address_type:"#differentApp > div > div.content-dock > div > form > div.inner-form.add-property-form > div.custom-address-comp > div:nth-child(1) > div > div > select",
    region: "#differentApp > div > div.content-dock > div > form > div.inner-form.add-property-form > div.custom-address-comp > div:nth-child(6) > div > div > div.col-xs-6.countrySelect__wrapper > select",
    add_new_email: "[class='search-input__notfound__text']",
    owner_name: "[name='name']",
    add_property_save_button: "[class='button button_main']"
  };

  it("Test Create Property flow", () => {
    cy.visit("https://admin-qa.different.com.au/#/");
    cy.contains("Sign in with Google", { timeout: 10000 }).click();
    cy.location("protocol").should("eq", "https:");
    cy.title().should("eq", "Different Admin");
    cy.get(map.create_property_button, { timeout: 10000 }).click();
    cy.hash().should("include", "#/add-property");
    cy.contains("Address", { timeout: 10000 }).should("be.visible");
    cy.get("[class='MA-cantFind']").click();
    cy.get(map.address_type, { timeout: 10000 }).select("Suite");
    cy.get(map.region).select("Queensland");

    cy.get("form").within(($form) => {
      cy.get("input").first().type("101");
      cy.get("input").eq(1).type("88");
      cy.get("input").eq(2).type("47");
      cy.get("input").eq(3).type("Cypress automation property");
      cy.get("[name='streetType']").select("Road");
      cy.get("input").eq(4).type("Cypress suburb");
      cy.get("input").eq(5).type("5008");
      cy.get("input").eq(6).type("h.milroyperera+press02@gmail.com");
      cy.get(map.add_new_email).click();
      cy.get(map.owner_name).type("Auto Owner 02");
      cy.get(map.add_property_save_button).click();
    });
  });
});

//npm run cypress:open
