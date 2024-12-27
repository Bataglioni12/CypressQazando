///<reference types="cypress"/>

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import home_page from '../pages/home_page'
import cadastro_usuario_page from '../pages/cadastro_usuario_page'

Given("eu estou na tela de registro", () => {
    home_page.acessarCadastro()
})

Given("preencho o campo nome", () => {
    cadastro_usuario_page.preencheNome("Gustavo")
})

Given("preencho o campo email", () => {
    cadastro_usuario_page.preencheEmail("bataglioni12@hotmail.com")
})

Given("preencho o campo senha", () => {
    cadastro_usuario_page.preencheSenha("Senha123")
})

Given("preencho o cadastro corretamente", () => {
    cadastro_usuario_page.preencheNome("Gustavo")
    cadastro_usuario_page.preencheEmail("bataglioni12@hotmail.com")
    cadastro_usuario_page.preencheSenha("Senha123")
})

When("clicar em Cadastrar", () => {
    cadastro_usuario_page.clicarCadastrar()
})

Then("eu vejo a mensagem {string} ", (mensagem) => {
    cadastro_usuario_page.validarMensagemErroCadastro(mensagem)
})

Then("eu vejo a mensagem de cadastro realizado", () => {
    cadastro_usuario_page.validarMensagemSucesso()
    cadastro_usuario_page.validarMensagemBoasVindas()
})





