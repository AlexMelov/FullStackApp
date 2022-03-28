describe('todo', () =>
{
	beforeEach(() =>
	{
		cy.visit('localhost:3000');
	});

	it('todo list is working', () =>
	{
		cy.get('[data-test="item"]').should('have.length.above', 0);
		expect(cy.get('[data-test="item"]').should('have.length.below', 30));
	});

	it('adding todo to list', () =>
	{
		expect(cy.get('[data-test="item"]').should('not.contain.text', 'My new Todo from Cypress'));
		cy.get('[data-test="title-input"]').type('My new Todo from Cypress');
		cy.get('[data-test="description-input"]').type('Cypress Todo Described');
		cy.get('[data-test="url-input"]').type('https://images.unsplash.com/photo-1647163927209-b7e5a9d53edc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80');
		cy.get('[data-test="add-button"]').click();
		cy.wait(3000);
		cy.reload();
		expect(cy.get('[data-test="item"]').last().should('contain.text', 'My new Todo from Cypress'));
		expect(cy.get('[data-test="item"]').last().should('contain.text', 'Cypress Todo Described'));
	});

	it('Clicking the image, and open in new empty tab', () =>
	{
		expect(cy.get('[data-test="item"]').should('be.visible'));
		cy.get('[data-test="item"]').last().click();
		expect(cy.get('[data-test="item"]').last().should('be.visible'));
	});

	it('Editing title, description and url, should open new picture', () =>
	{
		expect(cy.get('[data-test="item"]').should('contain.text', 'My new Todo from Cypress'));
		cy.get('[data-test="edit-button"]').last().click();
		cy.get('[data-test="edit-title"]').type('{selectall}{backspace} My new Todo edited inside Cypress');
		cy.get('[data-test="edit-decsription"]').type('{selectall}{backspace} Cypress Todo Description edited');
		cy.get('[data-test="edit-url"]').type('{selectall}{backspace} https://images.unsplash.com/photo-1641135821230-04f53e366336?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
		cy.get('[data-test="patch-todo"]').click();
		cy.wait(3000);
		cy.reload();
		cy.get('[data-test="item"]').last().click();
		expect(cy.get('[data-test="item"]').should('contain.text', 'My new Todo edited inside Cypress'));
	});

	it('removing todo from list', () =>
	{

		expect((cy.get('[data-test="item"]')).should('contain.text', 'My new Todo edited inside Cypress' ));
		cy.get('[data-test=remove-button]').last().click();
		expect((cy.get('[data-test="item"]')).should('not.contain.text', 'My new Todo edited inside Cypress' ));

	});
});
