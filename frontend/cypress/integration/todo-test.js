describe ('todo',() => {
	it('user can add todo', ()=>{
		// add todoItem
		// delete todoItem
		cy.visit('localhost:3000')
		cy.findByRole('button', {  name: /add todo/i}).click()
		cy.findByRole('textbox', {  name: /todo text/i}).type('My new todo!!!')
		let oldTodo;
		cy.get('.List_todos__8LYu9 > :nth-child(6)').then($title=>oldTodo=$title.text('Changed Todo from Cypress'))
	})
})
