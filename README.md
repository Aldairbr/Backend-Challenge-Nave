<center> #### Teste desenvolvido para vaga de estágio backend da nave.rs. </center>

* [Clique Aqui](https://codesandbox.io/s/hjvbu) para ver a resolução dos exercicios de lógica propostos no teste.

## Passos para usar o sistema.

1. [Instalação](#instalacao)
  - Clone o projeto com o comando: **_"git clone https://github.com/Aldairbr/Backend-Challenge-Nave.git"_**.
  - Acesse a raiz do projeto e instale as dependências do mesmo com o comando: **_"yarn"_** OU **_"npm i"_**.

2. [Configuração](#Configuração)
  - Após ter as dependências instaladas, é necessário criar uma base de dados.
  - Renomeie o arquivo **_.env.Example_** localizado na raiz do projeto para **_.env_** e insira as credenciais da sua base de dados.
     _Exemplo:_
      _USER=postgres_
      _HOST=localhost_
      _DATABASE=navedex_
      _PASSWORD=123456_
      _PORT=3333_

  - Com a sua base de dados devidamente criada e configurada rode o comando:
                      **_"yarn knex:latest"_**
                               OU
                      **_"npm run knex:latest"_**
   para inserir as tabelas no banco criado.
   Se quiser popular o banco com alguns dados iniciais, rode o comando **_yarn seed:run_**.

3. [Inicialização](#Inicialização)
  - Com as tabelas criadas rode o comand **_"yarn dev"_** ou **_"npm run dev"_** para iniciar o sistema.

4. [Testes-de-rotas](#Testes-de-rotas)
  - Exportei um arquivo contendo o esquema de rotas para teste do insomnia. Importe esse aquivo no seu insomnia.
    Com excessão a rota de **LOGIN** e a rota **SIGNUP** cuja rota cadastra usuario, todas as outras estão protegidas
    com midleware de autenticação, dito isso cadastre um usuario e faça login com as credenciais cadastradas.
  - Copie o token gerado ao fazer o login e cole em _"BEARER TOKEN"_ de cada rota, ou então para evitar tanto trabalho
    Clique em _"No Environment"_ e depois em _Manage Environments_ e copie o token na propriedade _"token"_, logo abaixo de
    _"baseUrl"_

## **Dependências do projeto**

   * express: ^4.17.1
   * jsonwebtoken: ^8.5.1
   * knex: ^0.21.2
   * pg: ^8.3.0
   * yup: ^0.29.2
   * dotenv: ^8.2.0
   * bcrypt: ^5.0.0
