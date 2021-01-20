import {add} from "../page-functions/calc.page";

define('test', () => {
  it('can add positive numbers', () => {
    add(1, 2);
    e('output').should('have.text', '3');
  });

  it('can add negative numbers', () => {
    add(-1, -2);
    e('output').should('have.text', '-3');
  });

  it('can add large numbers', () => {
    add(1000000, 1);
    e('output').should('have.text', '1000001');
  });
});