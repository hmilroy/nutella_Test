window.e = (name) => {
  return cy.get(`[data-test="${name}"]`);
};

window.click = (name) => {
  return e(name).click();
}

window.visit = (url) => {
  return cy.visit(url);
}

window.type = (name, text) => {
  return e(name).type(text);
}

window.contains= (name, text) => {
  return e(name).contains(text);
}