# Nutella

Nutella is the code name for :Different's front-end test automation framework built on top of [cypress.io](https://example.cypress.io/). The goal of Nutella is to provide QA engineers a test script writing experience that is as close to writing English as possible.

# Getting started

Install the scripts locally:

```
$ git clone git@github.com:DifferentTech/nutella.git
$ cd nutella
$ npm install
```

First, start the sample app (it will be served at http://localhost:8080):

```
npm run server
```

Then, on a separate terminal, start the cypress test runner:

```
npm start
```

In the test runner window, click on a sample test (e.g `index.spec.js`) to run it.

```javascript
// tests/index.spec.js

define('sample', () => {
  it('visits sample app', () => {
    visit('http://localhost:8080');
    type('sample-input', 'hello');
    click('sample-button');
    contains('sample-output', 'hello');
  });
});
```

Here the sample app HTML looks like this:

```html
  <!-- sample-app/index.html -->
  <input type="text" data-test="sample-input" placeholder="Sample Input" />
  <button data-test="sample-button">Sample Button</button>
  <div data-test="sample-output">Sample output</div>
```



