# Backend-Challenge-Nave
#### Teste de backend da nave.

###(EM DESENVOLVIMENTO)
## Passos para usar o sistema.
Instale as dependências do projeto com o comando **Yarn** 
Após ter as dependências instaladas, vá até o pgadmin e crie um database.
No arquivo **knexfile.js**, localizado na raiz do projeto
modifique o **password** e o **database** com suas credenciais.
Após ter criado o database vá até **src/Database/migrations**
e rode o comando **yarn knex migrate:latest** para inserir tabelas
no banco criado.
Se quiser popular o banco, vá até **src/Database/seeds** e
rode o comando **yarn knex seed:run**.

Com as tabelas criadas vá até a raiz do projeto e rode o comando
**yarn dev** para iniciar o sistema

## **Dependências do projeto**

   * express: ^4.17.1
   * jsonwebtoken: ^8.5.1
   * knex: ^0.21.2
   * pg: ^8.3.0
   * yup: ^0.29.2
