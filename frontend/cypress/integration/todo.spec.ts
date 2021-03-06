import { environmentHelper } from '../../src/environments/environment.helper';
import { Environment } from '../../src/environments/environment.interface';

const environment : Environment = environmentHelper(Cypress.env('APP_ENV'));

describe('todo', () =>
{
	beforeEach(() =>
	{
		cy.visit(environment.baseUrl);
	});

	it('todo list is working', () =>
	{
		cy.wait(2000);
		cy.reload();
		cy.get('[data-test="item"]').should('have.length.above', 0);
		cy.get('[data-test="item"]').should('have.length.below', 30);
	});

	it('adding todo to list', () =>
	{
		cy.reload();
		cy.get('[data-test="item"]').last().should('not.contain.text', 'My new Todo from Cypress');
		cy.get('[data-test="text-input"]').type('My new Todo from Cypress');
		cy.get('[data-test="add-button"]').click();
		cy.wait(2000);
		cy.reload();
		cy.get('[data-test="item"]').should('contain.text', 'My new Todo from Cypress');
	});

	it('removing todo from list', () =>
	{
		cy.reload();
		cy.get('[data-test="item"]').should('contain.text', 'My new Todo from Cypress');
		cy.get('[data-test=remove-button]').last().click();
		cy.wait(2000);
		cy.reload();
		cy.get('[data-test="item"]').should('not.contain.text', 'My new Todo from Cypress');
	});
});
