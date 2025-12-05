describe('Busqueda por palabra clave',() =>{
  
  before (() => {
    cy.visit('https://mixkit.co/')
  });
  it('visitamos la pagina principal y Realizamos una busqueda por categoria', () => {
    //cerramos las ventanas emergentes
    cy.get('#CybotCookiebotDialog.CybotEdge #CybotCookiebotDialogFooter .CybotCookiebotDialogBodyButton:last-of-type').click();
    cy.get('.elements-toast-banner__close-button').click();
    //Seleccionamos la categoria de videos
    cy.get('.home-item-type-summary__link[href="/free-stock-video/"').click();
    //Dentro de videos, seleccionamos una categoria al azar, esta vez animales
    cy.get('.global-navigation__link[href="/free-stock-video/animal/"]').click();
   
})
})