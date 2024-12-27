/// <reference types = "cypress" />

import commum_page from '../support/pages/commum_page'
import cadastro_page from '../support/pages/cadastro_usuario_page'


describe('Cadastro de Usuário', () => {

    beforeEach('Acessar Cadastro de Usuário', () => {
        commum_page.acessarCadastroUsuario()

    })

    it('Campo Nome Vazio', () => {

        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo nome deve ser prenchido')

    })

    it('Campo Email Vazio', () => {

        cadastro_page.preencheNome('Gustavo Bataglioni')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')

    })

    it('Campo Email Inválido', () => {

        cadastro_page.preencheNome('Gustavo Bataglioni')
        cadastro_page.preencheEmail('Email Inválido')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo e-mail deve ser prenchido corretamente')

    })

    it('Campo Senha Vazio', () => {

        cadastro_page.preencheNome('Gustavo Bataglioni')
        cadastro_page.preencheEmail('bataglioni12@hotmail.com')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')

    })

    it('Campo Senha Inválido', () => {

        cadastro_page.preencheNome('Gustavo Bataglioni')
        cadastro_page.preencheEmail('bataglioni12@hotmail.com')
        cadastro_page.preencheSenha('Senha')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemErro('O campo senha deve ter pelo menos 6 dígitos')

    })

    it('Cadastro com Sucesso', () => {

        const nome = 'Gustavo Bataglioni'

        cadastro_page.preencheNome(nome)
        cadastro_page.preencheEmail('bataglioni12@hotmail.com')
        cadastro_page.preencheSenha('Senha123')
        cadastro_page.clicarCadastrar()
        cadastro_page.validarMensagemSucesso('Cadastro realizado!')
        cadastro_page.validarMensagemBoasVindas('Bem-vindo ' + nome)

    })

})