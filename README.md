# Jobby Jobs

O projeto tem como propósito facilitar a busca e contratação por serviços/trabalhos informais residenciais, de uma maneira rápida, prática e eficaz.
Desenvolvido utilizando Java 8 + Spring Boot.

# Propostas futuras

  - Desenvolvimento de uma interface web e mobile para a aplicação
  - Implementação de um banco da dados

# Executando a aplicação
É necessário baixar o projeto e executar em sua IDE de preferencia utilizando Java 8
Executar a classe do projeto JobbyJobsApplication.java.
Acessar os end points do projeto.

End points da aplicação:
  - http://localhost:8080/contratantes
  - http://localhost:8080/contratantes/1
  - http://localhost:8080/contratantes
  - http://localhost:8080/contratantes/login
  - http://localhost:8080/contratantes/logoff
  - http://localhost:8080/contratantes/1
  - http://localhost:8080/trabalhadores
  - http://localhost:8080/trabalhadores/1
  - http://localhost:8080/trabalhadores/pintor
  - http://localhost:8080/trabalhadores/pedreiro
  - http://localhost:8080/trabalhadores/baba
  - http://localhost:8080/trabalhadores/login
  - http://localhost:8080/trabalhadores/logoff
  - http://localhost:8080/trabalhadores/1
  
Parâmetros enviados por json:
  >Exemplo de json enviado como corpo da requisição de cadastrar um novo contratante:
{
    "nome" : "matheus",
    "telefone" : "99090-9090",
    "CPF" : "999.999.999-99",
    "email" : "matheus@gmail.com",
    "senha" : "admin",
    "formaDePagamento" : "cartão de débito"
}


> Exemplo de json enviado como corpo da requisição de cadastrar um novo pintor:
{
    "nome" : "matheus",
    "telefone" : "99090-9090",
    "CPF" : "999.999.999-99",
    "email" : "matheus@gmail.com",
    "senha" : "admin",
    "cobrarPorHora": true,
    "valorFixo": 0.00 ,
    "valorHora": 10.00 ,
    "qtdHoras": 5.0, //double pois pode ser que sejam 5 horas e meia.
    "valorMetro": 8.00 ,
    "qtdMetros": 5.00 //double pois pode ser que sejam 5 metros e meio.
}

>Exemplo de json enviado como corpo da requisição de cadastrar uma nova babá:
{
    "nome" : "matheus",
    "telefone" : "99090-9090",
    "CPF" : "999.999.999-99",
    "email" : "matheus@gmail.com",
    "senha" : "admin",
    "cobrarPorHora": true,
    "valorFixo": 0.00 ,
    "valorHora": 10.00 ,
    "qtdHoras": 5.0,
    "qtdCriancas" : 2,
    "idadeMedia" : 2,
    "precoCozinheira" : 100.00,
    "precoLimpeza" : 100.00,
    "cozinhar" : true,
    "limpar": true,
    "precoAteTres": 10.00,
    "precoTresAteOito": 10.00,
    "precoNoveAteQuinze": 10.00
}

>Exemplo de texto enviado para realizar o logoff:
matheus@gmail.com