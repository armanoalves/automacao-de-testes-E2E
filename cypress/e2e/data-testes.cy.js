describe('Página de cadastro', () => {
  beforeEach(()=> {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');
  });

  const usuarios = require('../fixtures/usuarios.json');
  usuarios.forEach(usuario => {
    it('Preencher os campos do formulário corretamente para cadastrar um novo usuário', () => {

      cy.contains('a', 'Register now').click();
      cy.get('[data-test="email"]').type(usuario.email);
      cy.get('[data-test="fullName"]').type(usuario.fullName);
      cy.get('[data-test="registerUserName"]').type(usuario.userName);
      cy.get('[data-test="registerPassword"]').type(usuario.password);
      cy.get('[data-test="btnRegister"]').click();
    });
  });
});