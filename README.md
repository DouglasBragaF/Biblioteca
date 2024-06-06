# Sistema de Biblioteca - Projeto de Exemplo

O sistema permite o cadastro, exclusão e consulta de livros e leitores, bem como o registro de empréstimos de livros, incluindo data de empréstimo, prazo de devolução e status de entrega.

## Funcionalidades do Sistema:

- **Cadastro de Livros**: Permite adicionar novos livros ao acervo da biblioteca, incluindo informações como nome, autores, editora, ano de publicação e categoria.

- **Cadastro de Leitores**: Permite registrar novos leitores na biblioteca, com informações como nome, e-mail, telefone e endereço.

- **Consulta de Livros**: Permite visualizar a lista de livros disponíveis na biblioteca, bem como detalhes individuais de cada livro.

- **Consulta de Leitores**: Permite visualizar a lista de leitores cadastrados na biblioteca, bem como detalhes individuais de cada leitor.

- **Registro de Empréstimo**: Permite registrar o empréstimo de um livro para um leitor, incluindo a data de empréstimo e o prazo de devolução. Também é possível marcar o empréstimo como entregue após a devolução do livro.

## Bibliotecas Utilizadas:

- **Axios**: Utilizado para fazer requisições HTTP a uma API REST simulada pelo JSON Server.
- **JSON Server**: Utilizado para simular uma API REST localmente a partir de um arquivo JSON, que contém os dados do sistema.

## Instruções para Executar o Projeto:

1. **Clonar o Repositório:**

    ```bash
    git clone https://github.com/seu-usuario/nome-do-repositorio.git


2. **Instalar as Dependências:**
  Certifique-se de ter o Node.js e o npm instalados em sua máquina. Navegue até o diretório do projeto clonado e execute o seguinte comando:

    ```bash
    npm install


3. **Iniciar o Json Server:**
  O JSON Server será usado para simular uma API REST localmente. No terminal, execute o seguinte comando na raiz do projeto:

    ```bash
    npx json-server db.json


4. **Iniciar o Aplicativo React:**
  No terminal, execute o seguinte comando na raiz do projeto:

    ```bash
    npm run dev
