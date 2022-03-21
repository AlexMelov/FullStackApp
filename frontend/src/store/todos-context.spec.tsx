import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TodosContextProvider, { TodosContext } from './todos-context';

describe('TodoProvider', ()=>
{
	test('check length !== 0', ()=>
	{

		render(<TodosContextProvider>
			<TodosContext.Consumer>
				{
					value => <span>Is length: {value.fetchedItems}</span>
				}
			</TodosContext.Consumer>
		</TodosContextProvider>);

	expect(('Is length')).not.toHaveLength(0);

	});
	test('check length === exact number', ()=>
	{

		render(<TodosContextProvider>
			<TodosContext.Consumer>
				{
					value => <span>Is length: {value.fetchedItems}</span>
				}
			</TodosContext.Consumer>
		</TodosContextProvider>);

	expect(('is length')).not.toHaveLength(0);

	});
	test('check add todo func', ()=>
	{

		render(<TodosContextProvider>
			<TodosContext.Consumer>
				{
					value => <>
						<span>Is sending: {value.addTodo}</span>
						<button onClick={()=>
						{
							value.addTodo('My Todo from Jest');
						}
						}>Add Todo</button>
					</>
				}
			</TodosContext.Consumer>
		</TodosContextProvider>);
	fireEvent.click(screen.getByText('Add Todo'));
	expect(('Is sending: true')).toBeTruthy();

	});

});
