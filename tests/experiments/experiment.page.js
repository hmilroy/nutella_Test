// use this to temporarily map a name to a selector until the data-test
// attribute can be set (e.g. <input data-test="supplier_name" />)
// once the HTML is updated, remove this entry
map({
  supplier_name: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div:nth-child(1) > input",
  add_person_button: "#differentApp > div > div.row.bordered-header > div.icon-bar.col-xs-3.row.end-xs > a:nth-child(3) > div",
  supplier_name: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div:nth-child(1) > input",
  billing_name: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div > input",
  billing_email: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div:nth-child(3) > div:nth-child(2) > div > input",
  billing_address: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div:nth-child(3) > div:nth-child(3) > div > input",
  billing_phone: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div:nth-child(3) > div:nth-child(4) > div > div > div > div:nth-child(2) > ul > li:nth-child(2) > input",
  same_as_billing_contact_tickbox: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div:nth-child(4) > div > p > input[type=checkbox]",
  service_name: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div:nth-child(5) > div:nth-child(1) > div > input",
  service_email: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div:nth-child(5) > div:nth-child(2) > div > input",
  service_address: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div:nth-child(5) > div:nth-child(3) > div > input",
  service_phone: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div:nth-child(5) > div:nth-child(4) > div > div > div > div:nth-child(2) > ul > li:nth-child(2) > input",
  website: "#differentApp > div > div.content-dock > div > div > form > div.inner-form > div:nth-child(1) > div:nth-child(7) > input",
  advisory: "input[name = Advisory]"
});

// page function
export const addSupplier = ({
  supplierName,
  billingName,
  billingEmail,
  billingAddress,
  billingPhone,
  serviceName,
  serviceEmail,
  serviceAddress,
  servicePhone,
  website,
  advisory,
  calloutFee,
  emergencyCallFee,
  notes,
  abn,
  bsb,
  accountNo,
  accountHolder
}) => {
  visit('/#/add-person');
  type('supplier_name', supplierName);
  type('billing_name', billingName);
  type('billing_email', billingEmail);
  click('save_button');
};
