const el = require('./elements').elements;

class Cadastro {
  acessarPaginaDeCadastro() {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');
    cy.get(el.registerNow).click();
  }

  preencherFormulario() {
    cy.get(el.email).type('catarina@email.com.br');
    cy.get(el.fullName).type('Catarina Pessoa');
    cy.get(el.registerUserName).type('catarinap');
    cy.get(el.registerPassword).type('catarina123');
  }

  submeterCadastro() {
    cy.get(el.btnRegister).click();
  }
}

export default new Cadastro();