define('test', () => {
  it('visits sample app', () => {
    visit('http://localhost:8080');
    type('sample-input', 'hello');
    click('sample-button');
    contains('sample-output', 'hello');
  });
});