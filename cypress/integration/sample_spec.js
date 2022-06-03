describe('My First Test', function(){
    it('Gets, types and asserts', function(){
        // Arrange - setup initial app state
        // - visit a web page
        // - query for an element
        cy.visit('http://localhost:3000')

        // cy.pause()
        // Act - take an action
        // - interact with that element
        cy.contains('@KearneyDevs').click()
        // cy.get('.sc-gKXOVf > :nth-child(1) > a').click()
        // cy.contains('props.section.content[2].title').click()

        // cy.pause()
        // Assert - make an assertion
        // - make an assertion about page content 
        // cy.url()
        //     .should('include', 'https://github.com/KearneyDevs')

        // cy.get('.action-email')
        //     .type('fake@email.com')
        //     .should('have.value', 'fake@email.com')
    })
})