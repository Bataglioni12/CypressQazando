Feature: Cadastro de Usuário
    Eu como cliente
    Desejo me Cadastrar na aplicação
    Para fazer pedidos de compra

    Background: Acessa Tela de Cadastro
        Given eu estou na tela de registro

    Scenario: Campo Nome Vazio
        When clicar em Cadastrar
        Then eu vejo a mensagem "O campo nome deve ser prenchido"
    
    Scenario: Campo E-mail Vazio        
        And preencho o campo nome 
        When clicar em Cadastrar
        Then eu vejo a mensagem "O campo e-mail deve ser prenchido corretamente"

    Scenario: Campo E-mail inválido        
        And preencho o campo nome 
        And preencho o campo email 
        When clicar em Cadastrar
        Then eu vejo a mensagem "O campo e-mail deve ser prenchido corretamente"

    Scenario: Campo Senha Vazio        
        And preencho o campo nome 
        And preencho o campo email 
        When clicar em Cadastrar
        Then eu vejo a mensagem "O campo senha deve ter pelo menos 6 dígitos"

    Scenario: Campo Senha inválido        
        And preencho o campo nome 
        And preencho o campo email 
        And preencho o campo senha 
        When clicar em Cadastrar
        Then eu vejo a mensagem "O campo senha deve ter pelo menos 6 dígitos"

    Scenario: Cadastro Realizado Com Sucesso        
        And preencho o cadastro corretamente "Gustavo", "Bataglioni12@hotmail.com", "Senha123"
        When clicar em Cadastrar
        Then eu vejo a mensagem de cadastro realizado


