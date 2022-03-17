describe('todo', () => {
	it('visit the page and changing the 6th todo and adding new Todo', () => {
		// add todoItem
		// delete todoItem
		cy.visit('localhost:3000')
		cy.findByRole('textbox', {name: /todo text/i}).type('My new todo!!!')
		let oldTodo;
		cy.get('.List_todos__8LYu9 > :nth-child(6)').then($title => oldTodo = $title.text('Changed Todo from Cypress'))
	})
	it('button-check', () => {
		cy.findByRole('button', {name: /add todo/i}).click()
	})
	it('listing the items only',()=>{

		cy.findByRole('list')
	})
	it('listing the items and removing them with cypress',()=>{
		let oldList;
		cy.findByRole('list').then($list=>oldList=$list.text("Removed from Cypress"))
	})

})
