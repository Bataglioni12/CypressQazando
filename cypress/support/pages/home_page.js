///<reference types="cypress"/>


export default{
    acessarLogin() {
        cy.visit("/")
            .get("#top_header")

            cy.get(".fa-user")
                .click()
    },

    acessarCadastro() {
        cy.visit("/")
            .get("#top_header")

            cy.get(".fa-lock")
                .click()
    }
}