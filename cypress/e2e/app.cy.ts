describe('Navigation', () => {
    it('should navigate to the about page', () => {

      cy.visit('http://localhost:3000/')
   
      cy.get('a[href*="page-about"]').click()
   
      cy.url().should('include', 'page-about')

      cy.get('h1').contains('About')
    })
    it('should navigate to the contact page', () => {

      cy.visit('http://localhost:3000/')

      cy.get('a[href*="page-contact"]').click()

      cy.url().should('include', 'pagecontact')

      cy.get('h1').contains('Contact')
    })
})