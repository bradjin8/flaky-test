describe('Sign Up', () => {
  it('Adds person to course', () => {
    cy.visit('/')

    cy.window().clearLocalStorage();

    cy.get('input[name="name"]')
      .click()
      .type('Some Name')
      .should('have.value', 'Some Name')

    cy.get('input[name="email"]')
      .click()
      .type('some@email.com')

    cy.get('select[name="department"]')
      .select('core')
      .should('have.value', 'core')

    cy.get('select[name="course"]')
      .select('git-it')
      .should('have.value', 'git-it')

    cy.get('input[type="submit"]')
      .click()

    cy.get('input[type="submit"]')
      .its('value')
      .should('eq', 'Saved!')

    cy.get('li')
      .should(($lis) => {
        expect($lis.eq(0).to.contain('Some Name - some@email.com - core - git-it'))
      })
  })
})
