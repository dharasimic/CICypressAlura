Cypress.Commands.add('login', (email, senha) => {
    cy.session([email, senha], () => {
        cy.visit('/login')
        cy.get('[data-test="inputLoginEmail"]').type(email)
        cy.get('[data-test="inputLoginSenha"]').type(senha, { log: false })
        cy.get('[data-test="botaoTeste"]').should('be.visible').click()
        cy.location('pathname').should('equal', '/dashboard')
    })
})