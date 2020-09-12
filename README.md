# Backend-Challenge-Nave
#### Teste de backend da nave.

## Passos para usar o sistema.
Instale as dependências do projeto com o comando **Yarn**
Após ter as dependências instaladas, vá até o pgadmin e crie um database.
No arquivo **.env.Example**, localizado na raiz do projeto, o renomeie para ".env"
e, também, modifique o **PASSWORD** e o **DATABASE** com suas credenciais.
Com a a database criada vá até **src/Database/migrations**
e rode o comando **yarn knex migrate:latest** para inserir tabelas
no banco criado.
Se quiser popular o banco com alguns dados iniciais, vá até **src/Database/seeds** e
rode o comando **yarn knex seed:run**.

Com as tabelas criadas vá até a raiz do projeto e rode o comando
**yarn dev** para iniciar o sistema

## **Dependências do projeto**

   * express: ^4.17.1
   * jsonwebtoken: ^8.5.1
   * knex: ^0.21.2
   * pg: ^8.3.0
   * yup: ^0.29.2
   * dotenv: ^8.2.0
   * bcrypt: ^5.0.0

## **Dificuldades

Ao longo do desenvolvimento dessa API, encontrei diversas dificuldades,
mas grande parte delas foram solucionadas, outras ainda vou pesquisar mais
para soluciona-las, mesmo após a entrega do teste.
Contudo, acredito que a API esteja funcional.
