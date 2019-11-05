describe('Pruebas de resolucion de issues de la Practica 2',  function() {
  it('Acceder a la pagina', function() {
    cy.visit('https://practica2-rodriguez.paiza-user.cloud/~ubuntu/index.php')
  })

  it('Mostrar telefono, no fecha - issue #1', function() {
    cy.get('body > div > div > aside > div.row.ng-scope > table > thead > tr')
    .children().contains('Telefono')
  })

  it('Agrega contacto - issue #2', function() {
    cy.get('#btn-add').click()
    cy.get('#nombre').type('New')
    cy.get('#direccion').type('New')
    cy.get('#telefono').type('0123456789')
    cy.get('#btn-send').click()

    cy.wait(2000)

    cy.get('body > div > div > aside > div.row.ng-scope > table > tbody > tr:last-child > td:nth-child(2)').contains('New')
    cy.get('body > div > div > aside > div.row.ng-scope > table > tbody > tr:last-child > td:nth-child(3)').contains('New')
    cy.get('body > div > div > aside > div.row.ng-scope > table > tbody > tr:last-child > td:nth-child(4)').contains('0123456789')
  })

  it('Eliminar - issue #3', function() {
    cy.get('body > div > div > aside > div.row.ng-scope > table > tbody > tr:last-child > td:nth-child(5) > button.btn.btn-danger.btn-sm').click()

    cy.wait(2000)
    
    cy.get('body > div > div > aside > div.row.ng-scope > table > tbody').children().should('have.length', 4)
  })
})