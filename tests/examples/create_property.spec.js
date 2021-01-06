//const { describe } = require("mocha");

describe("Different Test suite", () => {
    it("Visit Different Andi", () => {
      cy.visit("https://admin-qa.different.com.au/#/");
      //cy.get('.btn').contains('Sign in with Google')
      // cy.focused().click()
      cy.contains("Sign in with Google",{timeout:10000}).click();
      cy.location("protocol").should("eq", "https:");
      cy.title().should("eq", "Different Admin");
  
  
      cy.get("[class='wtml-button wtml-button--warhead wtml-button--medium wtml-button--ghost topbar__actions_item']",{timeout:10000} ).click();
      cy.hash().should('include','#/add-property');
      cy.contains('Address',{timeout:10000}).should('be.visible');
      
      cy.get("[class='MA-cantFind']").click();
      cy.get("#differentApp > div > div.content-dock > div > form > div.inner-form.add-property-form > div.custom-address-comp > div:nth-child(1) > div > div > select").select("Suite");
      cy.get("[class='col-xs formInput formInput--last']").type("90");
      cy.get("#differentApp > div > div.content-dock > div > form > div.inner-form.add-property-form > div.custom-address-comp > div:nth-child(2) > div > div > input:nth-child(1)"    ).type("89");
      cy.get("#differentApp > div > div.content-dock > div > form > div.inner-form.add-property-form > div.custom-address-comp > div:nth-child(2) > div > div > input:nth-child(3)"    ).type("89");
      cy.get("[class='col-xs formInput formInput--first']").type(      "Cypress automation property"    );
      cy.get("[class='grouped-select col-xs-4 col-sm-4 col-md-4 formInput formInput--last']").select("Road");
      cy.get("input[name='suburb']").type("Cypress suburb");
      cy.get("input[name='postCode']").type("5008");
      cy.get( "#differentApp > div > div.content-dock > div > form > div.inner-form.add-property-form > div.custom-address-comp > div:nth-child(6) > div > div > div.col-xs-6.countrySelect__wrapper > select"    ).select("Queensland");
      cy.get("input[name='Search-Input']").type(   "h.milroyperera+press02@gmail.com" );
      cy.get("[class='search-input__notfound__text']").click();
      cy.get("[class='form-input col-xs-9']").type("Auto Owner 02");
      cy.get("[class='button button_main']").click();
    });
  });
  
  //npm run cypress:open
  
  
  