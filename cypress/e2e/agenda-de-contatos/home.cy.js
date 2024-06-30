/// <reference types="cypress" />

describe('Testes para a home', () => {
    beforeEach(() => {
        cy.visit('https://agenda-contatos-react.vercel.app/')
    })
    
    it('Deve adicionar tarefa', () => {
        cy.get('input[type="text"]').type('Pedro Poliszuk')
        cy.get('input[type="email"]').type('pedropoliszuk@teste.com')
        cy.get('input[type="tel"]').type('15 991234567')
        cy.get('.adicionar').click()
    })

    it('Deve editar uma tarefa', () => {
        cy.get('.edit').click({ multiple: true })
        cy.get('input[type="text"]').clear().type('Pedro Neto')
        cy.get('input[type="email"]').clear().type('pedroneto@teste.com')
        cy.get('input[type="tel"]').clear().type('15 998999899')
        cy.get('.alterar').click()
    })

    it('Deve deletar uma tarefa', () => {
        cy.get('.delete').click({ multiple: true })
    })
})