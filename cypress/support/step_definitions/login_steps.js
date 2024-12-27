///<reference types="cypress"/>

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import home_page from '../pages/home_page'
import login_page from '../pages/login_page'

Given("eu estou na tela de login", () => {
    home_page.acessarLogin()
})

Given("preencho o campo e-mail", () => {
    login_page.preencherEmail("bataglioni12@hotmail.com")
})

Given("preencho minhas credenciais", () => {
    login_page.preencherEmail("bataglioni12@hotmail.com")
    login_page.preencherSenha("Senha123")
})

When("eu clicar em login", () => {
    login_page.clicarLogin()
})

Then("eu vejo a mensagem {string}", (mensagem) => {
    login_page.validarMensagemErro(mensagem)
})

Then("eu vejo a mensgem de login com sucesso", () => {
    login_page.validarMensagemSucesso()
})

