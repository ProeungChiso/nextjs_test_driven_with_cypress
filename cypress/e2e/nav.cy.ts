describe("Navigation", () => {
  it("should navigate to the about page", () => {
    cy.visit("http://localhost:3000/");
    cy.get('a[href*="page-about"]').click();
    cy.url().should("include", "page-about");
    cy.get("h1").contains("About");
  });
  it("should navigate to the contact page", () => {
    cy.visit("http://localhost:3000/");
    cy.get('a[href*="page-contact"]').click();
    cy.url().should("include", "page-contact");
    cy.get("h1").contains("Contact");
  });
  it("should navigate to the pricing page", () => {
      cy.visit("http://localhost:3000/");
      cy.get('a[href*="page-pricing"]').click();
      cy.url().should("include", "page-pricing");
      cy.get("h1").contains("Pricing");
  });
  it("should navigate to the service page", ()=>{
    cy.visit("http://localhost:3000/");
    cy.get('a[href*="page-service"]').click();
    cy.url().should("include", "page-service");
    cy.get("h3").contains("Service");
  }); 
});
