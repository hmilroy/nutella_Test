//const { describe } = require("mocha");
//import { property } from "cypress/types/lodash";
import { createProperty} from "../page_functions/create_property";

describe("Different Test suite", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Create a new property - Unit - South Australia", () => {
   const propertyString = createProperty({
      unit: "Lot",
      number1: 84,
      number2: 787,
      number3: 50,
      property_name: "Cypress automation property 01",
      suburb: "Cypress suburb",
      postcode: 5008,
      owner_email: "h.milroyperera+yr0er5@gmail.com",
      owner_name1: "Test Auto Owner",
      region: "Victoria",
      streettype: "Street",
      
    });

    cy.log(propertyString);
 
  });

  // it("Create a new property Suite - Victoria", () => {
  //   as({
  //     unit: "Suite",
  //     number1: 10,
  //     number2: 440,
  //     number3: 50,
  //     property_name: "Cypress automation property 01",
  //     suburb: "Cypress suburb",
  //     postcode: 5008,
  //     owner_email: "h.milroyperera+mvpy@gmail.com",
  //     owner_name1: "Test Auto Owner",
  //     region: "Victoria",
  //     streettype: "Street",
  //   });
  //   cy.url().should("include", "view-property");
  //   cy.get("h1").should("be.visible");
  // });
});