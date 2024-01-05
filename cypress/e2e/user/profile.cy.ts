describe('User Profile', () => {
  beforeEach(() => {
    cy.loginAsAdmin();
  });

  it('opens user profile page from the home page', () => {
    cy.visit('/');

    cy.get('[data-testid=user-menu]').click();
    cy.get('[data-testid=user-menu-profile]').click();

    cy.get('h1').should('contain', Cypress.env('ADMIN_EMAIL'));
  });
});
