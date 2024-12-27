Feature: Login
    Eu como usuário
    Quero fazer login na aplicação
    Para fazer um pedido de compra

    Scenario: Login com campo e-mail vazio
        Given eu estou na tela de login
        When eu clicar em login
        Then eu vejo a mensagem "E-mail inválido."

    Scenario: Login com campo senha vazio
        Given eu estou na tela de login
        And preencho o campo e-mail
        When eu clicar em login
        Then eu vejo a mensagem "Senha inválida."
 
    Scenario: Login com sucesso
        Given eu estou na tela de login
        And preencho minhas credenciais
        When eu clicar em login
        Then eu vejo a mensgem de login com sucesso