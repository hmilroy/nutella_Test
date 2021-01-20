const map = {
  lease_document: "[id='upload-lease-document'] > button > input[type=file]",
  tenant_Application:
    "[id='upload-tenant-application'] > button > input[type=file]",
  prior_tenent_ledger:
    "[id='create-lease-modal-content'] > div > div > div > div > :nth-child(3) >" +
    " div > button > input[type=file]",
  bond_transfer_document:
    "[id='create-lease-modal-content'] > div > div > div > div > :nth-child(4) >" +
    " div > button > input[type=file]",
  fixed:"#create-lease-modal-content > div.create-lease__content > div > div.lease-details-form__content > div:nth-child(1) > div.wtml-radio-button-list > div:nth-child(1) > div > label > div.wtml-radio-button__icon",
  periodic:"#create-lease-modal-content > div.create-lease__content > div > div.lease-details-form__content > div:nth-child(1) > div.wtml-radio-button-list > div:nth-child(2) > div > label > div.wtml-radio-button__icon",
  weekly_rent_amount:"#create-lease-modal-content > div.create-lease__content > div > div.lease-details-form__content > div:nth-child(2) > div.lease-details-form__week-rent > div.wtml-textbox__wrapper > div.wtml-textbox.wtml-textbox--small > input",
  payment_frequency: "#create-lease-modal-content > div.create-lease__content > div > div.lease-details-form__content > div:nth-child(3) > div.wtml-drop-down.wtml-drop-down--large > button",
  payment_method:
    "#create-lease-modal-content > div.create-lease__content > div > div.lease-details-form__content > div:nth-child(5) > div.wtml-drop-down.wtml-drop-down--large > button",
  effective_paid_to_date:
    "#create-lease-modal-content > div.create-lease__content > div > div.lease-details-form__content > div:nth-child(5) > div.lease-details-form__paid-to-date > div.wtml-date-picker.lease-details-form__date-picker > div.wtml-date-picker__main > input",

  original_lease_start_date:
    "#create-lease-modal-content > div.create-lease__content > div > div.lease-details-form__content > div:nth-child(6) > div.wtml-date-picker.lease-details-form__date-picker.start > div.wtml-date-picker__main > input",
  lease_end_date:
    "#create-lease-modal-content > div.create-lease__content > div > div.lease-details-form__content > div:nth-child(7) > div.wtml-date-picker.lease-details-form__date-picker.end > div.wtml-date-picker__main > input",
  bond_amount: "#bond-amount > div.wtml-textbox.wtml-textbox--small > input",
  bond_reference: "#bond-reference > div > input",
  lease_catagory:
    "#create-lease-modal-content > div.create-lease__content > div > div.takeover-or-new-lease-form__content > div.takeover-or-new-lease-form__container > div.wtml-drop-down.wtml-drop-down--large > button > span",
};

export function as(url, lease_details) {
  cy.visit("https://admin-qa.different.com.au/#/");
   cy.wait(4000);
  cy.visit(url);
  cy.wait(2000);
  cy.reload();
  cy.get("#different-andi > div:nth-child(3) > div > div > button").click();
  cy.contains("Add a lease", { timeout: 10000 }).click();
  cy.wait(2000);

  const fileFixturePath = "../../cypress/fixtures/Test_PDF_doc.pdf";

  if (lease_details.lease_catag == "New Lease") {
    cy.get("[id='create-lease-modal-content'] > :nth-child(2) > div > :nth-child(1) > :nth-child(2) > :nth-child(1) > button").click();
    cy.contains("New Lease", { timeout: 10000 }).click();
    cy.contains("Next", { timeout: 10000 }).click();
    cy.get(map.lease_document).attachFile(fileFixturePath);
    cy.get(map.tenant_Application).attachFile(fileFixturePath);
    cy.wait(5000);
    cy.contains("Next", { timeout: 10000 }).click();
    cy.get("#create-lease-modal-content > div.create-lease__content > div > div.lease-details-form__content > div:nth-child(1) > div.lease-details-form__week-rent > div.wtml-textbox__wrapper > div.wtml-textbox.wtml-textbox--small > input").type(lease_details.weekly_rent_amount);
    cy.get("#create-lease-modal-content > div.create-lease__content > div > div.lease-details-form__content > div:nth-child(4) > div.lease-details-form__paid-to-date > div.wtml-date-picker.lease-details-form__date-picker > div.wtml-date-picker__main > input").type("14/01/21{enter}");
    cy.get("#create-lease-modal-content > div.create-lease__content > div > div.lease-details-form__content > div:nth-child(5) > div.wtml-date-picker.lease-details-form__date-picker.start > div.wtml-date-picker__main > input").type("01/01/21{enter}");
    cy.get("[id='create-lease-modal-content'] > :nth-child(2) > div > :nth-child(1) > :nth-child(2) > :nth-child(2) > button").click();
    cy.contains("Monthly", { timeout: 10000 }).click();
    cy.wait(2000);
    cy.get("#create-lease-modal-content > div.create-lease__content > div > div.lease-details-form__content > div:nth-child(4) > div.wtml-drop-down.wtml-drop-down--large > button").type("{enter}");
    cy.wait(5000);
    cy.contains("Next", { timeout: 10000 }).click();
    cy.wait(2000);
    cy.contains("Next", { timeout: 10000 }).click();
    cy.contains("Confirm & create lease", { timeout: 10000 }).click();
    cy.wait(5000);
    cy.contains("Done", { timeout: 10000 }).click();
  } 
  
  else 
  {
    cy.contains("Next").click();
    cy.get(map.lease_document).attachFile(fileFixturePath);
    cy.get(map.tenant_Application).attachFile(fileFixturePath);
    cy.get(map.prior_tenent_ledger).attachFile(fileFixturePath);
    cy.get(map.bond_transfer_document).attachFile(fileFixturePath);
    cy.wait(15000);
    cy.contains("Next", { timeout: 10000 }).click();
    cy.wait(2000);

    if (lease_details.lease_type == "Fixed") {
      cy.get(map.fixed).click();
      cy.get(map.lease_end_date).type("01/12/22{enter}");
    } 
    else 
    {
      cy.get(map.periodic).click();
    }
    cy.wait(2000);
    cy.get(map.weekly_rent_amount).type(lease_details.weekly_rent_amount);
    cy.get(map.effective_paid_to_date).type("14/01/21{enter}");
    cy.get(map.original_lease_start_date).type("01/01/21{enter}");
    cy.get(map.bond_amount).type(lease_details.bond_amount);
    cy.get(map.bond_reference).type(lease_details.bond_reference);
    cy.get(map.payment_frequency).type("{enter}");
    cy.get(map.payment_method).type("{enter}");
  }

  cy.wait(2000);
  cy.contains("Next", { timeout: 10000 }).click();
  cy.contains("Confirm & create lease", { timeout: 10000 }).click();
  cy.wait(3000);
}
