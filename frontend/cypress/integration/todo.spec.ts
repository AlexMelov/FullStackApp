describe('todo', () => 
{
	it('visit the page and changing the 6th todo and adding new Todo', () => 
	{
		cy.visit('localhost:3000');
	});
	it('Listing the items in other way', () => 
	{
		cy.get('[data-test="item"]').should('have.length.above', 0);
	});
	it('adding element', () => 
	{
		cy.get('[data-test="textInput"]').type('My new Todo from Cypress');
		cy.get('[data-test="addBtn"]').click();
	});
	it('removing element', () => 
	{
		cy.get('[data-test=removeBtn]').last().click();
	});
});
