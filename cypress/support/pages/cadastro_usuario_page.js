/// <reference types = "cypress" />



//confirgurando passos para preenehcer página de Cadastro
export default {
    clicarCadastrar(){
        cy.get('#btnRegister')
            .click()
    },

// Configurando Função para validar mensagem de erro
    validarMensagemErroCadastro(mensagem){
        cy.get('#errorMessageFirstName')
            .should('have.text', mensagem)
            
    },

//Função pra preencher nome    
    preencheNome(nome){
        cy.get('#user')
            .type(nome)
    },


//Função pra preencher email 
    preencheEmail(email){
        cy.get('#email')
            .type(email)
    },

//Função para preencher senha
    preencheSenha(senha){
        cy.get('#password')
            .type(senha)
    },

    validarMensagemSucesso(mensagem){
        cy.get('.swal2-title')
            .then((texto) => {
                expect(texto).to.be.visible
                expect(texto.text()).eq(mensagem)
            })

    },

    validarMensagemBoasVindas(mensagem, nome){
        cy.get('.swal2-html-container')
            .then((texto) => {
                expect(texto).to.be.visible
                expect(texto.text()).eq(mensagem, nome)
            })
    }
    
}