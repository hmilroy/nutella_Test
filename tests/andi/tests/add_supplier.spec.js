//const { describe } = require("mocha");
import { as } from "../page_functions/add_supplier";

//Change the envirenment
let url = "https://admin-qa.different.com.au/#/add-person";
//let url = "https://admin-tango.different.com.au//#/add-person";
//let url = "https://admin-tango.different.com.au//#/add-person";

describe("Different Test suite", () => {
  it("Add Supplier scenario 01", () => {
    as(url, {
      suppliername: "New supplier 03",
      billing_name: "Milroy perera",
      billing_address: "No 20,1 Street, Sri Lanka",
      billing_email:"tester4@gmail.com",
      billing_phone: "077854758",
      service_name: "Test roy",
      service_email: "tester4@gmail.com",
      service_address: "No 20,1 Street, Sri Lanka",
      service_phone: "0112547845",
      website: "https://www.ifix.com/",
      callout_fee: "200",
      emergehcy_call_fee: "700",
      notes: "Test Note",
      abn: "90856743644",
      bsb: "012209",
      account_no: "42424242",
      account_holder: "Tester",
    });
  });

  it("Add Supplier scenario 02", () => {
    as(url, { suppliername: "Test supplier 003",
    billing_name: "Milroy perera",
    billing_address: "No 20,1 Street, Sri Lanka",
    billing_email:"tester4@gmail.com",
    billing_phone: "077854788",
    service_name: "Test roy",
    service_email: "tester74@gmail.com",
    service_address: "No 20,1 Street, Sri Lanka",
    service_phone: "0112547845",
    website: "https://www.ifix.com/",
    callout_fee: "200",
    emergehcy_call_fee: "700",
    notes: "Test Note",
    abn: "90856743647",
    bsb: "012209",
    account_no: "42424242",
    account_holder: "Tester",
  });
});
});
