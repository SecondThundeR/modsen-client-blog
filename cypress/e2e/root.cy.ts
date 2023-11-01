describe("Root page", () => {
  it("should navigate to the root page", () => {
    cy.visit("/");
    cy.get("h1").contains("Hello, world!");
    cy.get("button").contains("Button");
  });

  it("should navigate to the root page (russian language)", () => {
    cy.visit("/ru");
    cy.get("h1").contains("Привет, мир!");
    cy.get("button").contains("Кнопка");
  });
});
