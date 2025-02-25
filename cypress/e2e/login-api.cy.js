describe('Testes em API', () => {
    context('Validação', () => {
        it('Verifica se a API está acessível', () => {
            cy.request({
                method: 'GET',
                url: Cypress.env('apiClinica'),
                failOnStatusCode: false
            }).then((response) => {
                cy.log(`Status retornado: ${response.status}`)
                cy.log(`Body: ${JSON.stringify(response.body)}`)
                expect(response.status).to.eq(200)
            })
        })
        
    })

    context('Testes em rotas com usuário autorizado', () => {
        beforeEach(() => {
            cy.loginApi(Cypress.env('email'), Cypress.env('senha'))
        })
        it('GET via url front para teste em resposta da home', () => {
            cy.request('GET', '/').should((response) => {
                expect(response.status).to.eq(200)
            })
        })

        it('Deve verificar se o token de autenticação é retornado após login via POST na API', () => {
            cy.get('@token').should('exist');
        })
    })

    context('Requesições de usuário clinica em especialistas', () => {
        beforeEach(() => {
            cy.fixture('especialistas.json').as('especialistas')
            cy.loginApi(Cypress.env('email'), Cypress.env('senha'))
        })

        it('POST em especialistas', () => {
            cy.get('@especialistas').then((dados) => {
                const especialista = dados.especialistas[0]
                cy.request({
                    method: 'POST',
                    url: Cypress.env('apiClinica'),
                    body: {
                        nome: especialista.nome,
                        email: especialista.email,
                        senha: especialista.senha,
                        endereco: {
                            cep: especialista.cep,
                            rua: especialista.rua,
                            numero: especialista.numero,
                            complemento: especialista.complemento,
                            estado: especialista.estado
                        }
                    },
                }).then((response) => {
                    if (response.status !== 201) {
                        cy.log('O status ${response.status} não é o esperado')
                    }
                    expect(response.body).to.have.property('id')
                    expect(response.body).to.have.property('nome')
                    expect(response.body).to.have.property('email')
                })
            })
        })
    })
})