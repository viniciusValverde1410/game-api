# API de Jogos 🎮

Este é um projeto de uma API desenvolvida em Node.js utilizando o framework Express. O objetivo da API é gerenciar informações sobre jogos, permitindo operações de CRUD (Create, Read, Update, Delete).

## Funcionalidades

- **Mensagem de boas-vindas**: Retorna uma mensagem inicial para os usuários.
- **Listar todos os jogos**: Retorna uma lista com todos os jogos cadastrados.
- **Listar jogo por ID**: Retorna os detalhes de um jogo específico com base no ID.
- **Criar um novo jogo**: Permite adicionar um novo jogo ao sistema.
- **Atualizar um jogo**: Permite atualizar as informações de um jogo existente.
- **Deletar um jogo**: Remove um jogo do sistema.

## Endpoints

### 1. Mensagem de boas-vindas
- **GET /**  
  Retorna uma mensagem de boas-vindas.

### 2. Listar todos os jogos
- **GET /listarJogos**  
  Retorna uma lista com todos os jogos cadastrados.

### 3. Listar jogo por ID
- **GET /listarJogos/:id**  
  Retorna os detalhes de um jogo específico com base no ID.

### 4. Criar um novo jogo
- **POST /**  
  Adiciona um novo jogo ao sistema.  
  **Body (JSON):**
  ```json
  {
    "title": "Nome do Jogo",
    "console": "Console do Jogo"
  }

### 5. Atualizar um jogo
- **PUT /:id**  
  Atualiza um jogo existente no sistema.  
  **Body (JSON):**
  ```json
  {
    "title": "Novo Nome do Jogo",
    "console": "Novo Console do Jogo"
  }

### 6. Deletar um jogo
- **DELETE /:id**  
  Remove um jogo existente no sistema.
