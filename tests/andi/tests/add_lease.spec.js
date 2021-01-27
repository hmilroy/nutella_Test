//const { describe } = require("mocha");
import { as } from "./page_functions/add_lease";
 
//Change the envirenment
var url = "https://andi-qa.different.com.au/properties/1167/leases";
//let url = "https://admin-tango.different.com.au//#/add-person";
//let url = "https://admin-tango.different.com.au//#/add-person";
 
describe("Different Test suite", () => {
 it("Add new lease >> Takeover - Periodic - Weekly", () => {
   as(url, {
     // lease_type:"periodic",
     lease_type: "Fixed",
     lease_catag: "New Lease",
     // lease_catag:"Takeover",
     weekly_rent_amount: "700",
     bond_amount: "5000",
     bond_reference: "98754",
     effective_paid_to_date: "14/01/21",
   });
 });
 
 it("Add new lease >> New Lease - Periodic - Weekly", () => {
   as(url, {
     // lease_type:"Fixed",
     lease_catag: "New Lease",
     // lease_catag:"Takeover",
     weekly_rent_amount: "1500",
     bond_amount: "5000",
     bond_reference: "98754",
     effective_paid_to_date: "14/01/21",
   });
 });
});

//const { describe } = require("mocha");
import { as } from "../page_functions/add_lease";
 
//Change the envirenment
let url = "https://andi-qa.different.com.au/properties/1167/leases";
//let url = "https://admin-tango.different.com.au//#/add-person";
//let url = "https://admin-tango.different.com.au//#/add-person";
 
describe("Different Test suite", () => {
 it("Add new lease >> Takeover - Periodic - Weekly", () => {
   as(url, {
     // lease_type:"periodic",
     lease_type: "Fixed",
     lease_catag: "New Lease",
     // lease_catag:"Takeover",
     weekly_rent_amount: "700",
     bond_amount: "5000",
     bond_reference: "98754",
     effective_paid_to_date: "14/01/21",
   });
 });
 
 it("Add new lease >> New Lease - Periodic - Weekly", () => {
   as(url, {
     // lease_type:"Fixed",
     lease_catag: "New Lease",
     // lease_catag:"Takeover",
     weekly_rent_amount: "1500",
     bond_amount: "5000",
     bond_reference: "98754",
     effective_paid_to_date: "14/01/21",
   });
 });
});

