
 /// <reference types="cypress" />
 const map = {addpersonbutton: "#differentApp > div > div.row.bordered-header > div.icon-bar.col-xs-3.row.end-xs > a:nth-child(3) > div",
  suppliername: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div:nth-child(1) > input",
  billing_name: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div > input",  
  billing_email: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div > input",
  billing_address: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div > input",
  billing_phone: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div:nth-child(3) > div:nth-child(4) > div > div > div > div:nth-child(2) > ul > li:nth-child(2) > input",
  same_as_billing_contact_racticbox:"#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div:nth-child(4) > div > p > input[type=checkbox]",
  service_name: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div > input",
  service_email: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div > input",
  service_address:  "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div:nth-child(5) > div:nth-child(3) > div > input",
  service_phone: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > div > div > div > div:nth-child(2) > ul > li:nth-child(2) > input",
  website:  "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div:nth-child(7) > input",
  advisory:"input[name = Advisory]",
  building_manager: "input[name = 'Building Manager']",
  council: "input[name = Council]",
  insurance: "input[name = Insurance]",
  ac:"input[name = AC]",
  appliance_installs: "input[name = 'Appliance Installs']",
  appliance_repairs:"input[name = 'Appliance Repairs']",
  blinds: "input[name = Blinds]",
  builder: "input[name = Builder]",
  cleaners:  "input[name = Cleaners]",
  electrical:"input[name = Electrical]",
  fence: "input[name = Fence]",
  flooring:"input[name = Flooring]",
  garage_door:"input[name = 'Garage Door']",
  glazier:  "input[name = Glazier]",
  handyman: "input[name = Handyman]",
  heating: "input[name = Heating]",
  hot_water: "input[name = 'Hot Water']",
  locksmith: "input[name = Locksmith]",
  mould:"input[name = Mould]",
  painting:"input[name = Painting]",
  pest_control:"input[name = 'Pest Control']",
  plumbing: "input[name = Plumbing]",
  pool: "input[name = Pool]",
  removalist:"input[name = Removalist]",
  security: "input[name = Security]",
  smoke_alarms:"input[name = 'Smoke Alarms']",
  solar_panels: "input[name = 'Solar Panels']",
  marketing: "input[name = Marketing]",
  strata:"input[name = Strata]",
  tribunal: "input[name = Tribunal]",
  water: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div.business-category-multi-select > div:nth-child(2) > div > div:nth-child(9) > div.level-1-categories > input[type=checkbox]",
  nsw: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div.service-zone-multi-select > div > div > div > div:nth-child(1) > div:nth-child(1) > input[type=checkbox]",
  vic: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div.service-zone-multi-select > div > div > div > div:nth-child(2) > div:nth-child(1) > input[type=checkbox]",
  qld: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div.service-zone-multi-select > div > div > div > div:nth-child(3) > div:nth-child(1) > input[type=checkbox]",
  is_good_for_urgent_requests: "input[name = isGoodForUrgentRequests]",
  is_available_on_weekends: "input[name = isAvailableOnWeekends]",
  is_available_out_side_normal_hours: "input[name = isAvailableOutsideNormalHours]",
  callout_fee: ".contact-sub-form input[name='callOutfee']",
  emergehcy_call_fee: ".contact-sub-form input[name='emergencyCallOutfee']",
  notes: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div:nth-child(14) > div:nth-child(4) > div > textarea",
  abn: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div:nth-child(16) > input",
  bsb: "#bsb",
  account_no: "#accountNumber",
  account_holder: "#accountHolderName",
  upload: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div:nth-child(22) > div > div > div > div",
  save_button:"#differentApp > div > div.content-dock > div > div > form > div.inner-form > div.person-role-form > div > button.button.button_main",
  
  };

export function as(url, supplier) {
    cy.visit(url);
    cy.title().should("eq", "Different Admin");
    cy.location("protocol").should("eq", "https:");
    cy.hash().should("include", "#/add-person");
    cy.contains("Address", { timeout: 10000 }).should("be.visible");
    cy.wait(2000);
    cy.get(map.suppliername).type(supplier.suppliername);
    cy.get(map.billing_name).type(supplier.billing_name);
    cy.get(map.billing_email).type(supplier.billing_email);
    cy.get(map.billing_address).type(supplier.billing_address);
    cy.get(map.billing_phone).type(supplier.billing_phone);
    cy.get(map.service_name).type(supplier.service_name);
    cy.get(map.service_email).type(supplier.service_email);
    cy.get(map.service_address).type(supplier.service_address);
    cy.get(map.service_phone).type(supplier.service_phone);
    cy.get(map.website).type(supplier.website);
   // cy.get(map.advisory).check({ force: true });
      cy.get(map.advisory).check().should('be.checked').and('have.value','on');
      cy.get(map.advisory).uncheck().should('not.be.checked');
      cy.get(map.advisory).check().should('be.checked').and('have.value','on');

    cy.get(map.callout_fee).type(supplier.callout_fee);
    cy.get(map.emergehcy_call_fee).type(supplier.emergehcy_call_fee);
    cy.get(map.notes).type(supplier.notes);
    cy.get(map.abn).type(supplier.abn);
    cy.get(map.bsb).type(supplier.bsb);
    cy.get(map.account_no).type(supplier.account_no);
    cy.get(map.account_holder).type(supplier.account_holder);
    cy.get(map.save_button).click();
    cy.wait(3000);
  

   // return "value";
}