import Cadastro from "../support/pages/cadastro/pagina-cadastro";

describe('Página de cadastro', () => {
  beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');
  });

  it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {

    // cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');
    // cy.get('[data-test="register"]').click();
    // cy.get('[data-test="email"]').type('catarina@email.com.br');
    // cy.get('[data-test="fullName"]').type('Catarina Pessoa');
    // cy.get('[data-test="registerUserName"]').type('catarinap');
    // cy.get('[data-test="registerPassword"]').type('catarina123');
    // cy.get('[data-test="btnregister"]').click();

    Cadastro.acessarPaginaDeCadastro();
    Cadastro.preencherFormulario();
    Cadastro.submeterCadastro();
  });
});