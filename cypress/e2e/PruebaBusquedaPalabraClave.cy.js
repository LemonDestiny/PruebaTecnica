describe('Busqueda por palabra clave',() =>{
  
  before (() => {
    cy.visit('https://mixkit.co/')
  });
  it('visitamos la pagina principal y Realizamos una busqueda por una palabra clave', () => {
    //cerramos las ventanas emergentes
    cy.get('#CybotCookiebotDialog.CybotEdge #CybotCookiebotDialogFooter .CybotCookiebotDialogBodyButton:last-of-type').click();
    cy.get('.elements-toast-banner__close-button').click();
    //clickeamos en la barra de busqueda y realizamos la busqueda correspondiente
    cy.get('.new-search-form__input').click();
    cy.get('.new-search-form__input').type('Amanecer');
    cy.get('.new-search-form__input').type('{enter}');
    //comprobamos que existe una grilla de videos y checkeamos si cambio la pagina a la palabra clave
    cy.get('.breadcrumbs__item').should('include.text','Amanecer');
    cy.get('.item-grid__items').should('exist');
})
})