# Testes E2E

## Sobre o projeto

## Aprendizados

### Aula 01 

- Iniciar um novo projeto usando o NodeJS, através do comando npm init, inicializando o arquivo `package.json`;

- Criar um novo arquivo de teste, com extensão `.spec.js` dentro da pasta integration e utilizar o comando describe para descrever a suíte de testes;

- Usar a função `beforEach` e o comando `cy.visit()`, para indicar a URL que será carregada antes de cada novo caso de teste;

- Criar um novo caso de teste utilizando a função `it` e utilizar os recursos `cy.get()`, bem como as opção `.type`, `.click` e `.should` para fazer os assertions;

- Usar o Selector Playground do Cypress para identificar o nome do elemento;

- Usar as ferramentas de desenvolvedor para melhor identificar os elementos HTML da página.

### Aula 02

- Criar uma nova suíte de testes;

- Utilizar com mais detalhes as ferramentas de desenvolvedor (DevTools) do navegador para explorar e identificar os elementos com que o Cypress irá interagir;

- Utilizar o comando `cy.contains()` para procurar por um texto dentro de um seletor, facilitando a busca por um elemento;

- Criar novos casos de teste, incluindo a função `it()`. Não há limites para a quantidade de testes incluídos.
