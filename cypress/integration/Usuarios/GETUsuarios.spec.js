describe('Given the Users API', () => {
    context('When I send GET /usuarios', ()=>{
        it('Then it should return a list with all registered users', ()=>{
            // place your tests here
            cy.request({
                method: 'GET',
                url: '/usuarios'
            })
            .should((response) => {
                // all assertions should be placed here
                expect(response.status).to.eq(200)
                expect(response.body.quantidade).to.eq(response.body.usuarios.length)
                // cy.log(JSON.stringify(response))
                // Tests each item within the usuarios and that they should not equal null
                Cypress._.each(response.body.usuarios, (usuario) => {
                    expect(usuario.email).to.not.be.null
                    // expect all items to have the following keys within the object
                    expect(usuario).to.have.all.keys('nome', 'email', 'password', 'administrador', '_id')
                })
                
                // cy.log(JSON.stringify(response.body))
            })
        });
    });

    context('When I send GET /usuarios passing id query param', () =>{
        it('Then it should return only the filtered user', ()=>{
            // place your tests here
            cy.request({
                method: 'GET',
                url: '/usuarios',
                qs: {
                    _id: '2zZLQCn1wyYmiGUz'
                }
            })
            .should((response) => {
                expect(response.status).to.eq(200)
                // cy.log(JSON.stringify(response))
                expect(response.body.usuarios[0].nome).to.eq('Abel Goodwin I')
            });
        });
    });
})