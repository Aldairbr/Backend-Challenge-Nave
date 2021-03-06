#### Teste desenvolvido para vaga de estágio backend da nave.rs.

* [Clique Aqui](https://codesandbox.io/s/hjvbu) para ver as resoluções dos exercicios de lógica propostos no teste.

## Passos para usar o sistema.

[Instalação](#instalacao)
1. clone o projeto com o comando **_git clone https://github.com/Aldairbr/Backend-Challenge-Nave.git_**.
2. Acesse a raiz do projeto e instale as dependências do mesmo com o comando **_yarn ou npm i_**.

[Configurações](#Configurações)
1. Após ter as dependências instaladas, é necessário criar uma base de dados. 
2. Renomeie o arquivo **_.env.Example_** localizado na raiz do projeto para **_.env_** e coloque as configurações da sua base de dados
  _Exemplo:_ 
    _USER=postgres_
    _HOST=localhost_
    _DATABASE=navedex_
    _PASSWORD=123456_
    _PORT=3333_

3. Com a sua base de dados devidamente criada e configurada rode o comando: 
                      **_yarn knex:latest_** 
                               OU 
                      **_npm run knex:latest_** 
   para inserir as tabelas no banco criado.
   Se quiser popular o banco com alguns dados iniciais, rode o comando **_yarn seed:run_**.
   
[Inicialização](#Inicialização)
Com as tabelas criadas rode o comand **_yarn dev_** ou **_npm run dev_** para iniciar o sistema

## **Dependências do projeto**

   * express: ^4.17.1
   * jsonwebtoken: ^8.5.1
   * knex: ^0.21.2
   * pg: ^8.3.0
   * yup: ^0.29.2
   * dotenv: ^8.2.0
   * bcrypt: ^5.0.0
