describe('Grabbing data about PS5', () => {
  it('get availability', () => {

    cy.visit('https://www.public-cyprus.com.cy/product/gaming/consoles/ps5/sony-playstation-5-konsola-leyko/prod10238545pp/')

    cy.get('#CybotCookiebotDialogBodyLevelButtonLevelOptinAllowAll')
      .click()

    cy.get('.extra-product-delivery > .btn > .text')
      .should('have.contain', 'εξαντλήθηκε!')
      .should('have.not.contain', 'Τελευταία τεμάχια!')
      .should('have.not.contain', 'διαθέσιμο')
  })
})
