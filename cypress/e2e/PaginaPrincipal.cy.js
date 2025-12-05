describe('Smoke Test - Visitar pagina principal',() =>{
  
  before (() => {
    cy.visit('https://mixkit.co/')
  });
  it('visitamos la pagina principal y verificamos que cargue todos sus componentes', () => {
    cy.get('#CybotCookiebotDialog.CybotEdge #CybotCookiebotDialogFooter .CybotCookiebotDialogBodyButton:last-of-type').click();
    cy.get('.elements-toast-banner__wrapper').should('be.visible');
    cy.get('.global-header__logo').should('be.visible');
    cy.get('.top-header-banner__cta--desktop').should('exist');
    

})
})