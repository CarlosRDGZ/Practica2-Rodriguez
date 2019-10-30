describe('Pruebas de resolucion de issues de la Practica 2',  function() {
  it('Acceder a la pagina', function() {
    cy.visit('https://test-practica2-rodriguez.paiza-user.cloud/~ubuntu/index.php')
  })

  it('Agrega contacto - issue #2', function() {
    const isGirl = Math.random() < 0.5

    cy.get('#btn-add').click()
    cy.get('#nombre').type(`New ${isGirl ? 'gal' : 'dude'}`)
    cy.get('#direccion').type(`Here ${isGirl ? 'she' : 'he'} lives`)
    cy.get('#telefono').type(Math.trunc(Math.random() * 10000000000))
    cy.get('#btn-send').click()
  })
})