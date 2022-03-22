describe('todo', () =>
{
	beforeEach('visit the page and changing the 6th todo and adding new Todo', ()=>
	{
		cy.visit('localhost:3000');
	});
	it('todo list is working', () =>
	{
		cy.get('[data-test="item"]').should('have.length.above', 0);
		expect(cy.get('[data-test="item"]').should('have.length.below', 20));
	});
	it('adding todo to list', () =>
	{
		expect(cy.get('[data-test="item"]').should('not.contain.text', 'My new Todo from Cypress' ));
		cy.get('[data-test="text-input"]').type('My new Todo from Cypress');
		cy.get('[data-test="add-button"]').click();
		expect(cy.get('[data-test="item"]').should('contain.text', 'My new Todo from Cypress' ));

	});
	it('removing todo from list', () =>
	{

		expect((cy.get('[data-test="item"]')).should('contain.text', 'My new Todo from Cypress' ));
		cy.get('[data-test=remove-button]').last().click();
		expect((cy.get('[data-test="item"]')).should('not.contain.text', 'My new Todo from Cypress' ));

	});
});
