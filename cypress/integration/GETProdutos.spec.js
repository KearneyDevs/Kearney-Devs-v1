describe('Getting Products from the API', ()=> {
    context('GET method to /produtos', () => {
        it('should return a list with all products', () => {
            // Perform a request that gets items from the api
            cy.request({
                method: 'GET',
                url: 'https://serverest.dev/produtos'
            }) // Response object below of what to expect
            .should((response) => {
                expect(response.status).to.eq(200)
                expect(response.body.quantidade).to.eq(3)
                expect(response.body.produtos.length).to.be.eq(3)
                expect(response.body.produtos[0]).to.have.all.keys(
                    'nome', 'preco', 'descricao', 'quantidade', '_id'
                )
                // cy.log(JSON.stringify(response.body))
            });
        });
    });
});