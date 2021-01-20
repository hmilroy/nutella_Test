// andi/tests/add-supplier.js

import {
  addSupplier,
} from '../andi/pages/add-supplier';

// test data
const supplier = {
  supplierName: 'test',
  billinName:'test'
};

// don't hard code environment. get this from an env variable
setBaseUrl('https://andi-qa.different.com.au');

describe('...', () => {
  it('should show newly added supplier', () => {
    addSupplier(supplier); // use page function
    // rest of the test case
    
  });
});