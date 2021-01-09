describe("Different Test suite", () => {
    it("Visit Different Andi", () => {
      cy.visit("https://admin-qa.different.com.au/#/");
      cy.wait(5000);
      cy.visit("https://andi-qa.different.com.au/properties/1167/leases");
      
      cy.contains('Add a lease',{timeout:10000}).click();
    
      cy.get("[class='wtml-button wtml-button--bright-blue wtml-button--medium']",{timeout:10000}).click();

 //  cy.get("[id='upload-tenant-application']").click();

cy.contains('Upload lease document').dblclick();

cy.wait(5000);

    //  // it('upload File', function (){
    //     const filePath = 'image01.jpg';
    //     cy.get("[class='wtml-clickable wtml-upload__content']").attachFile(filePath);

    //   });
     



    });
});
