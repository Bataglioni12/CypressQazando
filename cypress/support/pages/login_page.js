///<reference types="cypress"/>


export default{

    preencherEmail(email) {
        cy.get("#user")
            .type(email)
    },

    preencherSenha(senha) {
        cy.get("#password")
            .type(senha)
    },

    clicarLogin() {
        cy.get("#btnLogin")
            .click()
    },

    validarMensagemErro(mensagem){
        cy.get(".invalid_input")
            .should('have.text', mensagem)
    },

    validarMensagemSucesso(mensagem){
        cy.get("#swal2-title")
            .should('be.visible')
            .should('have.text', "Login realizado")
    },


}