/// <reference types = "cypress" />


//confirgurando passos para acessar página de Cadastro
export default {
    acessarCadastroUsuario() {
        cy.visit('/')
            .get('#top_header')

        cy.get('.fa-lock')
            .click()
    }
}