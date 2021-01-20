// TESTING FILE UPLOAD ON file-upload.html

define("test", () => {
  it('file-upload', () => {
    visit('http://localhost:8080/file-upload');
    // Testing file should be in cypress/fixtures/ directory
    const fileFixturePath = '../../cypress/fixtures/sample-file-upload.txt';
    e('sample-file-input').attachFile(fileFixturePath);
    click('sample-button');
  });
});