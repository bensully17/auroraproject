
describe('Aurora Tests', function () {
  it('.should() - have functional API calls', function () {
    
    cy.visit('http://bensgalvanizeprojects.com/auroraforecast/index.html')
    cy.title().should('include', 'Aurora')
    cy.get('#options').find('button').should('contain', 'Arriving at Earth')
    cy.get('#buttons').find('button').should('contain', 'Hemisphere')
    cy.get('#speed').find('.value').should('exist')
    cy.get('#density').find('.value').should('exist')
    cy.get('#bz').find('.value').should('exist')
    cy.get('#intensity').find('.value').should('exist')
    cy.get('#ovation').find('img').should('have.attr', 'src').and('include', 'http://services.swpc.noaa.gov/images/animations/ovation-north/latest.jpg')
  })
})