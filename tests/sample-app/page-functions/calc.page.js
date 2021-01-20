export function add(a, b) {
  visit('http://localhost:8080/calc');
  type('left', a);
  type('right', b);
  click('equals');
}
