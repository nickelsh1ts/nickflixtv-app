describe('Login Page', () => {
  it('succesfully logs in as an admin', () => {
    cy.loginAsAdmin();
    cy.visit('/');
    cy.contains('');
  });

  it('succesfully logs in as a local user', () => {
    cy.loginAsUser();
    cy.visit('/');
    cy.contains('');
  });
});
