import { render, screen } from '@testing-library/react';
import List from './List';
import { Todo } from 'backend/src/models/todo';

describe('Async component', ()=>
{
	test('render list items with mocks', async ()=>
	{
		window.fetch=jest.fn().mockResolvedValueOnce({
			json: async ()=>[ { _id:'1', title:'Post from Jest' } ]
		});

		render(<List/>);
		const listItems:Todo[] = await screen.findAllByRole('listitem');

		expect(listItems).not.toHaveLength(0);
	});
});
