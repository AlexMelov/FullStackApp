import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import TodosContextProvider, { TodosContext } from './todos-context';

describe('TodoProvider', ()=>
{

	test('listing the todos and checks if the array length is not 0', ()=>
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

	test('checking the length on the exact number of todos', ()=>
	{

		render(<TodosContextProvider>
			<TodosContext.Consumer>
				{
					value => <span>Is length: {value.fetchedItems}</span>
				}
			</TodosContext.Consumer>
		</TodosContextProvider>);
	expect(('is length')).toHaveLength(9);
	});

	test('checking add todo func', () =>
	{

		render(<TodosContextProvider>
			<TodosContext.Consumer>
				{
					value => <>
						<span>Is sending: {value.addTodo}</span>
						<button onClick={() =>
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
