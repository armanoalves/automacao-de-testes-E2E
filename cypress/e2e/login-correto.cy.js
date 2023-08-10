describe('Página de login', () => {
  beforeEach(() => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');
  })
  it('Preencher os campos do login corretamente para realizar login', () => {
    cy.login('teste', '12345678999999');
  })
})