// uses the faker lib, task is in plugins > index
// let fakeUser;

// describe('Given the Users API', () => {

//     // creates a different payload before each execution
//     // beforeEach(() => {
//     //     cy.task('freshUser').then((user) => {
//     //         fakeUser = user;
//     //         cy.log(JSON.stringify(fakeUser))
//     //     });
//     // });

//     context('When I send POST /usuarios', () => {
//         it('Then it should create a new user', () => {
//             cy.request({
//                 method: 'POST',
//                 url: '/usuarios',
//                 body: {
//                     nome: "Derp de Derp",
//                     email: "derp.joe@qa.com.br",
//                     password: "test",
//                     administrador: "true"
//                   }
//             })
//             .should((response) => {
//                 expect(response.status).eq(201)
//                 expect(response.body.message).eq("Cadastro realizado com sucesso")
//             });
//         });
//     });
// });