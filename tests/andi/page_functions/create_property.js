//const { describe } = require("mocha");
/// <reference types="cypress" />
const map = {
  create_property_button:"[class='wtml-button wtml-button--warhead wtml-button--medium wtml-button--ghost topbar__actions_item']",
  address_type:"#differentApp > div > div.content-dock > div > form > div.inner-form.add-property-form > div.custom-address-comp > div:nth-child(1) > div > div > select",
  region:"#differentApp > div > div.content-dock > div > form > div.inner-form.add-property-form > div.custom-address-comp > div:nth-child(6) > div > div > div.col-xs-6.countrySelect__wrapper > select",
  add_new_email: "[class='search-input__notfound__text']",
  owner_name: "[name='name']",
  add_property_save_button: "[class='button button_main']",
  unitnumber: "input[class='col-xs formInput formInput--last']",
  numberx:"#differentApp > div > div.content-dock > div > form > div.inner-form.add-property-form > div.custom-address-comp > div:nth-child(2) > div > div > input:nth-child(3)",
  suburb: "input[name='suburb']",
  postcode: "input[name='postCode']",
  email: '.email-validation input[name="Search-Input"]',
  street: "[class='col-xs formInput formInput--first']",
};

export function createProperty(property) {
  cy.log("this is the start of the test");
  //cy.visit(url);
  cy.wait(2000);

  // const name = property.unit.concat(property.number1, property.number2);
  // cy.log(name);
 //cy.contains("Sign in with Google", { timeout: 10000 }).click();
  cy.get(map.create_property_button, { timeout: 10000 }).click();
  cy.get("[class='MA-cantFind']").click();
  cy.get(map.address_type, { timeout: 10000 }).select(property.unit);
  cy.get(map.region).select(property.region);

  cy.get("form").within(($form) => {
    cy.get(map.unitnumber).type(property.number1);
    cy.get("input").eq(1).type(property.number2);
    cy.get("input").eq(2).type(property.number3);
    cy.get(map.street).type(property.property_name);
    cy.get("[name='streetType']").select(property.streettype);
    cy.get(map.suburb).type(property.suburb);
    cy.get(map.postcode).type(property.postcode);
    cy.get(map.email).type(property.owner_email);
    cy.get(map.add_new_email).click();
    cy.get(map.owner_name).type(property.owner_name1);
    cy.get(map.add_property_save_button).click();
    cy.wait(9000);
  });
  return(generatePropertyString(property));
}
export function generatePropertyString(property) {
  const propertyString = 
  property.unit + " " + 
  property.number1 + ", " +
  property.number2 + "-" +
    property.number3 + " " +
    property.property_name + " " +
    property.streettype + ", " +
    property.suburb + " " +
    property.region + " " +
    property.postcode + "  Dashboard";
  return propertyString;
};