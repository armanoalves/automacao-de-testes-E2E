describe('Página de login', () => {
  it('Preencher os campos do login corretamente para realizar login', () => {
    cy.visit('https://3076-cypress-alurapic-front.vercel.app/#/home');
    cy.get('[data-test="loginUserName"]').type('catarinap');
    cy.get('[data-test="loginPassword"]').type('catarina123');
    cy.contains('button', 'login').click();
  })
})