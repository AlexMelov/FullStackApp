describe('todo', () => {
	it('visit the page and changing the 6th todo and adding new Todo', () => {
		cy.visit('localhost:3000')
		cy.get('#text').type('My new todo!!!')
		let oldTodo;
		cy.get('.List_todos__8LYu9 > :nth-child(6)').then($title => oldTodo = $title.text('Changed Todo from Cypress'))
		expect('textbox').to.be.ok
	})
	it('button-check', () => {
		expect('button').to.be.ok
	})
	it('listing the items only',()=>{
		expect('list').to.include('li')

	})
	it('listing the items and removing them with cypress',()=>{
		expect('list').to.contain('li')
	})
	it('check the item',()=>{
		cy.get('[data-test="2"] > p').then($data=>$data.text('Changed Todo from Cypress!!'))
	})

})
